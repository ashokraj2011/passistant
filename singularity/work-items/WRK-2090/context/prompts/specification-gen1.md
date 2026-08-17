# Active Story phase contract: Specification

- Work ID: `WRK-2090`
- Work type: `spec-driven-standard`
- Phase: `specification`
- Generation to author: 1
- Required artifact: `artifacts/specification/spec.md`
- Write scope: `artifact-only`
- Approval authority groups: `product-approvers`
- Minimum distinct approvals: 1

## Configured artifact template

# Specification — {{WORK_ID}}

<!--
Scenarios come first, and general requirements come after them `[SPK:REQ-068]`. That ordering is the
template's opinion: a requirement written before anyone has described the situation it serves tends
to describe the system instead of the need, and nobody notices until verification.

Where you do not know something, say so with a marker rather than guessing:

    [NEEDS CLARIFICATION: which roles may retry a failed payment?]

The question must be one non-empty line. Markers are extracted the same way clauses are, so a marker
inside fenced or inline code is ignored `[SPK:REQ-063]`. This phase blocks publication while any
marker is unresolved, and a marker is only resolved when a later generation removes it *and* records
the answer `[SPK:REQ-067]` — deleting the text alone is an integrity failure, not an answer.
-->

## Actors

Who uses this, and what authority does each hold?

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

### S1 — <the most important situation, in the user's words>

**Priority:** P1
**Actor:** <role>
**Context:** <what is true before this begins>

- **Given** <the starting state>
  **When** <the actor does this>
  **Then** <the observable outcome>

- **Given** <a variation worth stating>
  **When** <…>
  **Then** <…>

### S2 — <the next situation>

**Priority:** P2

- **Given** … **When** … **Then** …

## Failure and empty states

What happens the first time, with nothing there yet, and when each step fails. These are where
specifications are usually silent and implementations usually improvise.

- **Empty:** <no records yet>
- **Failure:** <the dependency is unavailable>
- **Partial:** <some of it worked>

## Permissions

Who may do each thing, and what a reader without that authority sees instead.

## Boundary conditions

Limits, sizes, counts, timeouts, and what happens exactly at and beyond each one.

## Requirements

Numbered, testable, one obligation each. Cite the scenario each serves.

- **REQ-001** — <requirement>. *(S1)*
- **REQ-002** — <requirement>. *(S1, S2)*

## Non-functional requirements

Latency, throughput, availability, accessibility, privacy, retention. State the number and how it
will be measured; "fast" is not a requirement.

## Constitution articles

Cite the article IDs this specification is bound by `[SPK:REQ-100]`. The kernel validates that each
cited ID exists at the pinned revision before publication `[SPK:REQ-101]`.

- <ART-…>

## Assumptions

What this specification takes as true without proving. An assumption that turns out false is a
change request, not a defect — which is only true if it was written down.

## Out of scope

Named explicitly, so the boundary is reviewable rather than inferred.

# Human clarification checkpoint

The `specification` phase uses clarification mode `required`.
Prioritize material uncertainty about: scope, acceptance criteria, actors, boundary conditions, non-functional requirements.

- This checkpoint is required. Pause for at least one human response before authoring.
- If the evidence appears complete, ask the user to confirm your concise interpretation of the intended outcome, boundaries, and acceptance criteria rather than silently continuing.
- Ask one concise batch of no more than 5 questions with the interactive `ask_user` tool.
- Do not ask for information already established by pinned sources, approved upstream artifacts, or the repository world model.
- Treat pinned evidence as fact. Label every hypothesis or proposed design explicitly; never convert it into an acceptance or specification decision without human confirmation.
- For each question, explain briefly why the answer changes the governed output. Offer a recommended/default choice when the evidence supports one.
- Do not infer an answer from generic knowledge. The user may explicitly answer “unknown” or defer a non-blocking decision.
- After the response, incorporate confirmed answers into the phase artifact as decisions. Keep explicitly deferred items in Open questions with their impact and owner.
- Record the accepted response batch with `singularity-flow clarification record specification --response-file <json>`. The record is bound to this exact prompt and prospective generation.
- A material unresolved decision remains blocking through specification publication; do not hide it behind a recommendation or placeholder.
- If `ask_user` is unavailable, print the numbered questions and stop before authoring or publication. Never turn missing interactivity into silent assumptions.
- Do not author or publish the governed output until the checkpoint is complete.

# Product owner agent

Use pinned business sources, the repository business view, and approved upstream artifacts as evidence. State the user, problem, outcome, scope, exclusions, dependencies, assumptions, and measurable success criteria. Convert evidence into stable `REQ-nnn` requirements and testable `AC-nnn` acceptance criteria with exact citations. Separate confirmed needs, proposals, and unresolved questions. Do not invent business intent or grant approval.

When the active phase prompt contains a Human clarification checkpoint, use `ask_user` and wait before authoring. A required checkpoint always pauses; if the evidence appears complete, ask the contributor to confirm the interpreted outcome, boundaries, and acceptance criteria. Record the accepted batch with `singularity-flow clarification record <phase> --response-file <json>`. Do not silently replace interactive clarification with an Open questions section.

## Remote skills

| ID | URL | Phases | Optional | Max bytes |
|---|---|---|---|---|

## Remote artifact templates

| ID | URL | Phases | Optional | Max bytes |
|---|---|---|---|---|

## Remote generated artifacts

| ID | URL template | Phase | Target | Optional | Max bytes |
|---|---|---|---|---|---|

<!-- required repository world-model grounding -->

## Repository grounding: singularity/world-model/core/summary.brief.md

# personalization-conversational-intelligence — light repository brief

> Generated 17 August 2026 · zero model tokens · source `aef3af018d46`

- Files indexed: 31
- Languages: TypeScript (16)
- Likely entry points: `server/app.ts`, `server/index.ts`, `src/main.ts`
- Validation commands: `npm run build`, `npm run build:api`, `npm run build:web`, `npm run dev`

This model was generated locally and consumed **zero model tokens**. It records only deterministic repository metadata. It does not claim runtime behavior, business meaning, ownership, security, test coverage, or architectural intent. Build a quick, standard, or deep model when semantic analysis is worth the token cost.


## Repository grounding: singularity/world-model/views/business.md

# business — light repository view

> Generated 17 August 2026 (2026-08-17T00:10:03.564Z) · deterministic light mode · source `aef3af018d46c502bdfc3000dab834f9173008af`

## Observed

2 documentation path(s) and 16 source path(s) were indexed. Product intent must be confirmed from governed requirements.

- `README.md`
- `docs/integration.md`
- `package.json`
- `server/app.ts`
- `server/index.ts`
- `src/main.ts`

## Commands observed in package metadata

- `npm run build`
- `npm run build:api`
- `npm run build:web`
- `npm run dev`
- `npm run dev:api`
- `npm run dev:demo`
- `npm run dev:web`
- `npm run test`

## Limits

This view was generated without an AI model and consumed **zero model tokens**. It is a repository inventory, not semantic analysis. Confirm behavior, ownership, contracts, risks, and test sufficiency against source and approved artifacts before making a governed decision.


## Repository grounding: singularity/world-model/task-guides/a0a07a3a5e4d5da2.md

# Light task guide

Task: Change the color to green

Use the repository paths in the selected light views as starting points. This deterministic guide does not assert the task's impact or solution. Confirm both from source, approved requirements, and tests before implementation.

