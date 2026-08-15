import { Component, ElementRef, ViewChild, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from './chat.service';
import { Card, Message, ProposedAction } from './models';

@Component({
  selector: 'app-root', standalone: true, imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html', styleUrl: './app.component.css'
})
export class AppComponent {
  private api = inject(ChatService);
  @ViewChild('timeline') timeline?: ElementRef<HTMLElement>;
  conversationId = '';
  conversationVersion?: number;
  draft = '';
  busy = signal(false);
  progress = signal<string[]>([]);
  activeNav = signal('New conversation');
  evidenceOpen = signal<Record<string, boolean>>({});
  proposalOpen = signal<Record<string, boolean>>({});
  recent = signal<any[]>([]);
  health = signal<any>(undefined);
  messages = signal<Message[]>([{
    id: 'welcome', role: 'assistant', time: 'Now',
    content: 'Hi, I’m your personalization intelligence partner. Describe an audience, paste campaign content, or ask me to find an existing rule.',
  }]);
  suggestions = [
    'Find rules for high-value retirement customers',
    'What attributes describe customers nearing retirement?',
    'Recommend rules for this campaign content'
  ];
  hasConversation = computed(() => this.messages().length > 1);
  constructor() { this.refreshRecent(); this.refreshHealth(); }

  async send(value?: string) {
    const content = (value ?? this.draft).trim();
    if (!content || this.busy()) return;
    this.draft = '';
    this.messages.update(m => [...m, { id: crypto.randomUUID(), role: 'user', content, time: 'Now' }]);
    this.busy.set(true);
    this.progress.set(['Checking request scope']); this.scroll();
    try {
      if (!this.conversationId) this.conversationId = (await this.api.create()).conversationId;
      const timers = [
        setTimeout(() => this.progress.set(['Request is in scope', 'Resolving glossary attributes']), 450),
        setTimeout(() => this.progress.set(['Request is in scope', 'Glossary resolved', 'Searching approved rules and content']), 950)
      ];
      const response = await this.api.send(this.conversationId, content, this.conversationVersion);
      this.conversationVersion = response.conversationVersion;
      timers.forEach(clearTimeout);
      this.progress.set(response.progress);
      await new Promise(r => setTimeout(r, 300));
      this.messages.update(m => [...m, response.message]); this.refreshRecent();
      this.progress.set([]);
    } catch {
      this.messages.update(m => [...m, { id: crypto.randomUUID(), role: 'assistant', time: 'Now', content: 'I couldn’t reach the intelligence service. Please make sure the API is running and try again.' }]);
      this.progress.set([]);
    } finally { this.busy.set(false); this.scroll(); }
  }

  toggleEvidence(id: string) { this.evidenceOpen.update(v => ({ ...v, [id]: !v[id] })); }
  toggleProposal(id: string) { this.proposalOpen.update(v => ({ ...v, [id]: !v[id] })); }
  choose(card: Card, choice: string) { this.send(`${card.title}: ${choice}`); }
  select(card: Card) { card.selected = !card.selected; this.messages.update(m => [...m]); }
  async confirm(action: ProposedAction) { if(this.busy()||action.status==='SUCCEEDED')return;this.busy.set(true);this.progress.set(['Reauthorizing action','Revalidating artifact']);try{action.result=await this.api.execute(action.id);action.status='SUCCEEDED';this.messages.update(m=>[...m]);}catch{action.status='FAILED';}finally{this.progress.set([]);this.busy.set(false);} }
  async loadConversation(id:string){const c=await this.api.get(id);this.conversationId=id;this.conversationVersion=c.version;this.messages.set(c.messages.length?c.messages:this.messages());}
  newConversation(){this.conversationId='';this.conversationVersion=undefined;this.messages.set([this.messages()[0]]);}
  private async refreshRecent(){try{this.recent.set((await this.api.list()).conversations);}catch{/* API may not be running */}}
  private async refreshHealth(){try{this.health.set(await this.api.health());}catch(error:any){this.health.set(error?.error??{status:'unavailable'});}}
  onEnter(event: Event) {
    const keyboardEvent = event as KeyboardEvent;
    if (keyboardEvent.shiftKey) return;
    keyboardEvent.preventDefault();
    this.send();
  }
  private scroll() { setTimeout(() => this.timeline?.nativeElement.scrollTo({ top: this.timeline.nativeElement.scrollHeight, behavior: 'smooth' }), 50); }
}
