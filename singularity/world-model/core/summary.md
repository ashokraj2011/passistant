# personalization-conversational-intelligence — deterministic light world model

> Generated 25 August 2026 (2026-08-25T13:26:02.007Z) · source `3eec0a4d99c77ca5436329ba873a66112dc201c4` · branch `COLOR-RED`

## Repository shape

- Files indexed: 35
- Source-like files: 17
- Test-like files: 2
- Build manifests: 1
- Deployment/operations files: 0
- Languages: TypeScript (16), JavaScript (1)
- Top-level areas: server (15), (root) (9), src (8), .sflow (2), docs (1)

## Facts {#core.facts}

<!-- singularity-flow:repository-facts:start -->
```yaml
# Derived from the repository, not inferred. Every path and line is checkable.
files: 35
languages_scanned: 18
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
  - { path: angular.json, commits: 2 }
  - { path: server/scope.test.ts, commits: 2 }
  - { path: src/app/app.component.css, commits: 2 }
  - { path: src/app/app.component.html, commits: 2 }
  - { path: .env.example, commits: 1 }
  - { path: .gitignore, commits: 1 }
  - { path: docs/integration.md, commits: 1 }
  - { path: package-lock.json, commits: 1 }
# 29 exported top-level declarations; the most-depended-on files' are listed.
key_symbols:
  - { name: AppComponent, kind: class, at: "src/app/app.component.ts:11" }
  - { name: ChatService, kind: class, at: "src/app/chat.service.ts:7" }
tests: 2
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
