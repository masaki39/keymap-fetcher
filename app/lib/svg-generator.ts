import { KeyId, KeyDef, KEYBOARD_KEYS } from './keyboard-layout';

const COLORS = {
  background: '#1e1e1e',
  body: '#2a2a2a',
  key: '#3a3a3a',
  keyStroke: '#4a4a4a',
  highlight: '#F97316',
  highlightStroke: '#fb923c',
  text: '#ffffff',
} as const;

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderKey(key: KeyDef, highlighted: boolean): string {
  const fill = highlighted ? COLORS.highlight : COLORS.key;
  const stroke = highlighted ? COLORS.highlightStroke : COLORS.keyStroke;
  const fontSize = key.fontSize ?? (key.h <= 28 ? 9 : 11);
  const cx = key.x + key.w / 2;
  const cy = key.y + key.h / 2;

  return [
    `<g id="${key.id}">`,
    `  <rect x="${key.x}" y="${key.y}" width="${key.w}" height="${key.h}" rx="6" fill="${fill}" stroke="${stroke}" stroke-width="1"/>`,
    key.label
      ? `  <text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="central" fill="${COLORS.text}" font-family="system-ui,sans-serif" font-size="${fontSize}">${escapeXml(key.label)}</text>`
      : '',
    `</g>`,
  ].filter(Boolean).join('\n');
}

export function generateKeyboardSVG(highlighted: Set<KeyId>): string {
  const keys = KEYBOARD_KEYS.map(key =>
    renderKey(key, highlighted.has(key.id))
  ).join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="880" height="290" role="img" aria-label="Keyboard diagram">
  <rect width="880" height="290" fill="${COLORS.background}"/>
  <rect x="10" y="10" width="860" height="270" rx="12" fill="${COLORS.body}"/>
${keys}
</svg>`;
}
