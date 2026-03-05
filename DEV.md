## Local Development Setup

Start the local API server:

```sh
npm run dev
```

The API will be available at `http://localhost:3000/api/keymap` (note: `http`, not `https`).

Open this file in a Markdown preview (VS Code, Obsidian, etc.) to see the keyboard diagrams live.

## Demo Examples

**Base keyboard (no highlights):**

![base keyboard](http://localhost:3000/api/keymap)

**Vim motion keys (hjkl):**

![hjkl](http://localhost:3000/api/keymap?keys=h,j,k,l)

**Vim window navigation:**

![vim windows](http://localhost:3000/api/keymap?keys=n,e,i,o)

**Control key combinations:**

![ctrl keys](http://localhost:3000/api/keymap?keys=<C-n>,<C-e>,<C-i>,<C-o>)

**Escape and Return:**

![escape/return](http://localhost:3000/api/keymap?keys=<Esc>,<CR>)

**Arrow keys:**

![arrows](http://localhost:3000/api/keymap?keys=<Left>,<Down>,<Up>,<Right>)

**Function row:**

![function keys](http://localhost:3000/api/keymap?keys=<F1>,<F2>,<F12>)

**Shift combinations:**

![shift keys](http://localhost:3000/api/keymap?keys=<S-h>,<S-j>,<S-k>,<S-l>)

**Command/Option modifiers:**

![cmd/opt keys](http://localhost:3000/api/keymap?keys=<D-c>,<D-v>,<M-x>,<M-w>)
