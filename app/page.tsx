'use client'

import { useState } from 'react'

export default function Home() {
  const [input, setInput] = useState('h,j,k,l')
  const [imgSrc, setImgSrc] = useState('/api/keymap?keys=h,j,k,l')

  const generateKeymap = (keys: string) => {
    const url = `/api/keymap?keys=${encodeURIComponent(keys)}`
    setImgSrc(url)
    setInput(keys)
  }

  const copyUrl = async () => {
    const fullUrl = `${window.location.origin}${imgSrc}`
    await navigator.clipboard.writeText(fullUrl)
    alert('URL copied to clipboard!')
  }

  const downloadSVG = () => {
    const link = document.createElement('a')
    link.href = imgSrc
    link.download = 'keyboard.svg'
    link.click()
  }

  const copyMarkdownImageClickable = async () => {
    const fullSvgUrl = `${window.location.origin}${imgSrc}`
    const fullLinkUrl = `${window.location.origin}/?keys=${encodeURIComponent(input)}`
    const markdown = `[![Keyboard keybindings](${fullSvgUrl})](${fullLinkUrl})`
    await navigator.clipboard.writeText(markdown)
    alert('Markdown image link copied!')
  }

  const copyMarkdownImage = async () => {
    const fullUrl = `${window.location.origin}${imgSrc}`
    const markdown = `![Keyboard keybindings](${fullUrl})`
    await navigator.clipboard.writeText(markdown)
    alert('Markdown image copied!')
  }

  return (
    <div style={styles.container}>
      <style>{css}</style>
      <h1>keymap-fetcher Demo</h1>
      <div style={styles.descriptionSection}>
        Enter key notation to visualize your keyboard layout (e.g., <code>h,j,k,l</code> or <code>&lt;C-a&gt;</code>)
        {' '}
        <a
          href="https://github.com/masaki39/keymap-fetcher"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.descriptionLink}
        >
          → More details
        </a>
      </div>

      <div style={styles.inputSection}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && generateKeymap(input)}
          placeholder="e.g., h,j,k,l or <C-a>,<D-s>"
          style={styles.input}
        />
        <button onClick={() => generateKeymap(input)} style={styles.button}>
          Generate
        </button>
      </div>

      <div style={styles.imageSection}>
        <img src={imgSrc} alt="Keyboard layout" style={styles.image} />
      </div>

      <div style={styles.presets}>
        <button style={styles.buttonSecondary} onClick={() => generateKeymap('h,j,k,l')}>
          vim hjkl
        </button>
        <button style={styles.buttonSecondary} onClick={() => generateKeymap('<C-h>,<C-j>,<C-k>,<C-l>')}>
          ctrl vim
        </button>
        <button style={styles.buttonSecondary} onClick={() => generateKeymap('shift-l,shift-r')}>
          shift l/r
        </button>
        <button style={styles.buttonSecondary} onClick={() => generateKeymap('esc')}>
          esc
        </button>
      </div>

      <div style={styles.copySection}>
        <input
          type="text"
          readOnly
          value={`${typeof window !== 'undefined' ? window.location.origin : ''}${imgSrc}`}
          style={styles.urlInput}
        />
        <button onClick={copyUrl} style={styles.button}>
          Copy URL
        </button>
      </div>

      <div style={styles.copySection}>
        <button onClick={downloadSVG} style={styles.button}>
          Download SVG
        </button>
        <button onClick={copyMarkdownImageClickable} style={styles.button}>
          Copy Markdown (clickable)
        </button>
        <button onClick={copyMarkdownImage} style={styles.button}>
          Copy Markdown (image)
        </button>
      </div>
    </div>
  )
}

const css = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: system-ui, -apple-system, sans-serif; background: #1e1e1e; color: #fff; }
`

const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    background: '#1e1e1e',
    color: '#fff',
  } as const,
  inputSection: {
    display: 'flex',
    gap: '10px',
    marginBottom: '30px',
  } as const,
  input: {
    flex: 1,
    padding: '10px 12px',
    background: '#2a2a2a',
    color: '#fff',
    border: '1px solid #4a4a4a',
    borderRadius: '6px',
    fontSize: '14px',
  } as const,
  button: {
    padding: '10px 20px',
    background: '#F97316',
    color: '#000',
    border: 'none',
    borderRadius: '6px',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '14px',
  } as const,
  buttonSecondary: {
    padding: '10px 20px',
    background: '#3a3a3a',
    color: '#fff',
    border: '1px solid #4a4a4a',
    borderRadius: '6px',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '14px',
  } as const,
  imageSection: {
    display: 'flex',
    justifyContent: 'center',
    margin: '40px 0',
    background: '#0a0a0a',
    padding: '20px',
    borderRadius: '8px',
    minHeight: '350px',
    alignItems: 'center',
    overflow: 'auto',
  } as const,
  image: {
    maxWidth: '100%',
    height: 'auto',
    width: '880px',
  } as const,
  presets: {
    display: 'flex',
    gap: '10px',
    margin: '30px 0',
    flexWrap: 'wrap',
  } as const,
  copySection: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    marginTop: '30px',
  } as const,
  urlInput: {
    flex: 1,
    padding: '10px 12px',
    background: '#2a2a2a',
    color: '#888',
    border: '1px solid #4a4a4a',
    borderRadius: '6px',
    fontSize: '12px',
  } as const,
  descriptionSection: {
    color: '#aaa',
    fontSize: '14px',
    marginBottom: '30px',
    marginTop: '12px',
  } as const,
  descriptionLink: {
    color: '#F97316',
    textDecoration: 'none',
  } as const,
}
