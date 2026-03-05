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
// Canvas: 838x290px, keyboard body: x=10,y=10,w=818,h=270
// 1u = 50px key + 5px gap = 55px pitch

export const KEYBOARD_KEYS: KeyDef[] = [
  // Row 0 – Function row (y=24, h=28)
  // 14 keys, step=59px (54px key + 5px gap)
  { id: 'key_esc', label: 'esc', x: 24, y: 24, w: 54, h: 28 },
  { id: 'key_f1', label: 'F1', x: 83, y: 24, w: 54, h: 28 },
  { id: 'key_f2', label: 'F2', x: 142, y: 24, w: 54, h: 28 },
  { id: 'key_f3', label: 'F3', x: 201, y: 24, w: 54, h: 28 },
  { id: 'key_f4', label: 'F4', x: 260, y: 24, w: 54, h: 28 },
  { id: 'key_f5', label: 'F5', x: 319, y: 24, w: 54, h: 28 },
  { id: 'key_f6', label: 'F6', x: 378, y: 24, w: 54, h: 28 },
  { id: 'key_f7', label: 'F7', x: 437, y: 24, w: 54, h: 28 },
  { id: 'key_f8', label: 'F8', x: 496, y: 24, w: 54, h: 28 },
  { id: 'key_f9', label: 'F9', x: 555, y: 24, w: 54, h: 28 },
  { id: 'key_f10', label: 'F10', x: 614, y: 24, w: 54, h: 28 },
  { id: 'key_f11', label: 'F11', x: 673, y: 24, w: 54, h: 28 },
  { id: 'key_f12', label: 'F12', x: 732, y: 24, w: 54, h: 28 },
  { id: 'key_power', label: '⏻', x: 791, y: 24, w: 27, h: 28 },

  // Row 1 – Number row (y=57, h=40)
  // 1 @w=79, then 13 keys @w=50 (step=55), delete end=818
  { id: 'key_1', label: '1', x: 24, y: 57, w: 79, h: 40 },
  { id: 'key_2', label: '2', x: 108, y: 57, w: 50, h: 40 },
  { id: 'key_3', label: '3', x: 163, y: 57, w: 50, h: 40 },
  { id: 'key_4', label: '4', x: 218, y: 57, w: 50, h: 40 },
  { id: 'key_5', label: '5', x: 273, y: 57, w: 50, h: 40 },
  { id: 'key_6', label: '6', x: 328, y: 57, w: 50, h: 40 },
  { id: 'key_7', label: '7', x: 383, y: 57, w: 50, h: 40 },
  { id: 'key_8', label: '8', x: 438, y: 57, w: 50, h: 40 },
  { id: 'key_9', label: '9', x: 493, y: 57, w: 50, h: 40 },
  { id: 'key_0', label: '0', x: 548, y: 57, w: 50, h: 40 },
  { id: 'key_minus', label: '-', x: 603, y: 57, w: 50, h: 40 },
  { id: 'key_caret', label: '^', x: 658, y: 57, w: 50, h: 40 },
  { id: 'key_yen', label: '¥', x: 713, y: 57, w: 50, h: 40 },
  { id: 'key_delete', label: 'del', x: 768, y: 57, w: 50, h: 40 },

  // Row 2 – QWERTY row (y=102, h=40)
  // Tab @w=50, then 12 keys @w=50 (step=55), [ @w=60, Return x=749 w=69 h=85
  { id: 'key_tab', label: 'tab', x: 24, y: 102, w: 50, h: 40 },
  { id: 'key_q', label: 'Q', x: 79, y: 102, w: 50, h: 40 },
  { id: 'key_w', label: 'W', x: 134, y: 102, w: 50, h: 40 },
  { id: 'key_e', label: 'E', x: 189, y: 102, w: 50, h: 40 },
  { id: 'key_r', label: 'R', x: 244, y: 102, w: 50, h: 40 },
  { id: 'key_t', label: 'T', x: 299, y: 102, w: 50, h: 40 },
  { id: 'key_y', label: 'Y', x: 354, y: 102, w: 50, h: 40 },
  { id: 'key_u', label: 'U', x: 409, y: 102, w: 50, h: 40 },
  { id: 'key_i', label: 'I', x: 464, y: 102, w: 50, h: 40 },
  { id: 'key_o', label: 'O', x: 519, y: 102, w: 50, h: 40 },
  { id: 'key_p', label: 'P', x: 574, y: 102, w: 50, h: 40 },
  { id: 'key_at', label: '@', x: 629, y: 102, w: 50, h: 40 },
  { id: 'key_lbracket', label: '[', x: 684, y: 102, w: 60, h: 40 },
  { id: 'key_return', label: 'enter', x: 749, y: 102, w: 69, h: 85 },

  // Row 3 – Home row (y=147, h=40)
  // Ctrl @w=60, 11 keys @w=50 (step=55), ] @w=50
  { id: 'key_ctrl_row3', label: 'ctrl', x: 24, y: 147, w: 60, h: 40 },
  { id: 'key_a', label: 'A', x: 89, y: 147, w: 50, h: 40 },
  { id: 'key_s', label: 'S', x: 144, y: 147, w: 50, h: 40 },
  { id: 'key_d', label: 'D', x: 199, y: 147, w: 50, h: 40 },
  { id: 'key_f', label: 'F', x: 254, y: 147, w: 50, h: 40 },
  { id: 'key_g', label: 'G', x: 309, y: 147, w: 50, h: 40 },
  { id: 'key_h', label: 'H', x: 364, y: 147, w: 50, h: 40 },
  { id: 'key_j', label: 'J', x: 419, y: 147, w: 50, h: 40 },
  { id: 'key_k', label: 'K', x: 474, y: 147, w: 50, h: 40 },
  { id: 'key_l', label: 'L', x: 529, y: 147, w: 50, h: 40 },
  { id: 'key_semicolon', label: ';', x: 584, y: 147, w: 50, h: 40 },
  { id: 'key_colon', label: ':', x: 639, y: 147, w: 50, h: 40 },
  { id: 'key_rbracket', label: ']', x: 694, y: 147, w: 50, h: 40 },

  // Row 4 – Shift row (y=192, h=40)
  // ShiftL @w=92, 11 keys @w=50 (step=55), ShiftR @w=92
  { id: 'key_shift_l', label: 'shift', x: 24, y: 192, w: 92, h: 40 },
  { id: 'key_z', label: 'Z', x: 121, y: 192, w: 50, h: 40 },
  { id: 'key_x', label: 'X', x: 176, y: 192, w: 50, h: 40 },
  { id: 'key_c', label: 'C', x: 231, y: 192, w: 50, h: 40 },
  { id: 'key_v', label: 'V', x: 286, y: 192, w: 50, h: 40 },
  { id: 'key_b', label: 'B', x: 341, y: 192, w: 50, h: 40 },
  { id: 'key_n', label: 'N', x: 396, y: 192, w: 50, h: 40 },
  { id: 'key_m', label: 'M', x: 451, y: 192, w: 50, h: 40 },
  { id: 'key_lt', label: ',', x: 506, y: 192, w: 50, h: 40 },
  { id: 'key_gt', label: '.', x: 561, y: 192, w: 50, h: 40 },
  { id: 'key_question', label: '/', x: 616, y: 192, w: 50, h: 40 },
  { id: 'key_underscore', label: '_', x: 671, y: 192, w: 50, h: 40 },
  { id: 'key_shift_r', label: 'shift', x: 726, y: 192, w: 92, h: 40 },

  // Row 5 – Bottom row (y=237, h=32)
  { id: 'key_caps', label: 'caps', x: 24, y: 237, w: 50, h: 32 },
  { id: 'key_opt_l', label: 'opt', x: 79, y: 237, w: 50, h: 32 },
  { id: 'key_cmd_l', label: 'cmd', x: 134, y: 237, w: 68, h: 32 },
  { id: 'key_eisu_bot', label: '英数', x: 207, y: 237, w: 62, h: 32 },
  { id: 'key_space', label: '', x: 274, y: 237, w: 179, h: 32 },
  { id: 'key_kana', label: 'かな', x: 458, y: 237, w: 62, h: 32 },
  { id: 'key_cmd_r', label: 'cmd', x: 525, y: 237, w: 68, h: 32 },
  { id: 'key_fn', label: 'fn', x: 598, y: 237, w: 50, h: 32 },
  // Arrow keys – left/right in bottom half; up/down split vertically
  { id: 'key_arrow_l', label: '←', x: 653, y: 255, w: 52, h: 14 },
  { id: 'key_arrow_u', label: '↑', x: 710, y: 237, w: 53, h: 13 },
  { id: 'key_arrow_d', label: '↓', x: 710, y: 255, w: 53, h: 14 },
  { id: 'key_arrow_r', label: '→', x: 768, y: 255, w: 50, h: 14 },
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
