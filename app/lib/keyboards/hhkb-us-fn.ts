// HHKB Pro HYBRID Type-S US — Fn-layer label overlay.
// Default DIP-switch configuration (all OFF).
// Verified against the author's HHKB Pro HYBRID Type-S US.
//
// When the generator is called with fnHeld=true, each key whose id appears
// in this map has its primary label replaced by the Fn-layer label. The
// shift legend (if any) is hidden in Fn mode. Keys not listed here render
// their default label.

export const HHKB_US_FN_LABELS: Record<string, string> = {
  // Row 1 — number row
  key_esc:        'pwr',
  key_1:          'F1',
  key_2:          'F2',
  key_3:          'F3',
  key_4:          'F4',
  key_5:          'F5',
  key_6:          'F6',
  key_7:          'F7',
  key_8:          'F8',
  key_9:          'F9',
  key_0:          'F10',
  key_minus:      'F11',
  key_equal:      'F12',
  key_backslash:  'ins',
  key_backtick:   'del',

  // Row 2 — QWERTY
  key_tab:        'caps',
  key_i:          'psc',   // Print Screen / SysRq
  key_o:          'slk',   // Scroll Lock
  key_p:          'pus',   // Pause / Break
  key_lbracket:   '↑',

  // Row 3 — home row
  key_a:          'vol−',
  key_s:          'vol+',
  key_d:          'mute',
  key_f:          'eject',
  key_h:          '*',
  key_j:          '/',
  key_k:          'home',
  key_l:          'pg up',
  key_semicolon:  '←',
  key_quote:      '→',

  // Row 4 — shift row
  key_n:          '+',
  key_m:          '−',
  key_comma:      'end',
  key_period:     'pg dn',
  key_slash:      '↓',
};
