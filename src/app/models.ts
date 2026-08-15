export type CardType = 'clarification' | 'attribute' | 'rule' | 'content' | 'scope' | 'ruleProposal' | string;
export interface Evidence { id: string; label: string; source?: string; version?: string; sourceSystem?: string; entityId?: string; entityVersion?: string; }
export interface Card { id: string; cardType: CardType; schemaVersion?: string; eyebrow: string; title: string; description: string; score?: number; confidence?: string; status?: string; tags?: string[]; evidence?: Evidence[]; choices?: string[]; selected?: boolean; data?: any; securitySensitive?: boolean; }
export interface ProposedAction { id: string; type: string; artifactId: string; requiresConfirmation: boolean; expiresAt: string; validationReceiptId: string; status?: string; result?: any; }
export interface Message { id: string; role: 'user' | 'assistant'; content: string; time: string; cards?: Card[]; scope?: string; artifacts?: any[]; proposedActions?: ProposedAction[]; }
export interface ChatResponse { operationId: string; conversationId: string; conversationVersion: number; message: Message; progress: string[]; proposedActions: ProposedAction[]; }
