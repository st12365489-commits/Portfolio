import React from 'react'
import { siteConfig } from '../data/projects'

export default function AboutMe({ onMoreAboutMe }) {
  return (
    <div id="about" className="about-me-block">
      <div className="about-header">
        <h2 className="about-title">
          ABOUT ME<span className="yellow-dot">.</span>
        </h2>
      </div>

      <div className="about-body">
        <p className="about-bio">{siteConfig.bio}</p>

        <button
          type="button"
          className="btn-outline btn-more-about"
          onClick={onMoreAboutMe}
          aria-label="View more background about Suraj Thakur"
        >
          <span>More About Me</span>
          <span className="arrow-icon">↗</span>
        </button>

        {/* Miniature Portrait Artwork matching reference */}
        <div className="about-portrait-wrap">
          <img
            src="/images/profile.svg"
            alt="Suraj Thakur creative illustration"
            className="about-portrait-img"
            width="220"
            height="240"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
