<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "WRK-BLUE",
  "workType": "spec-driven-standard",
  "phase": "planning",
  "generation": 1,
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
      "filename": "plan.md",
      "mediaType": "text/markdown",
      "sha256": "314fa4a96ed838330ea370eacf50c417de9c2315a5921361094c5b0a5a531b6f",
      "bytes": 5051
    },
    "generation": 1,
    "publishedAt": "2026-08-31T08:10:45.750Z"
  },
  "sourceCommit": "9e60ae039f7efa77d21b68897ba69f81f531f0e4",
  "generationCommit": "4c4c05690dac0eec3c1d2ba2547eed0d5430f158",
  "publicationCommit": "4c4c05690dac0eec3c1d2ba2547eed0d5430f158",
  "configSha256": "dbd3a363975694f734708a438f0f26b7dea3c08f6dc9b846e091cc60a4e045fa",
  "sourceSha256": "8ec56d07afb8cc9cbb904c4ced149153f92d63b12cb0a3c347f98b05adb46e7d",
  "template": {
    "path": "singularity/templates/spec-driven/plan.md",
    "sha256": "069190d022b9423a996c7c8a88de3d7ef457336398a8e3d5bb639115eb6d674a"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/WRK-BLUE/context/inputs-planning-gen1.json",
    "sha256": "4e3dc3716423c206f97b0588adc380856309795e60b71c743ab0dfbd9099a273",
    "renderedSha256": "645b6a50f4592875176c0288bcafad218b3b3718a55d9fd7c50cbf64b7217953",
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
      "path": "singularity/work-items/WRK-BLUE/telemetry/planning-gen1.json",
      "sha256": "eb42c5115e04aa06a06fd1b4ccb9ae100270a286efbbe3d4dc32970091a16b6e",
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

# Implementation plan — WRK-BLUE

Derived from the approved specification. Cite the clause each decision serves, so convergence can
join intent to implementation at requirement altitude rather than by path `[SPK:REQ-071]`.

## Agent brief

Change the Angular root layout's `.app-frame` background from `#f7f9f8` to `#2563EB` without altering its child-surface tokens. Add a rendered browser assertion to the existing `npm test` workflow that reads `getComputedStyle` from the primary layout element. The implementation should verify the Angular build and the color assertion, with a small rollback surface limited to the stylesheet, test support, and test script configuration. This serves [WRK-BLUE:REQ-001], [WRK-BLUE:REQ-002], [WRK-BLUE:AC-001], [WRK-BLUE:AC-002], and [WRK-BLUE:REQ-003].

## Approach

Use the existing root layout element as the primary application background: `.app-frame` spans the viewport (`height: 100%`) and already owns the application-level background declaration. Replace only that declaration with the exact literal `#2563EB`; do not change header, aside, panel, button, or token colors, which are outside the approved scope. This directly produces the rendered visual state required by [WRK-BLUE:REQ-001] and [WRK-BLUE:AC-001].

Extend the existing Node test workflow with a browser-capable test harness that loads the built or served Angular application, locates `.app-frame`, and asserts its computed `backgroundColor` is `rgb(37, 99, 235)`, the browser representation of `#2563EB`. Keep the assertion deterministic by comparing that single normalized value after the page is rendered, satisfying [WRK-BLUE:REQ-002], [WRK-BLUE:AC-002], and [WRK-BLUE:REQ-003]. The user-selected direction is to integrate this in the repository's existing test tooling, so any browser support is invoked by `npm test` rather than introduced as an independent manual-only verification path.

## Affected surfaces

| Surface | Change | Serves |
|---|---|---|
| `src/app/app.component.css` | Set `.app-frame` background to the exact primary color `#2563EB`. | [WRK-BLUE:REQ-001], [WRK-BLUE:AC-001] |
| `src/app/app.component.html` | Retain `.app-frame` as the stable primary-background test target; add a test-specific selector only if the existing class cannot be selected reliably. | [WRK-BLUE:REQ-002] |
| `package.json` | Integrate the rendered browser check into the existing `npm test` command and add only its required test support. | [WRK-BLUE:REQ-002], [WRK-BLUE:REQ-003] |
| Browser test file under the repository test convention | Render the application and compare `.app-frame` computed background color to `rgb(37, 99, 235)`. | [WRK-BLUE:REQ-002], [WRK-BLUE:AC-002], [WRK-BLUE:REQ-003] |

## Sequencing

1. Confirm the Angular root layout continues to render `.app-frame` as the viewport-filling primary surface, then change only its `background` declaration to `#2563EB`. This implements the visual requirement without touching secondary UI colors.
2. Add the browser-capable test support to the current Node-based test workflow and create the rendered computed-style assertion. This proves the browser-resolved color rather than the stylesheet source text.
3. Run `npm test` and `npm run build:web`. The first validates [WRK-BLUE:REQ-002], [WRK-BLUE:AC-002], and [WRK-BLUE:REQ-003]; the second detects Angular template or stylesheet integration regressions.

## Test strategy

| Clause | Proof |
|---|---|
| [WRK-BLUE:REQ-001] | Render the application in the browser test and inspect `.app-frame` computed background color. |
| [WRK-BLUE:AC-001] | The same rendered assertion must resolve to `rgb(37, 99, 235)`, which represents `#2563EB`. |
| [WRK-BLUE:REQ-002] | Run `npm test`; the browser test loads the application, queries the primary layout element, and reads `getComputedStyle(element).backgroundColor`. |
| [WRK-BLUE:AC-002] | Assert the computed color equals the one required normalized browser value; a changed literal, inherited color, or child-only change fails. |
| [WRK-BLUE:REQ-003] | Keep the expected value fixed as `rgb(37, 99, 235)` and run the assertion only after the application render is complete. |

## Constitution articles

No constitution article IDs were provided for this work item. The plan is governed by the approved specification clauses [WRK-BLUE:REQ-001], [WRK-BLUE:REQ-002], [WRK-BLUE:REQ-003], [WRK-BLUE:AC-001], and [WRK-BLUE:AC-002].

## Risks and rollback

The principal risk is asserting a CSS source value or a child-surface color instead of the browser-computed primary background. The browser test mitigates this by locating `.app-frame` after render and reading computed style. A second risk is that browser test support is not reliably available in CI; `npm test` must install and invoke all needed support so the proof remains repeatable. If the change causes an unintended visual regression, revert the `.app-frame` declaration and its associated test/configuration change together, restoring the prior `#f7f9f8` background while leaving unrelated visual tokens intact.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: specification

<!-- source=singularity/work-items/WRK-BLUE/artifacts/specification/spec.md sha256=d37584d6caa2177ecd82f0318167462dce165b6c60af7cde732e98ee61cede4d status=captured projection=full representation-sha256=sha256:f71f27895f64300b52722b5271c7d4f30ea715efdf6bd2987dfd4aee3eba9ac2 expansion=sfref:v1:story:WRK-BLUE:32e83cb416d936e46aa55aefefcaaaa76817414296e61d3775df3256de29ad0f -->

# Specification - WRK-BLUE

## Agent brief

Update the primary application background to blue. The background must resolve to `#2563EB`, and an automated check must verify the computed CSS color. This change applies to the primary app background only; it does not redefine other visual tokens or application behavior.

## Actors

- **Application user:** Views the application with the updated primary background.
- **Developer or verifier:** Confirms the rendered primary background resolves to the required color.

## User scenarios

### S1 - View the application with the updated background

**Priority:** P1
**Actor:** Application user
**Context:** The application is loaded in a supported browser.

- **Given** the primary application background is rendered
  **When** the user views the application
  **Then** the primary application background appears blue with the value `#2563EB`.

### S2 - Verify the background color

**Priority:** P2
**Actor:** Developer or verifier
**Context:** The application can be rendered for automated testing.

- **Given** the application is rendered
  **When** the automated color check reads the computed CSS color of the primary application background
  **Then** the computed color represents `#2563EB`.

## Failure and empty states

- **Empty:** Not applicable; this change does not introduce records or an empty-data state.
- **Failure:** If the rendered background does not resolve to `#2563EB`, the automated check fails.
- **Partial:** A change to a child surface without changing the primary application background does not satisfy this specification.

## Permissions

No application permission changes are required. All application users see the updated primary background.

## Boundary conditions

- The required color value is exactly `#2563EB`.
- The target is the primary application background, not a button, text color, icon, border, or secondary panel.
- The automated assertion must inspect the computed CSS color after rendering.

## Requirements

- The application shall set its primary background color to `#2563EB`. *(S1)* [WRK-BLUE:REQ-001]
- The project shall include an automated check that renders the application and verifies the computed CSS color of the primary background represents `#2563EB`. *(S2)* [WRK-BLUE:REQ-002]

## Acceptance criteria

- A rendered application shows the primary background as `#2563EB`. *(S1)* [WRK-BLUE:AC-001]
- The automated color check passes only when the primary background's computed CSS color represents `#2563EB`. *(S2)* [WRK-BLUE:AC-002]

## Non-functional requirements

- The automated color check must be deterministic: it shall compare the computed color against the single specified `#2563EB` value after the application renders. [WRK-BLUE:REQ-003]

## Constitution articles

No constitution article IDs were provided by the governed inputs for this work item.

## Assumptions

- The primary application background is represented by a renderable CSS-styled element that an automated test can inspect.

## Out of scope

- Changing any visual surface other than the primary application background.
- Redesigning the application's color system, layout, typography, behavior, or permissions.

> Exact source expansion: `sfref:v1:story:WRK-BLUE:32e83cb416d936e46aa55aefefcaaaa76817414296e61d3775df3256de29ad0f`. Use `singularity-flow show sfref:v1:story:WRK-BLUE:32e83cb416d936e46aa55aefefcaaaa76817414296e61d3775df3256de29ad0f --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
