import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const componentCss = readFileSync(resolve(repoRoot, 'src/app/app.component.css'), 'utf8');
const globalCss = readFileSync(resolve(repoRoot, 'src/styles.css'), 'utf8');

const oldGreenLiterals = [
  '#075e55', '#075e5530', '#075f52', '#087b66', '#087b6620', '#0b7765', '#0b776520', '#0b8d75',
  '#115f54', '#13725e', '#176658', '#187460', '#20ad7f', '#27725f', '#284a3e12', '#314e4308',
  '#315850', '#397467', '#43806f', '#55a994', '#63a795', '#7aa398', '#7bb5a7', '#7ea79d',
  '#8be2c3', '#92bbae', '#a5c9bf', '#c8e8dc', '#d9e5e1', '#d9f5eb', '#dbeee9', '#dcece7',
  '#dfeae6', '#dff2ec', '#e5eeeb', '#e6f4ef', '#e8f3ee', '#e8f5ef'
];

test('@ac:WRK-169:AC-001 main chat accent palette is blue with no former green literals', () => {
  assert.match(componentCss, /--green:#0b5cad/);
  assert.match(componentCss, /--green-dark:#084a8a/);
  assert.match(componentCss, /--mint:#e6eef7/);
  assert.match(componentCss, /\.brand-mark,\.assistant-icon \{[^}]*linear-gradient\(145deg,#0b5cad,#084a8a\)/);
  assert.match(componentCss, /\.status-dot \{[^}]*background:#0b5cad/);
  assert.match(componentCss, /\.starter-grid span\{color:var\(--green\)/);
  assert.deepEqual(oldGreenLiterals.filter((literal) => componentCss.includes(literal)), []);
});

test('@ac:WRK-169:AC-002 hover treatments use approved blue borders and preserved blue shadow tints', () => {
  assert.match(componentCss, /\.starter-grid button:hover\{border-color:#0b5cad;/);
  assert.match(componentCss, /\.result-card:hover\{border-color:#0b5cad\}/);
  assert.match(componentCss, /\.result-card\{[^}]*box-shadow:0 2px 8px #084a8a08/);
  assert.match(componentCss, /\.composer:focus-within\{border-color:#0b5cad;box-shadow:0 0 0 3px #e6eef7\}/);
});

test('@ac:WRK-169:AC-003 stylesheet scope stays color-value only for approved files', () => {
  assert.match(globalCss, /color: #1e2935; background: #f5f7f6;/);
  assert.deepEqual(oldGreenLiterals.filter((literal) => globalCss.includes(literal)), []);
  assert.doesNotMatch(globalCss, /green|mint/i);
  assert.equal(componentCss.includes('display:grid'), true);
  assert.equal(componentCss.includes('grid-template:68px 1fr / 252px 1fr'), true);
  assert.equal(componentCss.includes('@media(max-width:850px)'), true);
});

test('@ac:WRK-169:AC-004 amber banner, neutral ink, and page backgrounds are unchanged', () => {
  assert.match(componentCss, /--ink:#17252d/);
  assert.match(componentCss, /\.app-frame \{[^}]*background:#f7f9f8/);
  assert.match(globalCss, /background: #f5f7f6/);
  assert.match(componentCss, /\.connection-banner\{[^}]*background:#fff6e6;[^}]*border-bottom:1px solid #ead2a7;[^}]*color:#75531e/);
  assert.match(componentCss, /\.connection-banner>span\{[^}]*background:#c47b16;color:white/);
});

test('@ac:WRK-169:AC-005 blue theme screenshot evidence is attached', () => {
  assert.equal(existsSync(resolve(repoRoot, 'singularity/work-items/WRK-169/artifacts/verification/main-chat-blue.png')), true);
});