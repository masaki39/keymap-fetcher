export type KeyId = string;

export interface KeyDef {
  id: KeyId;
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
  fontSize?: number;
}

export type VimKeyMap = Record<string, KeyId[]>;

// All keys on the MacBook Air 13" JIS keyboard
// Canvas: 880x290px, keyboard body: x=10,y=10,w=860,h=270
// 1u = 50px key + 5px gap = 55px pitch

export const KEYBOARD_KEYS: KeyDef[] = [
  // Row 0 – Function row (y=24, h=28)
  // 14 keys, step=60px
  { id: 'key_esc',   label: 'esc',  x: 24,  y: 24, w: 55, h: 28 },
  { id: 'key_f1',    label: 'F1',   x: 84,  y: 24, w: 55, h: 28 },
  { id: 'key_f2',    label: 'F2',   x: 144, y: 24, w: 55, h: 28 },
  { id: 'key_f3',    label: 'F3',   x: 204, y: 24, w: 55, h: 28 },
  { id: 'key_f4',    label: 'F4',   x: 264, y: 24, w: 55, h: 28 },
  { id: 'key_f5',    label: 'F5',   x: 324, y: 24, w: 55, h: 28 },
  { id: 'key_f6',    label: 'F6',   x: 384, y: 24, w: 55, h: 28 },
  { id: 'key_f7',    label: 'F7',   x: 444, y: 24, w: 55, h: 28 },
  { id: 'key_f8',    label: 'F8',   x: 504, y: 24, w: 55, h: 28 },
  { id: 'key_f9',    label: 'F9',   x: 564, y: 24, w: 55, h: 28 },
  { id: 'key_f10',   label: 'F10',  x: 624, y: 24, w: 55, h: 28 },
  { id: 'key_f11',   label: 'F11',  x: 684, y: 24, w: 55, h: 28 },
  { id: 'key_f12',   label: 'F12',  x: 744, y: 24, w: 55, h: 28 },
  { id: 'key_power', label: '⏻',    x: 804, y: 24, w: 56, h: 28 },

  // Row 1 – Number row (y=57, h=40)
  // 14 keys @w=50 (step=55) + Delete @w=66
  { id: 'key_hankaku', label: '半/全', x: 24,  y: 57, w: 50, h: 40 },
  { id: 'key_1',       label: '1',    x: 79,  y: 57, w: 50, h: 40 },
  { id: 'key_2',       label: '2',    x: 134, y: 57, w: 50, h: 40 },
  { id: 'key_3',       label: '3',    x: 189, y: 57, w: 50, h: 40 },
  { id: 'key_4',       label: '4',    x: 244, y: 57, w: 50, h: 40 },
  { id: 'key_5',       label: '5',    x: 299, y: 57, w: 50, h: 40 },
  { id: 'key_6',       label: '6',    x: 354, y: 57, w: 50, h: 40 },
  { id: 'key_7',       label: '7',    x: 409, y: 57, w: 50, h: 40 },
  { id: 'key_8',       label: '8',    x: 464, y: 57, w: 50, h: 40 },
  { id: 'key_9',       label: '9',    x: 519, y: 57, w: 50, h: 40 },
  { id: 'key_0',       label: '0',    x: 574, y: 57, w: 50, h: 40 },
  { id: 'key_minus',   label: '-',    x: 629, y: 57, w: 50, h: 40 },
  { id: 'key_caret',   label: '^',    x: 684, y: 57, w: 50, h: 40 },
  { id: 'key_yen',     label: '¥',    x: 739, y: 57, w: 50, h: 40 },
  { id: 'key_delete',  label: 'del',  x: 794, y: 57, w: 66, h: 40 },

  // Row 2 – QWERTY row (y=102, h=40)
  // Tab @w=76, then 12 keys @w=50 (step=55), Return x=765 w=95 h=85
  { id: 'key_tab',     label: 'tab',  x: 24,  y: 102, w: 76, h: 40 },
  { id: 'key_q',       label: 'Q',    x: 105, y: 102, w: 50, h: 40 },
  { id: 'key_w',       label: 'W',    x: 160, y: 102, w: 50, h: 40 },
  { id: 'key_e',       label: 'E',    x: 215, y: 102, w: 50, h: 40 },
  { id: 'key_r',       label: 'R',    x: 270, y: 102, w: 50, h: 40 },
  { id: 'key_t',       label: 'T',    x: 325, y: 102, w: 50, h: 40 },
  { id: 'key_y',       label: 'Y',    x: 380, y: 102, w: 50, h: 40 },
  { id: 'key_u',       label: 'U',    x: 435, y: 102, w: 50, h: 40 },
  { id: 'key_i',       label: 'I',    x: 490, y: 102, w: 50, h: 40 },
  { id: 'key_o',       label: 'O',    x: 545, y: 102, w: 50, h: 40 },
  { id: 'key_p',       label: 'P',    x: 600, y: 102, w: 50, h: 40 },
  { id: 'key_at',      label: '@',    x: 655, y: 102, w: 50, h: 40 },
  { id: 'key_lbracket',label: '[',    x: 710, y: 102, w: 50, h: 40 },
  { id: 'key_return',  label: 'ret',  x: 765, y: 102, w: 95, h: 85 },

  // Row 3 – Home row (y=147, h=40)
  // 英数 @w=66, 11 keys @w=50 (step=55), ] @w=60
  { id: 'key_eisu',     label: '英数', x: 24,  y: 147, w: 66, h: 40 },
  { id: 'key_a',        label: 'A',   x: 95,  y: 147, w: 50, h: 40 },
  { id: 'key_s',        label: 'S',   x: 150, y: 147, w: 50, h: 40 },
  { id: 'key_d',        label: 'D',   x: 205, y: 147, w: 50, h: 40 },
  { id: 'key_f',        label: 'F',   x: 260, y: 147, w: 50, h: 40 },
  { id: 'key_g',        label: 'G',   x: 315, y: 147, w: 50, h: 40 },
  { id: 'key_h',        label: 'H',   x: 370, y: 147, w: 50, h: 40 },
  { id: 'key_j',        label: 'J',   x: 425, y: 147, w: 50, h: 40 },
  { id: 'key_k',        label: 'K',   x: 480, y: 147, w: 50, h: 40 },
  { id: 'key_l',        label: 'L',   x: 535, y: 147, w: 50, h: 40 },
  { id: 'key_semicolon',label: ';',   x: 590, y: 147, w: 50, h: 40 },
  { id: 'key_colon',    label: ':',   x: 645, y: 147, w: 50, h: 40 },
  { id: 'key_rbracket', label: ']',   x: 700, y: 147, w: 60, h: 40 },

  // Row 4 – Shift row (y=192, h=40)
  // ShiftL @w=116, 11 keys @w=50 (step=55), ShiftR @w=110
  { id: 'key_shift_l',   label: 'shift', x: 24,  y: 192, w: 116, h: 40 },
  { id: 'key_z',         label: 'Z',     x: 145, y: 192, w: 50,  h: 40 },
  { id: 'key_x',         label: 'X',     x: 200, y: 192, w: 50,  h: 40 },
  { id: 'key_c',         label: 'C',     x: 255, y: 192, w: 50,  h: 40 },
  { id: 'key_v',         label: 'V',     x: 310, y: 192, w: 50,  h: 40 },
  { id: 'key_b',         label: 'B',     x: 365, y: 192, w: 50,  h: 40 },
  { id: 'key_n',         label: 'N',     x: 420, y: 192, w: 50,  h: 40 },
  { id: 'key_m',         label: 'M',     x: 475, y: 192, w: 50,  h: 40 },
  { id: 'key_lt',        label: ',',     x: 530, y: 192, w: 50,  h: 40 },
  { id: 'key_gt',        label: '.',     x: 585, y: 192, w: 50,  h: 40 },
  { id: 'key_question',  label: '/',     x: 640, y: 192, w: 50,  h: 40 },
  { id: 'key_underscore',label: '_',     x: 695, y: 192, w: 50,  h: 40 },
  { id: 'key_shift_r',   label: 'shift', x: 750, y: 192, w: 110, h: 40 },

  // Row 5 – Bottom row (y=237, h=32)
  { id: 'key_fn',      label: 'fn',   x: 24,  y: 237, w: 50,  h: 32 },
  { id: 'key_ctrl',    label: 'ctrl', x: 79,  y: 237, w: 66,  h: 32 },
  { id: 'key_opt_l',   label: 'opt',  x: 150, y: 237, w: 50,  h: 32 },
  { id: 'key_cmd_l',   label: 'cmd',  x: 205, y: 237, w: 72,  h: 32 },
  { id: 'key_eisu_bot',label: '英数', x: 282, y: 237, w: 66,  h: 32 },
  { id: 'key_space',   label: '',     x: 353, y: 237, w: 169, h: 32 },
  { id: 'key_kana',    label: 'かな', x: 527, y: 237, w: 66,  h: 32 },
  { id: 'key_cmd_r',   label: 'cmd',  x: 598, y: 237, w: 72,  h: 32 },
  { id: 'key_opt_r',   label: 'opt',  x: 675, y: 237, w: 50,  h: 32 },
  // Arrow keys – left shares the 32px cell; up/down split vertically
  { id: 'key_arrow_l', label: '←',   x: 730, y: 237, w: 40,  h: 32 },
  { id: 'key_arrow_u', label: '↑',   x: 775, y: 237, w: 40,  h: 13 },
  { id: 'key_arrow_d', label: '↓',   x: 775, y: 255, w: 40,  h: 14 },
  { id: 'key_arrow_r', label: '→',   x: 820, y: 237, w: 40,  h: 32 },
];

// Vim key notation → key IDs
export const VIM_KEY_MAP: VimKeyMap = {
  // Letters
  'a': ['key_a'], 'b': ['key_b'], 'c': ['key_c'], 'd': ['key_d'],
  'e': ['key_e'], 'f': ['key_f'], 'g': ['key_g'], 'h': ['key_h'],
  'i': ['key_i'], 'j': ['key_j'], 'k': ['key_k'], 'l': ['key_l'],
  'm': ['key_m'], 'n': ['key_n'], 'o': ['key_o'], 'p': ['key_p'],
  'q': ['key_q'], 'r': ['key_r'], 's': ['key_s'], 't': ['key_t'],
  'u': ['key_u'], 'v': ['key_v'], 'w': ['key_w'], 'x': ['key_x'],
  'y': ['key_y'], 'z': ['key_z'],
  // Numbers
  '1': ['key_1'], '2': ['key_2'], '3': ['key_3'], '4': ['key_4'],
  '5': ['key_5'], '6': ['key_6'], '7': ['key_7'], '8': ['key_8'],
  '9': ['key_9'], '0': ['key_0'],
  // Symbol keys
  '-': ['key_minus'],
  '^': ['key_caret'],
  '¥': ['key_yen'],
  '@': ['key_at'],
  '[': ['key_lbracket'],
  ';': ['key_semicolon'],
  ':': ['key_colon'],
  ']': ['key_rbracket'],
  ',': ['key_lt'],
  '.': ['key_gt'],
  '/': ['key_question'],
  '_': ['key_underscore'],
  ' ': ['key_space'],
  // Named keys (Vim notation)
  'esc': ['key_esc'],
  'cr': ['key_return'],
  'enter': ['key_return'],
  'return': ['key_return'],
  'bs': ['key_delete'],
  'backspace': ['key_delete'],
  'del': ['key_delete'],
  'tab': ['key_tab'],
  'space': ['key_space'],
  'up': ['key_arrow_u'],
  'down': ['key_arrow_d'],
  'left': ['key_arrow_l'],
  'right': ['key_arrow_r'],
  // Function keys
  'f1': ['key_f1'], 'f2': ['key_f2'], 'f3': ['key_f3'], 'f4': ['key_f4'],
  'f5': ['key_f5'], 'f6': ['key_f6'], 'f7': ['key_f7'], 'f8': ['key_f8'],
  'f9': ['key_f9'], 'f10': ['key_f10'], 'f11': ['key_f11'], 'f12': ['key_f12'],
};

// Modifier prefix in Vim <X-key> notation → key ID
export const MODIFIER_KEY_MAP: Record<string, KeyId> = {
  'c': 'key_ctrl',
  's': 'key_shift_l',
  'm': 'key_opt_l',  // Meta = Option on Mac
  'a': 'key_opt_l',  // Alt = Option on Mac
  'd': 'key_cmd_l',  // D = Command
};
