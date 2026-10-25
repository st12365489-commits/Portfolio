import React from 'react'
import { siteConfig } from '../data/projects'

export default function Hero({ onWatchShowreel }) {
  const scrollToProjects = (e) => {
    e.preventDefault()
    const targetElement = document.getElementById('projects')
    if (targetElement) {
      const navHeight = 80
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="hero" className="hero-section" aria-label="Hero Introduction">
      <div className="container hero-container">
        {/* Left Editorial Copy */}
        <div className="hero-content">
          {/* Eyebrow Label */}
          <div className="hero-eyebrow">
            <span>{siteConfig.role}</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline">
            GOOD
            <br />
            STORIES
            <br />
            DESERVE
            <br />
            <span className="headline-highlight">
              GREAT EDITING.
              <svg
                className="headline-underline"
                viewBox="0 0 320 20"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M 4 14 C 70 8, 160 16, 316 10"
                  stroke="#F7B62D"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          {/* Supporting Statement */}
          <p className="hero-copy">{siteConfig.supportingCopy}</p>

          {/* Call to Actions */}
          <div className="hero-actions">
            {siteConfig.showreel ? (
              <button
                type="button"
                className="btn-primary btn-showreel"
                onClick={onWatchShowreel}
                aria-label="Watch Showreel modal"
              >
                <span className="play-triangle" aria-hidden="true">▶</span>
                <span>Watch Showreel</span>
                <span className="chevron-right" aria-hidden="true">›</span>
              </button>
            ) : null}

            <a
              href="#projects"
              className="btn-outline btn-view-work"
              onClick={scrollToProjects}
            >
              View My Work
            </a>
          </div>

          {/* Social Links Bar */}
          <div className="hero-socials" aria-label="Social Profiles">
            {siteConfig.socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
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

        {/* Right Editorial Portrait Composition */}
        <div className="hero-portrait-wrap">
          <div className="portrait-composition">
            <img
              src="/images/profile.svg"
              alt="Suraj Thakur - Video Editor & Storyteller portrait"
              className="editor-portrait-img"
              width="560"
              height="640"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
