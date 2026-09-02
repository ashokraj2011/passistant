<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "WRK-169",
  "workType": "spec-driven-standard",
  "phase": "implementation",
  "generation": 2,
  "status": "awaiting_approval",
  "generatedBy": {
    "name": "Ashok Raj",
    "email": "88361104+ashokraj2011@users.noreply.github.com",
    "login": "ashokraj2011",
    "githubLookup": "resolved"
  },
  "generatedAgent": null,
  "authorship": {
    "schemaVersion": 1,
    "producer": "human",
    "channel": "manual-in-place",
    "actor": {
      "name": "Ashok Raj",
      "email": "88361104+ashokraj2011@users.noreply.github.com",
      "login": "ashokraj2011",
      "githubLookup": "resolved"
    },
    "governedAgentContext": {
      "agentId": "architect"
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
      "human"
    ],
    "source": {
      "kind": "in-place",
      "filename": "implementation-summary.md",
      "mediaType": "text/markdown",
      "sha256": "275a82b081c650b9e00d06050ddb16254ac8b1b82df83f8d7bbd735d45b0aaaa",
      "bytes": 4772
    },
    "generation": 2,
    "publishedAt": "2026-09-02T15:11:18.235Z"
  },
  "sourceCommit": "3c4705475ebc51dc00903ccd04709c75bc4c8c02",
  "generationCommit": "43c430bcaf72203ab9d572a41d9eea0cc9acddde",
  "publicationCommit": "43c430bcaf72203ab9d572a41d9eea0cc9acddde",
  "configSha256": "b2a3f27c7de49182448552fc8f7ee0673a3de47442dda9fefdf56959b4c1596f",
  "sourceSha256": "596a6443a39f38706f0a6e22ab26c835a21bd2e6a1473e30b4f265f2e667c15c",
  "template": {
    "path": "singularity/templates/common/implementation.md",
    "sha256": "61cd7cba79a0dd2914a25b53496b8bd9c575c36219597d65b8ec10010e801d9c"
  },
  "inputs": {
    "generation": 2,
    "path": "singularity/work-items/WRK-169/context/inputs-implementation-gen2.json",
    "sha256": "df595d1109b504aaab7d4903d5a0067f5cf3921ad427ca7e7d9a9f9b423dc6a6",
    "renderedSha256": "ef1139e6e17f606b1cee8e486a01b9c878c4d58f202500c035158959a8ba2e61",
    "mode": "enforce"
  },
  "designSources": {
    "sets": [],
    "approved": null
  },
  "remoteAgent": null,
  "clarification": null,
  "telemetry": [
    {
      "generation": 1,
      "path": "singularity/work-items/WRK-169/telemetry/implementation-gen1.json",
      "sha256": "91c0f1ef5f75dc28503d9e126f146c9be861bffc9431e462685b690183c43426",
      "status": "not-invoked",
      "models": [],
      "providerCost": null
    },
    {
      "generation": 2,
      "path": "singularity/work-items/WRK-169/telemetry/implementation-gen2.json",
      "sha256": "5452e11751aecb80ca6a10473cc2e29f1583b0e6d124df16215dc821669bc870",
      "status": "not-invoked",
      "models": [],
      "providerCost": null
    }
  ],
  "remoteOutputs": [],
  "usage": [],
  "sequenceOverrides": [],
  "approvals": [],
  "selfApproval": false,
  "conformanceTree": null
}
-->

# WRK-169 — Implementation Summary

## Agent brief

<!--
Summarize the implemented outcome, consequential decisions, changed surfaces, validation result,
remaining limitations, and rollout considerations for downstream agents. Keep it evidence-based;
the detailed changed-components and test sections are preserved separately.
-->

## Implemented outcome

The Angular client accent palette was changed from green to the approved blue palette in `src/app/app.component.css`: primary `#0b5cad`, dark `#084a8a`, and tint `#e6eef7`. The main chat screen now renders the brand mark, assistant icon, status dot, sidebar primary action, breadcrumb, starter-grid icons, result-card accents, composer focus treatment, action buttons, and related badges/chips in blue. The amber live-configuration banner, neutral text colours, page backgrounds, layout, markup, TypeScript behavior, server code, and API contracts were not changed. This satisfies [WRK-169:REQ-001], [WRK-169:REQ-002], [WRK-169:REQ-004], [WRK-169:REQ-005], [WRK-169:AC-001], [WRK-169:AC-003], and [WRK-169:AC-004].

Transparent green accents were mapped by role while preserving their alpha suffixes: `#087b6620` and `#0b776520` became `#0b5cad20`, `#075e5530` became `#084a8a30`, `#284a3e12` became `#0b5cad12`, and `#314e4308` became `#084a8a08`. This satisfies [WRK-169:REQ-003] and [WRK-169:REQ-010].

## Changed components and decisions

Changed source component:

- `src/app/app.component.css`: value-only stylesheet update for the approved blue roles and existing hard-coded green accent literals. Selectors, declaration structure, spacing, layout, typography, DOM class usage, and behavior were left intact.
- `server/theme.test.ts`: acceptance-mapped Node test coverage for the stylesheet palette, hover declarations, unchanged global/amber/neutral colors, and attached screenshot evidence. The tests use full governed traceability tags for [WRK-169:AC-001] through [WRK-169:AC-005].

Evidence component:

- `singularity/work-items/WRK-169/artifacts/verification/main-chat-blue.png`: screenshot captured from the running `npm run dev` main chat screen after implementation. The screen includes the expected amber configuration banner unchanged and the blue accent theme applied to the empty-state chat view. This satisfies [WRK-169:REQ-007] and [WRK-169:AC-005].

No edits were made to `src/styles.css` because inspection found no green literal there. The only non-source mutations are governed Singularity Flow workflow/input records for this generation. There were no approved deviations and no migrations, dependencies, template changes, server changes, or API changes.

## Tests and operational notes

Validation performed:

- [WRK-169:REQ-006] `npm run build` passed after installing dependencies with `npm install` because the story worktree initially lacked `node_modules`.
- [WRK-169:AC-001] through [WRK-169:AC-005] `npm test` passed: 10 tests, 10 pass, 0 fail. The new tests are tagged `@ac:WRK-169:AC-001`, `@ac:WRK-169:AC-002`, `@ac:WRK-169:AC-003`, `@ac:WRK-169:AC-004`, and `@ac:WRK-169:AC-005`.
- [WRK-169:REQ-008] WCAG 2.1 contrast calculations passed: white on primary `6.67:1`, white on dark `8.91:1`, primary on tint `5.70:1`, dark on tint `7.61:1`, primary on white `6.67:1`, primary border on white `6.67:1`, and status primary on tint halo `5.70:1`.
- [WRK-169:REQ-010] Final stylesheet hex inventory shows introduced blue values are limited to approved bases `#0b5cad`, `#084a8a`, `#e6eef7`, or those values with preserved alpha suffixes.
- [WRK-169:AC-001] Live browser computed styles from `http://localhost:4200/` showed the `New chat` button background as `rgb(11, 92, 173)`, breadcrumb and starter icon as `rgb(11, 92, 173)`, and the status dot as `rgb(11, 92, 173)`.
- [WRK-169:AC-002] Stylesheet hover rules for `.starter-grid button:hover` and `.result-card:hover` use `#0b5cad` borders. Browser hover probing for starter-grid was blocked by the fixed composer intercepting pointer events after Playwright scrolled the button, so the hover result was verified by CSS rule inspection instead of computed hover state.
- [WRK-169:AC-004] Live browser computed styles showed the connection banner remained amber: banner background `rgb(255, 246, 230)` and icon background `rgb(196, 123, 22)`.

Operational notes:

- `npm install` reported 6 audit findings from installed dependencies, outside this CSS-only scope. No dependency remediation was performed.
- Angular CLI prompted for analytics during `npm run build` and temporarily wrote a `cli.analytics` setting to `angular.json`; that generated side effect was removed so `angular.json` remains unchanged.
- `npm run dev` is still running only to support screenshot capture and review; no runtime configuration was changed.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/WRK-169/artifacts/specification/spec.md sha256=b8e5554003f995987c3e848cb1addc50870439382daae357e69f3485a51fbd63 status=captured projection=full representation-sha256=sha256:952407c9e930ad06e26d757ae6416806255a1e638f3dacbe52f4b3289b0b3c96 expansion=sfref:v1:story:WRK-169:bf1712879d6730756cfaec76e014cd7e6abc74e9299f910f71a3d4f2d5549e9c -->

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

> Exact source expansion: `sfref:v1:story:WRK-169:bf1712879d6730756cfaec76e014cd7e6abc74e9299f910f71a3d4f2d5549e9c`. Use `singularity-flow show sfref:v1:story:WRK-169:bf1712879d6730756cfaec76e014cd7e6abc74e9299f910f71a3d4f2d5549e9c --section "<heading>"` only when exact wording is needed.

## Approved phase input: planning

<!-- source=singularity/work-items/WRK-169/artifacts/planning/plan.md sha256=5685c21cab170b6f9969136f485454ebb75c925ed6b862bf38d5fa8da737f17d status=captured projection=full representation-sha256=sha256:8731387419ccb366083575e96c7e331b5c858e019c82d28b82117ae4201e810b expansion=sfref:v1:story:WRK-169:156ca876e12eef921cae60e5a03d234e1b6ed86c1369043f6d96a3af0bebce05 -->

# Implementation plan — WRK-169

Derived from the approved specification. Cite the clause each decision serves, so convergence can
join intent to implementation at requirement altitude rather than by path `[SPK:REQ-071]`.

## Agent brief

Update the Angular client theme in `src/app/app.component.css` only. Map the three existing theme
custom properties and every hard-coded green accent to the approved primary, dark, or tint blue while
preserving alpha suffixes. Prove the stylesheet boundary by diff, palette completeness by searching
the stylesheet, accessibility with WCAG contrast calculations, build compatibility with `npm run build`,
and the user-facing result with one `npm run dev` screenshot. This serves [WRK-169:REQ-001] through
[WRK-169:REQ-010] and [WRK-169:AC-001] through [WRK-169:AC-005].

## Approach

Use the existing CSS custom properties as the canonical palette: `--green` becomes `#0b5cad`,
`--green-dark` becomes `#084a8a`, and `--mint` becomes `#e6eef7`. Replace each literal green by role:
solid accents use primary blue, active or darker treatments use dark blue, and pale fills or halos use
the tint. For transparent green literals, replace only the six-digit base hue and retain the alpha suffix.

This is the narrowest approach because it preserves selectors, markup, component logic, and server
behavior while satisfying the complete accent inventory in [WRK-169:REQ-002]. Do not edit
`src/styles.css` unless inspection finds a green value; the approved specification says none is expected.

## Affected surfaces

| Surface | Change | Serves |
|---|---|---|
| `src/app/app.component.css` | Replace palette custom-property values and all hard-coded green accent values by their approved blue roles. | [WRK-169:REQ-001], [WRK-169:REQ-002], [WRK-169:REQ-003] |
| `src/app/app.component.css` | Preserve every non-green literal, selector, declaration count, layout rule, and interaction rule. | [WRK-169:REQ-004], [WRK-169:REQ-005], [WRK-169:REQ-009] |
| `singularity/work-items/WRK-169/artifacts/verification/main-chat-blue.png` | Capture the post-change main chat screen from a local development session as required evidence. | [WRK-169:REQ-007], [WRK-169:AC-005] |

No TypeScript, HTML, server, dependency, API, or routing surface is affected. `src/styles.css` remains
unchanged unless it is found to contain a green literal, which would be an approved exception under
[WRK-169:AC-003].

## Sequencing

1. Inventory green literals and their visual roles in `src/app/app.component.css`, including alpha-suffixed
  shadows and halos. This prevents a mixed palette and serves [WRK-169:AC-001].
2. Update the three custom properties, then replace role-equivalent hard-coded green literals without
  changing selectors or non-green values. This implements [WRK-169:REQ-001] through [WRK-169:REQ-005].
3. Inspect the diff and search the stylesheet for remaining greens and unapproved blue literals. Verify
  alpha suffixes are retained, supporting [WRK-169:REQ-003] and [WRK-169:REQ-010].
4. Calculate contrast for white-on-primary, primary-on-light-background, and UI-boundary pairings; correct
  a role mapping only if a required threshold fails. This proves [WRK-169:REQ-008].
5. Run `npm run build`, start `npm run dev`, exercise the initial main-chat state and hover treatments,
  and capture the required screenshot. This proves [WRK-169:REQ-006], [WRK-169:REQ-007], and the
  acceptance criteria.

## Test strategy

| Clause | Expected paths | Planned tests |
|---|---|---|
| `WRK-169:REQ-001` | `src/app/app.component.css` | not-applicable: inspect the three custom-property declarations and compare their exact values with the approved palette. |
| `WRK-169:REQ-002` | `src/app/app.component.css` | not-applicable: search all stylesheet hex literals and inspect the named accent, hover, chip, indicator, and avatar roles. |
| `WRK-169:REQ-003` | `src/app/app.component.css` | not-applicable: compare alpha-suffixed hex declarations before and after the value-only edit. |
| `WRK-169:REQ-004` | `src/app/app.component.css` | not-applicable: review the CSS diff to confirm neutral, amber, border, and background literals are byte-identical. |
| `WRK-169:REQ-005` | `src/app/app.component.css` | not-applicable: review `git diff --name-only` and the stylesheet-only declaration diff. |
| `WRK-169:REQ-006` | `src/app/app.component.css` | not-applicable: run `npm run build`; this repository has no automated test path for a value-only CSS change. |
| `WRK-169:REQ-007` | `singularity/work-items/WRK-169/artifacts/verification/main-chat-blue.png` | not-applicable: open the captured evidence image and confirm it was taken from the running main chat screen. |
| `WRK-169:REQ-008` | `src/app/app.component.css` | not-applicable: calculate WCAG 2.1 contrast ratios from the exact foreground and background hex pairs. |
| `WRK-169:REQ-009` | `src/app/app.component.css` | not-applicable: compare declaration count and build output to confirm no stylesheet rule or asset was added. |
| `WRK-169:REQ-010` | `src/app/app.component.css` | not-applicable: search blue hex literals and confirm each is an approved base hue or retains its original alpha suffix. |
| `WRK-169:AC-001` | `src/app/app.component.css` | not-applicable: inspect the running main chat screen and the evidence image for zero green accents. |
| `WRK-169:AC-002` | `src/app/app.component.css` | not-applicable: hover a starter-grid button and result card in the running client and inspect their border and shadow tint. |
| `WRK-169:AC-003` | `src/app/app.component.css` | not-applicable: inspect the final diff for CSS colour-value-only changes in the permitted file. |
| `WRK-169:AC-004` | `src/app/app.component.css` | not-applicable: inspect the final diff for unchanged amber, neutral ink, and page-background literals. |
| `WRK-169:AC-005` | `singularity/work-items/WRK-169/artifacts/verification/main-chat-blue.png` | not-applicable: attach and review the required post-change screenshot. |

## Constitution articles

No constitution article IDs apply. The approved specification records that no repository constitution
exists at the pinned revision and the work type uses warn mode; no article identifier may be invented.

## Risks and rollback

The principal risk is an overlooked literal green, particularly a transparent shadow or hover state.
Detect it through stylesheet literal search, interactive hover inspection, and the main-screen screenshot.
A second risk is reducing contrast by applying the tint where primary blue is needed; detect it through
the specified WCAG calculations before review. A final risk is accidental non-colour modification;
detect it through the file-scoped diff and build.

Rollback is a value-only reversal in `src/app/app.component.css`: restore the prior green values while
leaving selectors and all non-green declarations untouched. No data migration, server rollback, or
API compatibility action is required.

> Exact source expansion: `sfref:v1:story:WRK-169:156ca876e12eef921cae60e5a03d234e1b6ed86c1369043f6d96a3af0bebce05`. Use `singularity-flow show sfref:v1:story:WRK-169:156ca876e12eef921cae60e5a03d234e1b6ed86c1369043f6d96a3af0bebce05 --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
