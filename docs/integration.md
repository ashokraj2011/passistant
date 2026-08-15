# Live service integration

The application starts in `live` mode. It never falls back to fixture data when a dependency is missing or unhealthy. Copy `.env.example` into your deployment environment and provide the fixed service base URLs and credentials.

## Expected HTTP contracts

All responses may be returned directly as JSON, or wrapped in `{ "data": ... }`, `{ "items": [...] }`, or `{ "results": [...] }`.

| Capability | Request |
| --- | --- |
| Data dictionary search | `POST {DATA_DICTIONARY_API_BASE_URL}/v1/data-elements/search` |
| Datasource | `GET .../v1/datasources/{id}` |
| Namespace | `GET .../v1/namespaces/{id}` |
| Glossary search | `POST {GLOSSARY_API_BASE_URL}/v1/attributes/search` |
| Rule search | `POST {RULES_API_BASE_URL}/v1/rules/search` |
| Rule graph | `GET .../v1/rules/{id}/graph?maxDepth=3` |
| Rule similarity | `POST .../v1/rules/similarity` |
| Historical content | `POST {CONTENT_API_BASE_URL}/v1/content/search-similar` |
| Treatment map | `GET {TREATMENT_API_BASE_URL}/v1/treatment-maps/{id}` |
| ML recommendation | `POST {ML_API_BASE_URL}/v1/recommend` |
| CCRE validation | `POST {CCRE_API_BASE_URL}/v1/rules/validate` |
| CCRE tests | `POST .../v1/rules/test` |
| Rule draft creation | `POST {RULES_API_BASE_URL}/v1/rules/drafts` |
| Treatment draft creation | `POST {TREATMENT_API_BASE_URL}/v1/treatment-maps/drafts` |

The shared `PLATFORM_API_TOKEN` is sent as a bearer token. For separate service credentials, replace the token construction in `server/adapters.ts` with your enterprise service-identity provider. URLs remain server configuration and are never accepted from chat or model output.

## LLM gateway

The gateway must expose an OpenAI-compatible chat-completions interface and support structured output. Configure:

```dotenv
LLM_GATEWAY_BASE_URL=https://gateway.example/v1/
LLM_GATEWAY_API_KEY=secret
LLM_MODEL=approved-model-id
```

Express sends the current request and compact authorized candidate set to the model. The response must match the synthesis schema in `server/gateway.ts`. Express rejects any selected rule/version or attribute ID that was not in the authorized candidate set. Scores, statuses, versions, and evidence always come from platform services rather than the model.

## Local demo

Demo data is opt-in and never used in live mode:

```bash
npm run dev:demo
```

This is intended for UI development and automated tests only.
