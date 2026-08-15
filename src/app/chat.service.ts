import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ChatResponse } from './models';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private http = inject(HttpClient);
  create() { return firstValueFrom(this.http.post<{ conversationId: string }>('/api/v1/conversations', {})); }
  send(conversationId: string, content: string, expectedConversationVersion?: number) {
    return firstValueFrom(this.http.post<ChatResponse>(`/api/v1/conversations/${conversationId}/messages`, { message: content, expectedConversationVersion, clientMessageId: crypto.randomUUID() }));
  }
  list() { return firstValueFrom(this.http.get<{conversations: any[]}>('/api/v1/conversations')); }
  get(conversationId: string) { return firstValueFrom(this.http.get<any>(`/api/v1/conversations/${conversationId}`)); }
  execute(actionId: string) { return firstValueFrom(this.http.post<any>(`/api/v1/actions/${actionId}/execute`, {}, { headers: { 'Idempotency-Key': crypto.randomUUID() } })); }
  health() { return firstValueFrom(this.http.get<any>('/api/v1/health')); }
}
