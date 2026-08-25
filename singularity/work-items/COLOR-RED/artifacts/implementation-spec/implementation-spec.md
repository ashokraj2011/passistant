<!-- singularity-flow:metadata
{
  "schemaVersion": 1,
  "workId": "COLOR-RED",
  "workType": "feature",
  "phase": "implementation-spec",
  "generation": 1,
  "status": "in_progress",
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
    "source": {
      "kind": "in-place",
      "filename": "implementation-spec.md",
      "mediaType": "text/markdown",
      "sha256": "415bf2a87e543af5e30298f484be4e4fb2f2aceb1153ba920d3691e28e960b96",
      "bytes": 1973
    },
    "generation": 1,
    "publishedAt": "2026-08-25T13:07:10.645Z"
  },
  "sourceCommit": "a930aef2f6acf43a76d97237fe702f7ea0f09f7d",
  "generationCommit": null,
  "publicationCommit": null,
  "configSha256": "18da9ffa3626deeba0e2aad1c7c75daffc2a60a82c2ca548426d9a48ce949ab8",
  "sourceSha256": "47ab280579ade134d37ae54666844a0ed6da25d8bd171469aa3f62da5e6442ca",
  "template": {
    "path": "singularity/templates/feature/implementation-spec.md",
    "sha256": "f6b06a7e8c8dfa87a7f1289b2a80c0a6e98f5ee8e3cae2fe9faed501c031656c"
  },
  "inputs": {
    "generation": 1,
    "path": "singularity/work-items/COLOR-RED/context/inputs-implementation-spec-gen1.json",
    "sha256": "bc38bf000741794e52a0016b789e565767ddec6ae1f91d623368f9a41342738a",
    "renderedSha256": "12acbd04848f37e523ece87d62ee5d18b22dbf39bb5058c5a656374a409f720b",
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
      "path": "singularity/work-items/COLOR-RED/telemetry/implementation-spec-gen1.json",
      "sha256": "4c03ff0a33960d01c0d85f2d0d63a90d1078c428105086122bb4a1ea9c47e6d4",
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

# COLOR-RED — Implementation Specification

## Traceability

| Clause | Acceptance criteria | Planned code/tests | Status |
|---|---|---|---|
| `COLOR-RED:IFC-001` | `COLOR-RED:AC-001` | Update Angular presentation layer in the existing app shell for the requested red treatment | planned |

## APIs, schemas, and contracts

The implementation MUST preserve the existing Angular component contract and render pipeline. No new API endpoints, request payloads, or backend data contracts are introduced. The UI remains driven by the existing component state and template bindings. [COLOR-RED:IFC-001]

## File-level implementation plan

- Update src/app/app.component.css to introduce a small set of reusable CSS variables for the requested red treatment and apply them to the main app shell surfaces.
- Update src/app/app.component.html only if minimal structural adjustments are required to support the visual treatment without changing behavior.
- Leave src/app/app.component.ts unchanged because the requirement is presentation-only and does not require new logic or data flow.
- Validate the change locally in the Angular app to confirm the main screen displays the intended red styling while preserving layout and readability.

## Security, observability, migration, and rollback

The implementation MUST preserve the current client-side security posture, avoid introducing unsafe HTML or script execution, and remain rollback-friendly through localized CSS and template changes. Observability is limited to visual verification in the local app, and rollback is achieved by reverting the styling changes in the existing component stylesheet. [COLOR-RED:CON-002]

## Test specification

- Verify the main screen renders the red treatment in the local Angular application.
- Confirm navigation, buttons, text, and spacing remain readable and usable after the styling change.
- Confirm no backend or data-layer changes are required to demonstrate the new presentation.

<!-- singularity-flow:inputs:start -->

# Approved phase inputs

## Approved phase input: requirements

<!-- source=singularity/work-items/COLOR-RED/artifacts/requirements/requirements.md sha256=86c74b920e5b7a59ab5e2795276cc33826235763b481ba43dbcdc5a9de327ec9 status=captured projection=full representation-sha256=sha256:640b5392b98eb380db518af55f59d22e9f3f83a800f060939d8bc62ca6f28e2a expansion=sfref:v1:story:COLOR-RED:a41f1d2a271299bd01e2b277dcaed792557a86c455c76711c8cd336c818be66a -->

# COLOR-RED — Feature Requirements

## Problem and outcome

The current main screen does not clearly express the requested red visual treatment, which makes the change difficult to verify in the UI. The capability should allow the main screen to present the requested red styling while preserving the existing navigation, copy, and overall usability. Success is measured by the main screen visibly rendering the intended red treatment and remaining easy to review and use. [COLOR-RED:REQ-001]

## Scope

The implementation includes updating the main screen presentation to support the requested red visual treatment in the current app shell and ensuring the change is visible in the UI for review. It explicitly excludes broader redesign work, backend behavior changes, and unrelated page-level experience changes. [COLOR-RED:CON-001]

## Acceptance criteria

- The main screen renders the requested red visual treatment in a way that is immediately visible without breaking the current layout or component hierarchy.
- The change is reviewable in the local app and does not require backend or data changes to demonstrate the requested treatment.
- The experience remains usable: navigation, buttons, and text remain readable and functional with the red styling applied. [COLOR-RED:AC-001]

## Dependencies, risks, and open questions

- Dependency: the implementation will rely on the existing Angular component structure and stylesheet system in src/app.
- Risk: over-styling could reduce contrast or readability; visual verification is required.
- Open question: whether the red treatment should be a single fixed color or a configurable token for future reuse. [COLOR-RED:OPN-001]

> Exact source expansion: `sfref:v1:story:COLOR-RED:a41f1d2a271299bd01e2b277dcaed792557a86c455c76711c8cd336c818be66a`. Use `singularity-flow show sfref:v1:story:COLOR-RED:a41f1d2a271299bd01e2b277dcaed792557a86c455c76711c8cd336c818be66a --section "<heading>"` only when exact wording is needed.

## Approved phase input: design

<!-- source=singularity/work-items/COLOR-RED/artifacts/design/design.md sha256=bb902c8a9d1e7e1c7730bbe562d0c00ff3e2be9d0fae1bfda060cfddd827bf31 status=captured projection=full representation-sha256=sha256:0e41b74443947948461243d1f25f729cce4fa1ec0512f654f0159abd339dedbd expansion=sfref:v1:story:COLOR-RED:5b3f90d35d0fa4bfbe806a1225e11b48ded103809903c8a05f55ef87759dc64e -->

# COLOR-RED — Architecture and Design

## Context and constraints

The approved requirements call for the main screen to visibly present the requested red visual treatment while preserving the current layout, navigation, and usability. The current implementation already centers the experience in the Angular app shell, with the main UI composed by the root component and its stylesheet in src/app. The design must stay within the existing presentation layer and avoid backend or data changes.

## Proposed design

The design will introduce a presentation-only enhancement to the existing app shell so the main screen can render the requested red treatment without changing the conversational flow, component structure, or service integration.

### Component impact

- The existing root view in src/app/app.component.html remains the primary surface for the experience.
- The styling will be adjusted in src/app/app.component.css by introducing a small set of theme tokens for the red treatment and applying them to the main frame, header, sidebar, and primary action surfaces.
- The TypeScript logic in src/app/app.component.ts remains unchanged because the requirement is visual and does not require new behavior or data flow.

### Design approach

1. Define a single red-themed style token set for primary, secondary, and accent colors.
2. Apply the tokens to the app shell surfaces that define the visible identity of the main screen: header, navigation, action buttons, and the main content canvas.
3. Preserve existing spacing, typography, and component relationships so the change remains easy to review and does not break layout.
4. Keep the treatment constrained to the presentation layer so it can be validated locally in the Angular app without backend changes.

### Data flow and responsibilities

This change does not introduce new interfaces or new state. The existing Angular component tree continues to render the same messages, cards, and composer controls. The design responsibility is purely visual and localized to CSS and template structure.

## Security, observability, migration, and rollback

- Security: no new API endpoints, data persistence, or user input handling are introduced; the change remains within client-side styling.
- Observability: the change can be validated via local UI review and visual inspection; no telemetry or runtime instrumentation is required for the initial implementation.
- Migration and rollback: because the implementation is contained to the existing Angular stylesheet and template, rollback is straightforward by reverting the theme token changes and removing the applied classes.
- Compatibility: the design maintains the current DOM structure and component hierarchy, reducing risk of regressions in the existing app shell.

## Alternatives and decisions

Alternative 1: apply a single hard-coded red color to the whole page. This would satisfy the visual requirement but would be less reusable and more likely to affect unrelated surfaces.

Alternative 2: introduce a small, reusable token-based theme for the main screen. This is the preferred approach because it keeps the change scoped, makes future reuse easier, and reduces the risk of over-styling.

Decision: implement the red treatment as a constrained, token-based visual theme applied to the existing app shell surfaces and keep all runtime behavior unchanged.

> Exact source expansion: `sfref:v1:story:COLOR-RED:5b3f90d35d0fa4bfbe806a1225e11b48ded103809903c8a05f55ef87759dc64e`. Use `singularity-flow show sfref:v1:story:COLOR-RED:5b3f90d35d0fa4bfbe806a1225e11b48ded103809903c8a05f55ef87759dc64e --section "<heading>"` only when exact wording is needed.

<!-- singularity-flow:inputs:end -->
