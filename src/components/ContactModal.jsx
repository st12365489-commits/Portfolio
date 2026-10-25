import React from 'react'
import { siteConfig } from '../data/projects'

export default function ContactSection({ onOpenContact }) {
  return (
    <div id="contact" className="contact-block" aria-label="Contact Section">
      {/* Hand-drawn yellow accent strokes above heading */}
      <div className="contact-accents" aria-hidden="true">
        <svg viewBox="0 0 60 20" width="50" height="18" fill="none">
          <path d="M 8 16 L 36 4" stroke="#F7B62D" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M 22 18 L 48 6" stroke="#F7B62D" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      <h3 className="contact-heading">
        Let’s
        <br />
        Work Together<span className="yellow-dot">.</span>
      </h3>

      <p className="contact-copy">
        Have a project in mind or just want to say hello? I’d love to hear from you.
      </p>

      {/* Primary CTA */}
      <div className="contact-action-wrap">
        <button
          type="button"
          className="btn-primary btn-send-message"
          onClick={onOpenContact}
          aria-label="Send a message to Suraj Thakur"
        >
          <span>Send a Message</span>
          <span className="arrow-icon">↗</span>
        </button>
      </div>

      {/* Social Links Row */}
      <div className="contact-socials" aria-label="Social Links">
        {siteConfig.socialLinks.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-btn"
            aria-label={social.ariaLabel}
            title={social.name}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.4 9.74v-8.37H5.06v8.37h2.8z" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  )
}
