import { Scope } from './domain.js';

export function classifyScope(input: string): Scope {
  const text = input.toLowerCase();
  if (/ignore (approval|policy)|publish|activate|bypass|production/.test(text)) return 'DISALLOWED';
  if (/weather|recipe|sports score|write (a )?poem|vacation/.test(text)) return 'OUT_OF_SCOPE';
  if (/what does rollover mean/.test(text)) return 'SUPPORTING_CONTEXT';
  if (/^(tell me about|what is) retirement\??$/.test(text.trim())) return 'AMBIGUOUS';
  return 'IN_SCOPE';
}
