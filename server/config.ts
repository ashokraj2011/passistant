import { z } from 'zod';

const optionalUrl=z.string().url().optional();
const schema=z.object({
  NODE_ENV:z.string().default('development'),
  DATA_MODE:z.enum(['live','demo']).default('live'),
  PLATFORM_API_TOKEN:z.string().optional(),
  DATA_DICTIONARY_API_BASE_URL:optionalUrl,
  GLOSSARY_API_BASE_URL:optionalUrl,
  RULES_API_BASE_URL:optionalUrl,
  CONTENT_API_BASE_URL:optionalUrl,
  TREATMENT_API_BASE_URL:optionalUrl,
  CCRE_API_BASE_URL:optionalUrl,
  ML_API_BASE_URL:optionalUrl,
  LLM_GATEWAY_BASE_URL:optionalUrl,
  LLM_GATEWAY_API_KEY:z.string().optional(),
  LLM_MODEL:z.string().optional(),
  DATABASE_PATH:z.string().optional(),
  SERVICE_TIMEOUT_MS:z.coerce.number().int().min(500).max(30_000).default(5_000)
});
export const config=schema.parse(process.env);
export type ServiceName='dataDictionary'|'glossary'|'rules'|'content'|'treatment'|'ccre'|'ml'|'llm';
const urls:Record<ServiceName,string|undefined>={dataDictionary:config.DATA_DICTIONARY_API_BASE_URL,glossary:config.GLOSSARY_API_BASE_URL,rules:config.RULES_API_BASE_URL,content:config.CONTENT_API_BASE_URL,treatment:config.TREATMENT_API_BASE_URL,ccre:config.CCRE_API_BASE_URL,ml:config.ML_API_BASE_URL,llm:config.LLM_GATEWAY_BASE_URL};
export const serviceUrl=(name:ServiceName)=>urls[name];
export function configurationStatus(){return Object.entries(urls).map(([name,url])=>({name,configured:Boolean(url),mode:config.DATA_MODE}));}
