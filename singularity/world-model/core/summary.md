# personalization-conversational-intelligence — deterministic light world model

> Generated 17 August 2026 (2026-08-17T00:10:03.564Z) · source `aef3af018d46c502bdfc3000dab834f9173008af` · branch `WRK-2090`

## Repository shape

- Files indexed: 31
- Source-like files: 16
- Test-like files: 1
- Build manifests: 1
- Deployment/operations files: 0
- Languages: TypeScript (16)
- Top-level areas: server (13), (root) (9), src (8), docs (1)

## Facts {#core.facts}

<!-- singularity-flow:repository-facts:start -->
```yaml
# Derived from the repository, not inferred. Every path and line is checkable.
files: 31
languages_scanned: 16
frameworks: [Angular, Express, TypeScript]
commands:
  - { run: "npm run dev", at: "package.json:6" }
  - { run: "npm run dev:demo", at: "package.json:7" }
  - { run: "npm run dev:api", at: "package.json:8" }
  - { run: "npm run dev:web", at: "package.json:9" }
  - { run: "npm run build", at: "package.json:10" }
  - { run: "npm run build:web", at: "package.json:11" }
  - { run: "npm run build:api", at: "package.json:12" }
  - { run: "npm run test", at: "package.json:13" }
# What the rest of the repository depends on. A count, not an impression.
most_depended_on:
  - { path: src/app/models.ts, imported_by: 2 }
  - { path: src/app/app.component.ts, imported_by: 1 }
  - { path: src/app/chat.service.ts, imported_by: 1 }
# Commits touching each file in the last year, from Git history.
most_changed:
  - { path: .env.example, commits: 1 }
  - { path: .gitignore, commits: 1 }
  - { path: angular.json, commits: 1 }
  - { path: docs/integration.md, commits: 1 }
  - { path: package-lock.json, commits: 1 }
  - { path: package.json, commits: 1 }
  - { path: proxy.conf.json, commits: 1 }
  - { path: README.md, commits: 1 }
# 29 exported top-level declarations; the most-depended-on files' are listed.
key_symbols:
  - { name: AppComponent, kind: class, at: "src/app/app.component.ts:11" }
  - { name: ChatService, kind: class, at: "src/app/chat.service.ts:7" }
tests: 1
```
<!-- singularity-flow:repository-facts:end -->

## Likely entry points

- `package.json`
- `server/app.ts`
- `server/index.ts`
- `src/main.ts`

## Observed commands

- `npm run build`
- `npm run build:api`
- `npm run build:web`
- `npm run dev`
- `npm run dev:api`
- `npm run dev:demo`
- `npm run dev:web`
- `npm run test`

## Grounding boundary

This model was generated locally without Copilot or another AI model and consumed **zero model tokens**. It intentionally records only deterministic repository metadata. It does not claim runtime behavior, business meaning, ownership, security, test coverage, or architectural intent. Deeper phases can replace it with a quick, standard, or deep model when semantic analysis is worth the token cost.
