'use client'

import { useState } from 'react'
import { cleanHtml } from '../utils/cleanHtml'

export default function Home() {
  const [inputHtml, setInputHtml] = useState('')
  const [outputHtml, setOutputHtml] = useState('')
  const [attributesToRemove, setAttributesToRemove] = useState(
    'class title border cellpadding cellspacing style bordercolor width height valign align bgcolor face size color msimagelist lang'
  )
  const [tagsToRemove, setTagsToRemove] = useState(['', '', ''])

  const handleAddTagInput = () => {
    setTagsToRemove([...tagsToRemove, ''])
  }

  const handleTagChange = (index, value) => {
    const newTags = [...tagsToRemove]
    newTags[index] = value
    setTagsToRemove(newTags)
  }

  const handleRemoveTag = (index) => {
    const newTags = tagsToRemove.filter((_, i) => i !== index)
    setTagsToRemove(newTags)
  }

  const handleClean = () => {
    const cleaned = cleanHtml(inputHtml, attributesToRemove, tagsToRemove)
    setOutputHtml(cleaned)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(outputHtml).then(() => {
      alert('Copy completed')
    })
  }

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          CJHTML
        </div>
        <div className="actions">
          {/* Language selector or other actions could go here */}
        </div>
      </header>

      <main className="main-grid">
        <aside className="sidebar glass-panel p-6">
          <div className="editor-col">
            <h3>Settings</h3>

            <div className="setting-group">
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Remove Attributes
              </label>
              <textarea
                className="glass-input"
                rows="6"
                placeholder="Attributes to remove..."
                value={attributesToRemove}
                onChange={(e) => setAttributesToRemove(e.target.value)}
              />
            </div>

            <div className="setting-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Unwrap Tags
                </label>
                <button
                  className="btn btn-secondary btn-icon"
                  onClick={handleAddTagInput}
                  title="Add Tag"
                  style={{ width: '24px', height: '24px', padding: 0 }}
                >
                  +
                </button>
              </div>
              <div className="tag-list">
                {tagsToRemove.map((tag, index) => (
                  <div key={index} className="tag-item">
                    <input
                      type="text"
                      className="glass-input"
                      style={{ padding: '8px' }}
                      placeholder="Tag"
                      value={tag}
                      onChange={(e) => handleTagChange(index, e.target.value)}
                    />
                    <button
                      className="btn btn-secondary btn-icon"
                      onClick={() => handleRemoveTag(index)}
                      title="Remove Tag"
                      style={{ width: '36px', height: '36px', padding: 0, marginLeft: '4px', flexShrink: 0 }}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <section className="editor-area">
          <div className="editor-col glass-panel" style={{ padding: '1.5rem' }}>
            <div className="editor-header">
              <h3>Input HTML</h3>
              <button className="btn btn-primary" onClick={handleClean}>
                Start Cleaning
              </button>
            </div>
            <div className="textarea-wrapper">
              <textarea
                className="glass-input code-editor"
                placeholder="Paste your HTML here..."
                value={inputHtml}
                onChange={(e) => setInputHtml(e.target.value)}
              />
            </div>
          </div>

          <div className="editor-col glass-panel" style={{ padding: '1.5rem' }}>
            <div className="editor-header">
              <h3>Result</h3>
              <button
                className="btn btn-secondary"
                onClick={handleCopy}
                disabled={!outputHtml}
              >
                Copy Result
              </button>
            </div>
            <div className="textarea-wrapper">
              <textarea
                className="glass-input code-editor"
                placeholder="Cleaned HTML will appear here..."
                value={outputHtml}
                readOnly
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
