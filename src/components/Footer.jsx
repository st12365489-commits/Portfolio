import React from 'react'
import { siteConfig } from '../data/projects'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="site-footer" aria-label="Portfolio Footer">
      <div className="container footer-container">
        <div className="footer-top">
          {/* Brand Wordmark & Tagline */}
          <div className="footer-brand">
            <a href="#hero" className="footer-logo" onClick={scrollToTop}>
              <span className="logo-text">{siteConfig.name}</span>
              <span className="logo-dot">.</span>
            </a>
            <p className="footer-tagline">
              Visual Storyteller & Video Editor crafting high-retention narratives, documentaries, and cinematic edits.
            </p>
          </div>

          {/* Back to Top */}
          <div className="footer-back-to-top">
            <button
              type="button"
              className="btn-back-to-top"
              onClick={scrollToTop}
              aria-label="Scroll back to top of the page"
            >
              <span>Back to Top</span>
              <span className="arrow-up" aria-hidden="true">↑</span>
            </button>
          </div>
        </div>

        <div className="footer-divider" aria-hidden="true"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {CURRENT_YEAR} {siteConfig.name}. All rights reserved. Designed with editorial passion.
          </p>

          <div className="footer-socials" aria-label="Footer Social Links">
            {siteConfig.socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label={social.ariaLabel}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
