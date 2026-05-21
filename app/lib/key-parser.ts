import { KeyId, VimKeyMap, VIM_KEY_MAP, MODIFIER_KEY_MAP } from './keyboard-layout';

// Parses a comma-separated Vim key notation string into a Set of key IDs.
// Examples:
//   "j,k,<C-a>,<Esc>" → Set { 'key_j', 'key_k', 'key_ctrl', 'key_a', 'key_esc' }
//   "h,j,k,l"         → Set { 'key_h', 'key_j', 'key_k', 'key_l' }
//   "<S-F1>"           → Set { 'key_shift_l', 'key_f1' }
export function parseKeys(
  input: string,
  vimMap: VimKeyMap = VIM_KEY_MAP,
  modifierMap: Record<string, KeyId> = MODIFIER_KEY_MAP,
): Set<KeyId> {
  const result = new Set<KeyId>();

  if (!input.trim()) return result;

  const tokens = input.split(',').map(t => t.trim()).filter(t => t.length > 0);

  for (const token of tokens) {
    if (token.startsWith('<') && token.endsWith('>')) {
      // Bracketed notation: <Esc>, <C-a>, <S-F1>, <C-Space>, etc.
      const inner = token.slice(1, -1);
      const modMatch = inner.match(/^([csmaD])-(.+)$/i);

      if (modMatch) {
        // Modifier + key: e.g. C-a, S-F1, D-w
        const modChar = modMatch[1].toLowerCase();
        const keyPart = modMatch[2].toLowerCase();

        const modId = modifierMap[modChar];
        if (modId) result.add(modId);

        const keyIds = vimMap[keyPart];
        if (keyIds) keyIds.forEach(id => result.add(id));
      } else {
        // Try standalone modifier: <C>, <S>, <M>, <A>, <D>
        const standaloneModId = modifierMap[inner.toLowerCase()];
        if (standaloneModId) {
          result.add(standaloneModId);
        } else {
          // Named key: e.g. Esc, CR, Tab, F1
          const keyIds = vimMap[inner.toLowerCase()];
          if (keyIds) keyIds.forEach(id => result.add(id));
        }
      }
    } else {
      // Bare token: single char or named key (e.g. "j", "esc", "f1")
      const lower = token.toLowerCase();
      const keyIds = vimMap[lower] ?? vimMap[token];
      if (keyIds) keyIds.forEach(id => result.add(id));
    }
  }

  return result;
}
