// HHKB Professional HYBRID Type-S — US (ANSI 60%) layout.
//
// Grid: 1u = 46px, gap = 6px, pitch = 52px, key height = 40px, row pitch = 45px.
// Body centered in an 838-wide canvas (matches MBA-JIS canvas width for
// consistent visual sizing when embedded side-by-side).
// Inner body coordinates: x = 18..820, content area starts at x = 32, y = 24.
//
// US ANSI keys include both default and shift legends (e.g. 1 / !, [ / {).
// The shift legend is shown above the primary in a smaller dim font by
// renderKey() in ../svg-generator.ts.

import type { KeyDef, KeyId, VimKeyMap } from '../keyboard-layout';

export const HHKB_US_KEYS: KeyDef[] = [
  // Row 1 — number row (y=24, h=40, 15×1u with dual legends)
  { id: 'key_esc',       label: 'esc',                       x: 32,  y: 24, w: 46, h: 40 },
  { id: 'key_1',         label: '1',  shiftLabel: '!',       x: 84,  y: 24, w: 46, h: 40 },
  { id: 'key_2',         label: '2',  shiftLabel: '@',       x: 136, y: 24, w: 46, h: 40 },
  { id: 'key_3',         label: '3',  shiftLabel: '#',       x: 188, y: 24, w: 46, h: 40 },
  { id: 'key_4',         label: '4',  shiftLabel: '$',       x: 240, y: 24, w: 46, h: 40 },
  { id: 'key_5',         label: '5',  shiftLabel: '%',       x: 292, y: 24, w: 46, h: 40 },
  { id: 'key_6',         label: '6',  shiftLabel: '^',       x: 344, y: 24, w: 46, h: 40 },
  { id: 'key_7',         label: '7',  shiftLabel: '&',       x: 396, y: 24, w: 46, h: 40 },
  { id: 'key_8',         label: '8',  shiftLabel: '*',       x: 448, y: 24, w: 46, h: 40 },
  { id: 'key_9',         label: '9',  shiftLabel: '(',       x: 500, y: 24, w: 46, h: 40 },
  { id: 'key_0',         label: '0',  shiftLabel: ')',       x: 552, y: 24, w: 46, h: 40 },
  { id: 'key_minus',     label: '-',  shiftLabel: '_',       x: 604, y: 24, w: 46, h: 40 },
  { id: 'key_equal',     label: '=',  shiftLabel: '+',       x: 656, y: 24, w: 46, h: 40 },
  { id: 'key_backslash', label: '\\', shiftLabel: '|',       x: 708, y: 24, w: 46, h: 40 },
  { id: 'key_backtick',  label: '`',  shiftLabel: '~',       x: 760, y: 24, w: 46, h: 40 },

  // Row 2 — QWERTY (y=69, Tab 1.5u | 12×1u | Delete 1.5u)
  { id: 'key_tab',      label: 'tab',                  x: 32,  y: 69, w: 72, h: 40 },
  { id: 'key_q',        label: 'Q',                    x: 110, y: 69, w: 46, h: 40 },
  { id: 'key_w',        label: 'W',                    x: 162, y: 69, w: 46, h: 40 },
  { id: 'key_e',        label: 'E',                    x: 214, y: 69, w: 46, h: 40 },
  { id: 'key_r',        label: 'R',                    x: 266, y: 69, w: 46, h: 40 },
  { id: 'key_t',        label: 'T',                    x: 318, y: 69, w: 46, h: 40 },
  { id: 'key_y',        label: 'Y',                    x: 370, y: 69, w: 46, h: 40 },
  { id: 'key_u',        label: 'U',                    x: 422, y: 69, w: 46, h: 40 },
  { id: 'key_i',        label: 'I',                    x: 474, y: 69, w: 46, h: 40 },
  { id: 'key_o',        label: 'O',                    x: 526, y: 69, w: 46, h: 40 },
  { id: 'key_p',        label: 'P',                    x: 578, y: 69, w: 46, h: 40 },
  { id: 'key_lbracket', label: '[',  shiftLabel: '{',  x: 630, y: 69, w: 46, h: 40 },
  { id: 'key_rbracket', label: ']',  shiftLabel: '}',  x: 682, y: 69, w: 46, h: 40 },
  { id: 'key_delete',   label: 'delete',               x: 734, y: 69, w: 72, h: 40 },

  // Row 3 — home row (y=114, Control 1.75u | 11×1u | Return 2.25u)
  { id: 'key_ctrl',      label: 'control',              x: 32,  y: 114, w: 85,  h: 40 },
  { id: 'key_a',         label: 'A',                    x: 123, y: 114, w: 46,  h: 40 },
  { id: 'key_s',         label: 'S',                    x: 175, y: 114, w: 46,  h: 40 },
  { id: 'key_d',         label: 'D',                    x: 227, y: 114, w: 46,  h: 40 },
  { id: 'key_f',         label: 'F',                    x: 279, y: 114, w: 46,  h: 40 },
  { id: 'key_g',         label: 'G',                    x: 331, y: 114, w: 46,  h: 40 },
  { id: 'key_h',         label: 'H',                    x: 383, y: 114, w: 46,  h: 40 },
  { id: 'key_j',         label: 'J',                    x: 435, y: 114, w: 46,  h: 40 },
  { id: 'key_k',         label: 'K',                    x: 487, y: 114, w: 46,  h: 40 },
  { id: 'key_l',         label: 'L',                    x: 539, y: 114, w: 46,  h: 40 },
  { id: 'key_semicolon', label: ';',  shiftLabel: ':',  x: 591, y: 114, w: 46,  h: 40 },
  { id: 'key_quote',     label: "'",  shiftLabel: '"',  x: 643, y: 114, w: 46,  h: 40 },
  { id: 'key_return',    label: 'return',               x: 695, y: 114, w: 111, h: 40 },

  // Row 4 — shift row (y=159, Shift-L 2.25u | 10×1u | Shift-R 1.75u | Fn 1u)
  { id: 'key_shift_l', label: 'shift',              x: 32,  y: 159, w: 111, h: 40 },
  { id: 'key_z',       label: 'Z',                  x: 149, y: 159, w: 46,  h: 40 },
  { id: 'key_x',       label: 'X',                  x: 201, y: 159, w: 46,  h: 40 },
  { id: 'key_c',       label: 'C',                  x: 253, y: 159, w: 46,  h: 40 },
  { id: 'key_v',       label: 'V',                  x: 305, y: 159, w: 46,  h: 40 },
  { id: 'key_b',       label: 'B',                  x: 357, y: 159, w: 46,  h: 40 },
  { id: 'key_n',       label: 'N',                  x: 409, y: 159, w: 46,  h: 40 },
  { id: 'key_m',       label: 'M',                  x: 461, y: 159, w: 46,  h: 40 },
  { id: 'key_comma',   label: ',', shiftLabel: '<', x: 513, y: 159, w: 46,  h: 40 },
  { id: 'key_period',  label: '.', shiftLabel: '>', x: 565, y: 159, w: 46,  h: 40 },
  { id: 'key_slash',   label: '/', shiftLabel: '?', x: 617, y: 159, w: 46,  h: 40 },
  { id: 'key_shift_r', label: 'shift',              x: 669, y: 159, w: 85,  h: 40 },
  { id: 'key_fn',      label: 'fn',                 x: 760, y: 159, w: 46,  h: 40 },

  // Row 5 — bottom row (y=204)
  //   blank 1.5u | Opt 1u | Cmd 1.5u | Space 7u | Cmd 1.5u | Opt 1u | blank 1.5u
  { id: 'key_opt_l', label: '◇', x: 110, y: 204, w: 46,  h: 40 },
  { id: 'key_cmd_l', label: '◆', x: 162, y: 204, w: 72,  h: 40 },
  { id: 'key_space', label: '',  x: 240, y: 204, w: 358, h: 40 },
  { id: 'key_cmd_r', label: '◆', x: 604, y: 204, w: 72,  h: 40 },
  { id: 'key_opt_r', label: '◇', x: 682, y: 204, w: 46,  h: 40 },
];

// HHKB-specific extensions to the Vim notation map.
// Keys not listed here fall through from the base VIM_KEY_MAP via spread.
export const HHKB_US_VIM_KEY_MAP: VimKeyMap = {
  // US ANSI symbols not on MBA-JIS
  '=':  ['key_equal'],
  "'":  ['key_quote'],
  '\\': ['key_backslash'],
  '`':  ['key_backtick'],

  // opt/alt → ◇, cmd → ◆
  'opt': ['key_opt_l'],
  'alt': ['key_opt_l'],
  'opt-l': ['key_opt_l'],
  'opt-r': ['key_opt_r'],
  'alt-l': ['key_opt_l'],
  'alt-r': ['key_opt_r'],
  'cmd': ['key_cmd_l'],
  'cmd-l': ['key_cmd_l'],
  'cmd-r': ['key_cmd_r'],

  // Caps Lock is physically replaced by Control on HHKB ANSI
  'caps': ['key_ctrl'],
};

// Modifier prefix map for <M-x> / <A-x> / <D-x> notation on HHKB.
export const HHKB_US_MODIFIER_KEY_MAP: Record<string, KeyId> = {
  'c': 'key_ctrl',
  's': 'key_shift_l',
  'm': 'key_opt_l',
  'a': 'key_opt_l',
  'd': 'key_cmd_l',
};

// Canvas dimensions for the generator.
export const HHKB_US_CANVAS = { width: 838, height: 260, bodyX: 18, bodyY: 10, bodyW: 802, bodyH: 240 };
