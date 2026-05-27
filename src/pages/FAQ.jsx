import React, { useState } from 'react'

export default function FAQ({ items }) {
  const [open, setOpen] = useState(null)
  return (
    <div className="pkg-faq">
      {items.map((item, i) => (
        <div key={i} className="pkg-faq-item">
          <button
            className={`pkg-faq-q${open === i ? ' open' : ''}`}
            onClick={() => setOpen(open === i ? null : i)}
          >
            {item.q}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {open === i && <div className="pkg-faq-a">{item.a}</div>}
        </div>
      ))}
    </div>
  )
}
