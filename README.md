# keymap-fetcher

A Vercel API that returns an SVG diagram of a MacBook Air 13" Japanese (JIS) keyboard with specified keys highlighted. Primary use case: embedding keybinding diagrams in Markdown (GitHub READMEs, blogs).

## Demo

Base keyboard (no highlights):

![base keyboard](https://keymap-fetcher.vercel.app/api/keymap)

Vim motion keys (hjkl):

![hjkl](https://keymap-fetcher.vercel.app/api/keymap?keys=h,j,k,l)

## Usage

Embed in Markdown:

```markdown
![keymap](https://keymap-fetcher.vercel.app/api/keymap?keys=h,j,k,l)
```

Or with curl:

```sh
curl "https://keymap-fetcher.vercel.app/api/keymap?keys=h,j,k,l" -o keymap.svg
```

### Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `keys`    | Comma-separated Vim key notation | `h,j,k,l` or `<C-a>,<Esc>` |

## Key Notation

Keys follow Vim conventions:

| Notation | Key |
|----------|-----|
| `a`–`z` | Letter keys |
| `1`–`0` | Number keys |
| `<Esc>` | Escape |
| `<CR>`, `<Enter>`, `<Return>` | Return/Enter |
| `<BS>`, `<Backspace>`, `<Del>` | Delete |
| `<Tab>` | Tab |
| `<Space>`, ` ` (space) | Space bar |
| `<Up>`, `<Down>`, `<Left>`, `<Right>` | Arrow keys |
| `<F1>`–`<F12>` | Function keys |
| `<C-x>` | Ctrl + x |
| `<S-x>` | Shift + x |
| `<D-x>` | Command (⌘) + x |
| `<M-x>`, `<A-x>` | Option (⌥) + x |
| `-`, `^`, `¥`, `@`, `[`, `;`, `:`, `]`, `,`, `.`, `/`, `_` | Symbol keys |

## Self-hosting on Vercel

```sh
git clone https://github.com/masaki39/keymap-fetcher.git
cd keymap-fetcher
npm install
vercel deploy
```

## Feedback

Please report issues at [GitHub Issues](https://github.com/masaki39/keymap-fetcher/issues).
