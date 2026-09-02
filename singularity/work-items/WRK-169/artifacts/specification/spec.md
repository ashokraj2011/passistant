<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "WRK-169",
  "workType": "spec-driven-standard",
  "phase": "specification",
  "generation": 1,
  "status": "in_progress",
  "generatedBy": {
    "name": "Ashok Raj",
    "email": "88361104+ashokraj2011@users.noreply.github.com",
    "login": "ashokraj2011",
    "githubLookup": "resolved"
  },
  "generatedAgent": "product-owner",
  "authorship": {
    "schemaVersion": 1,
    "producer": "governed-agent",
    "channel": "copilot-host",
    "actor": {
      "name": "Ashok Raj",
      "email": "88361104+ashokraj2011@users.noreply.github.com",
      "login": "ashokraj2011",
      "githubLookup": "resolved"
    },
    "governedAgentContext": {
      "agentId": "product-owner"
    },
    "kernelModel": {
      "invoked": false,
      "status": "exact",
      "invocationIds": []
    },
    "externalAiUse": {
      "value": "unknown",
      "status": "unavailable"
    },
    "changeOrigins": [
      "copilot"
    ],
    "source": {
      "kind": "in-place",
      "filename": "spec.md",
      "mediaType": "text/markdown",
      "sha256": "952407c9e930ad06e26d757ae6416806255a1e638f3dacbe52f4b3289b0b3c96",
      "bytes": 11193
    },
    "generation": 1,
    "publishedAt": "2026-09-02T09:02:43.409Z"
  },
  "sourceCommit": "2453471e0321e90288d0f16a94069a07c15fac1c",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "b2a3f27c7de49182448552fc8f7ee0673a3de47442dda9fefdf56959b4c1596f",
  "sourceSha256": "596a6443a39f38706f0a6e22ab26c835a21bd2e6a1473e30b4f265f2e667c15c",
  "template": {
    "path": "singularity/templates/spec-driven/spec.md",
    "sha256": "27424a624b1dab57323fd7482ac62708bd42d11ba42e41c102f94e15182fe485"
  },
  "inputs": null,
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": {
    "generation": 1,
    "path": "singularity/work-items/WRK-169/context/clarifications-specification-gen1.json",
    "sha256": "7a80be55e0074eb9dd373746b8426a268e8a6f4f8505f81105346cdb97d23beb",
    "promptSha256": "896143dbac0a30ebd35dda09b33ed9c122d27627fe3992cfa24b5705747d0b1e",
    "responses": 5,
    "markers": [],
    "recordedAt": "2026-09-02T09:00:30.016Z",
    "recordedBy": {
      "name": "Ashok Raj",
      "email": "88361104+ashokraj2011@users.noreply.github.com",
      "login": "ashokraj2011",
      "githubLookup": "resolved"
    }
  },
  "telemetry": [
    {
      "generation": 1,
      "path": "singularity/work-items/WRK-169/telemetry/specification-gen1.json",
      "sha256": "91f569cb114261a625539f7ec39ee3d1d80d96b077537e3455bb91b581030745",
      "status": "pending",
      "models": [],
      "providerCost": null
    }
  ],
  "remoteOutputs": [],
  "usage": [
    {
      "status": "unavailable",
      "source": "copilot-otel-unavailable",
      "provider": null,
      "model": null,
      "requestedModel": null,
      "resolvedModel": null,
      "resolvedModelAssurance": "unavailable",
      "inputTokens": null,
      "outputTokens": null,
      "cachedInputTokens": null,
      "cacheWriteInputTokens": null,
      "totalTokens": null,
      "providerCost": null,
      "costStatus": "unavailable",
      "spans": null,
      "startedAt": "2026-09-02T09:02:43.409Z",
      "completedAt": "2026-09-02T09:02:43.409Z",
      "agent": "product-owner",
      "generation": 1
    }
  ],
  "sequenceOverrides": [],
  "approvals": [],
  "selfApproval": false,
  "conformanceTree": null
}
-->

# Specification — WRK-169

## Agent brief

The Personalization Conversational Intelligence web client is currently themed green. The pinned
Story asks for the colour to be changed to blue. Human clarification (generation 1) fixed the scope:
every green accent in the Angular client becomes blue, driven by the three theme custom properties
in `src/app/app.component.css` (`--green`, `--green-dark`, `--mint`) *and* by the hard-coded green
hex values scattered through the same stylesheet (brand gradient, status dot, hover borders,
box-shadow tints, icon accents, breadcrumb, chips). The approved palette is primary `#0b5cad`,
dark `#084a8a`, tint `#e6eef7`. All non-green colours — neutral ink `#17252d`, muted greys, the
amber connection banner, and the page backgrounds `#f7f9f8` / `#f5f7f6` — stay exactly as they are.
The change is purely presentational: no markup, component logic, server code, or API contract
changes. Contrast is a hard constraint, not an aspiration: text on blue surfaces must meet WCAG 2.1
AA at 4.5:1 and UI component boundaries at 3:1. Done is evidenced by a single screenshot of the
main chat screen taken from a `npm run dev` session showing the blue theme.

## Actors

- **End user of the web client** — sees the interface. Holds no configuration authority over the
  palette; the colour is fixed in the shipped stylesheet.
- **Developer implementing the change** — authority to edit `src/app/app.component.css` and
  `src/styles.css`. No authority to widen scope into markup, behaviour, or server code.
- **Reviewer / approver (`product-approvers`)** — sole authority to accept the screenshot evidence
  and approve the phase. Approval is a human Git identity action.

## User scenarios

Prioritized. Each scenario leads with the situation, then its acceptance cases.

### S1 — "The app is green and it needs to be blue"

**Priority:** P1
**Actor:** End user of the web client
**Context:** The application renders with a green identity: the sidebar "New chat" button, the
brand mark gradient, the breadcrumb label, the status dot, the starter-card icons, the thinking
indicator bullets, and the result-card chips all use green values from
`src/app/app.component.css`.

- **Given** the client is served by `npm run dev`
  **When** the user opens the main chat screen
  **Then** every previously green accent renders in the approved blue palette, and no green accent
  remains anywhere on that screen.

- **Given** the user hovers a starter-grid button or a result card
  **When** the hover state applies
  **Then** the hover border and shadow tint are blue rather than green.

- **Given** the user reads text placed on a blue surface, such as the white label on the
  "New chat" button or the primary-blue breadcrumb on its light background
  **When** the contrast of that pairing is measured
  **Then** it meets WCAG 2.1 AA.

### S2 — "Nothing else about the app changed"

**Priority:** P2
**Actor:** Reviewer / approver

- **Given** the reviewer compares the recoloured screen against the previous build
  **When** they inspect non-green elements
  **Then** neutral text, muted greys, the amber connection banner, page backgrounds, borders, type,
  spacing, layout, and every interaction behave and appear exactly as before.

### S3 — "The change is evidenced, not asserted"

**Priority:** P2
**Actor:** Reviewer / approver

- **Given** the developer submits the phase
  **When** the reviewer opens the attached evidence
  **Then** a screenshot of the main chat screen from a `npm run dev` session shows the blue theme.

## Failure and empty states

- **Empty:** Before any conversation exists, the main chat screen shows its starter grid and empty
  state. That first-run view is in scope and must be blue; it is also the view the acceptance
  screenshot is expected to show.
- **Failure:** When the API gateway is unreachable, the client shows its amber connection banner.
  That banner is not a green element and must remain amber; a recolour must not change how the
  failure state reads.
- **Partial:** If any green value is missed, the screen shows mixed green and blue accents. That is
  a failed outcome, not a partial pass: `[WRK-169:AC-001]` requires zero remaining green accents.

## Permissions

There is no authorization dimension to this change. The palette is compiled into the client
stylesheet and is identical for every viewer; there is no per-role, per-tenant, or per-user theme
and none is introduced here. A reader without approval authority sees the same interface but cannot
approve the phase.

## Boundary conditions

- **Files touched:** limited to `src/app/app.component.css` and, only if it carries a green value,
  `src/styles.css`. `src/styles.css` currently declares `color: #1e2935` and
  `background: #f5f7f6`, neither of which is green, so no change is expected there.
- **Colour roles:** exactly three blues are introduced. Any existing green that is not an exact
  match for `--green`, `--green-dark`, or `--mint` maps to the nearest of those three roles by
  function (solid accent, darker/pressed accent, light tint) rather than by introducing a fourth
  blue.
- **Transparency suffixes:** green hex values written with an alpha suffix, such as `#087b6620`
  and `#075e5530` in shadows, keep their existing alpha suffix and change only the base hue.
- **Contrast floor:** 4.5:1 for normal text, 3:1 for UI component boundaries and the status dot
  against its surrounding surface. A pairing at exactly 4.5:1 passes; below it fails.
- **Zero behavioural delta:** no change to DOM structure, class names used by TypeScript, routing,
  or the server. `npm run build` must still succeed.

## Requirements

- The theme custom properties declared on `:host` in `src/app/app.component.css` shall be
  redefined so the primary accent is `#0b5cad`, the dark accent is `#084a8a`, and the light tint is
  `#e6eef7`. *(S1)* [WRK-169:REQ-001]
- Every hard-coded green hex value in `src/app/app.component.css` shall be replaced by the blue of
  the equivalent role, including the brand-mark and assistant-icon gradient, the status dot and its
  halo, the starter-grid hover border, the result-card hover treatment, the breadcrumb, the chip
  and badge accents, the thinking-indicator bullets, and the avatar foreground. *(S1)*
  [WRK-169:REQ-002]
- Green hex values carrying an alpha suffix shall retain that suffix unchanged and change only the
  base hue. *(S1)* [WRK-169:REQ-003]
- No colour outside the green family shall be modified: neutral ink, muted greys, line borders, the
  amber connection banner, and the page backgrounds remain byte-identical. *(S2)* [WRK-169:REQ-004]
- The change shall be confined to stylesheet declarations; no template markup, component class,
  service, server module, or dependency shall be modified. *(S2)* [WRK-169:REQ-005]
- `npm run build` shall continue to succeed after the change. *(S2)* [WRK-169:REQ-006]
- A screenshot of the main chat screen, captured from a running `npm run dev` session after the
  change, shall be attached as phase evidence. *(S3)* [WRK-169:REQ-007]

Acceptance criteria use the same stable, namespaced form:

- On the main chat screen served by `npm run dev`, no rendered element displays a green accent; the
  brand mark, "New chat" button, breadcrumb, status dot, starter-card icons, and result-card
  accents all render blue. *(S1)* [WRK-169:AC-001]
- Hovering a starter-grid button and a result card produces a blue border and blue-tinted shadow.
  *(S1)* [WRK-169:AC-002]
- A diff of the change shows modifications only to colour values within `src/app/app.component.css`
  (and `src/styles.css` only if it contained a green value); layout, typography, spacing, and
  markup are untouched. *(S2)* [WRK-169:AC-003]
- The amber connection banner, neutral text `#17252d`, and page background `#f7f9f8` are unchanged
  in the diff. *(S2)* [WRK-169:AC-004]
- A screenshot of the main chat screen showing the blue theme is attached to the phase.
  *(S3)* [WRK-169:AC-005]

## Non-functional requirements

- **Accessibility.** Text rendered on any blue surface introduced by this change shall measure at
  least 4.5:1 contrast against that surface, and blue UI component boundaries (button edges, the
  status dot against its halo and surface, focus and hover borders) shall measure at least 3:1.
  Measurement method: compute the WCAG 2.1 relative-luminance contrast ratio for each foreground /
  background pairing introduced by the palette, using the exact hex values in the stylesheet.
  *(S1)* [WRK-169:REQ-008]
- **Performance.** No new stylesheet rule, selector, font, image, or network request is added, so
  the rendered bundle size shall not increase by more than 0 bytes attributable to new declarations;
  only existing declaration values change. Measurement: compare `npm run build` output declaration
  count before and after. *(S2)* [WRK-169:REQ-009]
- **Consistency.** No fourth blue shall be introduced. Every blue value in the stylesheet after the
  change shall be one of `#0b5cad`, `#084a8a`, `#e6eef7`, or one of those three with a preserved
  alpha suffix. Measurement: grep the stylesheet for hex literals and confirm each blue matches.
  *(S1)* [WRK-169:REQ-010]

## Constitution articles

No constitution is defined for this repository at the pinned revision:
`singularity-flow constitution show` reports no `singularity/constitution.md`, and work type
`spec-driven-standard` sets constitution mode `warn`. This specification therefore cites no article
IDs. Fabricating an `ART-…` identifier here would fail kernel validation, and none exists to cite.

## Assumptions

- The green family in `src/app/app.component.css` is the complete definition of the application's
  colour identity; no green is injected at runtime from the server, from `src/app/models.ts`, or
  from an inline style in `src/app/app.component.html`.
- "Colour" in the pinned Story `change color to blue` means the application's accent/brand colour,
  not the page background or the text colour. This reading was confirmed at the clarification
  checkpoint for generation 1.
- The approved blues `#0b5cad` / `#084a8a` / `#e6eef7` are acceptable as brand colours; no external
  brand guideline constrains the exact hue.
- A single screenshot of the main chat screen is sufficient acceptance evidence, as confirmed at the
  clarification checkpoint; per-surface screenshots and automated visual regression were explicitly
  declined for this Story.
- The reviewer can run `npm run dev` locally, which the repository world model lists as an available
  validation command.

## Out of scope

- Any dark mode, user-selectable theme, or runtime theme switching.
- Changing backgrounds, neutral text colours, borders, or the amber connection-banner palette.
- Typography, spacing, layout, iconography, copy, or component structure.
- Server code under `server/`, the API contract in `docs/integration.md`, and all TypeScript
  behaviour.
- Automated visual-regression tests or Playwright evidence for this Story.
- Establishing a design-token system or extracting the remaining hard-coded hex values into
  variables beyond the three existing theme properties.

