import { KeyId, KeyDef, LAYOUTS, LayoutId } from './keyboard-layout';
import { HHKB_US_FN_LABELS } from './keyboards/hhkb-us-fn';

const COLORS = {
  background: '#1e1e1e',
  body: '#2a2a2a',
  key: '#3a3a3a',
  keyStroke: '#4a4a4a',
  highlight: '#F97316',
  highlightStroke: '#fb923c',
  text: '#ffffff',
  textDim: '#888888',
} as const;

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderKey(key: KeyDef, highlighted: boolean, showShiftLabel: boolean = true): string {
  const fill = highlighted ? COLORS.highlight : COLORS.key;
  const stroke = highlighted ? COLORS.highlightStroke : COLORS.keyStroke;
  const primaryFontSize = key.fontSize ?? (key.h <= 28 ? 9 : 11);
  const cx = key.x + key.w / 2;
  const hasShift = showShiftLabel && !!key.shiftLabel;
  const cy = hasShift ? key.y + key.h * 0.65 : key.y + key.h / 2;

  const parts: string[] = [
    `<g id="${key.id}">`,
    `  <rect x="${key.x}" y="${key.y}" width="${key.w}" height="${key.h}" rx="6" fill="${fill}" stroke="${stroke}" stroke-width="1"/>`,
  ];

  if (key.label) {
    parts.push(`  <text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="central" fill="${COLORS.text}" font-family="system-ui,sans-serif" font-size="${primaryFontSize}">${escapeXml(key.label)}</text>`);
  }

  if (hasShift) {
    const shiftCy = key.y + key.h * 0.28;
    parts.push(`  <text x="${cx}" y="${shiftCy}" text-anchor="middle" dominant-baseline="central" fill="${COLORS.textDim}" font-family="system-ui,sans-serif" font-size="8">${escapeXml(key.shiftLabel!)}</text>`);
  }

  parts.push(`</g>`);
  return parts.join('\n');
}

export function generateKeyboardSVG(
  highlighted: Set<KeyId>,
  layoutId: LayoutId = 'mba-jis',
  fnHeld: boolean = false,
): string {
  const layout = LAYOUTS[layoutId];
  const { canvas } = layout;

  const fnLabels = layoutId === 'hhkb-us' && fnHeld ? HHKB_US_FN_LABELS : null;
  const keys = layout.keys.map(k => {
    const overrideLabel = fnLabels?.[k.id];
    const drawKey = overrideLabel !== undefined ? { ...k, label: overrideLabel } : k;
    return renderKey(drawKey, highlighted.has(k.id), !fnHeld);
  }).join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${canvas.width}" height="${canvas.height}" role="img" aria-label="Keyboard diagram">
  <rect width="${canvas.width}" height="${canvas.height}" fill="${COLORS.background}"/>
  <rect x="${canvas.bodyX}" y="${canvas.bodyY}" width="${canvas.bodyW}" height="${canvas.bodyH}" rx="12" fill="${COLORS.body}"/>
${keys}
</svg>`;
}
