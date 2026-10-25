import React, { useState, useEffect, useRef } from 'react'
import { siteConfig } from '../data/projects'

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Documentary & Explainer',
    message: '',
  })
  const [isCopied, setIsCopied] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const modalRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleClose = () => {
    setIsSubmitted(false)
    setIsCopied(false)
    onClose()
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const buildMailtoUrl = () => {
    const subject = encodeURIComponent(`[Project Inquiry] ${formData.projectType} — ${formData.name || 'Client'}`)
    const body = encodeURIComponent(
      `Hi Suraj,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nProject Details:\n${formData.message}\n\nLooking forward to collaborating!`
    )
    return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Open default mail client
    window.location.href = buildMailtoUrl()
  }

  const handleCopyInquiry = () => {
    const text = `To: ${siteConfig.email}\nSubject: [Project Inquiry] ${formData.projectType} — ${formData.name}\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2500)
    })
  }

  return (
    <div
      className="contact-modal-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-heading"
      ref={modalRef}
    >
      <div className="contact-modal-card">
        {/* Modal Header */}
        <div className="contact-modal-header">
          <div>
            <span className="contact-modal-sub">GET IN TOUCH</span>
            <h3 id="contact-modal-heading" className="contact-modal-title">
              Let’s Start a Project<span className="yellow-dot">.</span>
            </h3>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={handleClose}
            aria-label="Close contact modal"
          >
            ✕
          </button>
        </div>

        {/* Direct Email Pill */}
        <div className="contact-email-pill">
          <span className="email-label">Direct Email:</span>
          <a href={`mailto:${siteConfig.email}`} className="email-address-link">
            {siteConfig.email}
          </a>
        </div>

        {/* Inquiry Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="contact-name" className="form-label">
              Your Name *
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              className="form-input"
              placeholder="e.g. Alex Morgan"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-email" className="form-label">
              Your Email Address *
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              className="form-input"
              placeholder="alex@studio.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-type" className="form-label">
              Project Style
            </label>
            <select
              id="contact-type"
              name="projectType"
              className="form-select"
              value={formData.projectType}
              onChange={handleChange}
            >
              <option value="Documentary & Explainer">Documentary & Explainer</option>
              <option value="Stock Footage & Long-Form">Stock Footage & Long-Form</option>
              <option value="AI Visuals & Motion Graphics">AI Visuals & Motion Graphics</option>
              <option value="Commercial / Showreel Edit">Commercial / Showreel Edit</option>
              <option value="Other Creative Collaboration">Other Creative Collaboration</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="contact-message" className="form-label">
              Project Details & Timeline *
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows="4"
              className="form-textarea"
              placeholder="Tell me about your footage, target delivery date, references, and storytelling goals..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Action Row */}
          <div className="contact-modal-actions">
            <button type="submit" className="btn-primary btn-submit-inquiry">
              <span>Send via Email Client</span>
              <span className="arrow-icon">↗</span>
            </button>

            <button
              type="button"
              className="btn-outline btn-copy-inquiry"
              onClick={handleCopyInquiry}
            >
              <span>{isCopied ? '✓ Copied to Clipboard!' : 'Copy Inquiry'}</span>
            </button>
          </div>

          {isSubmitted && (
            <p className="contact-notice">
              Launching your email client. If it doesn't open automatically, write directly to{' '}
              <a href={`mailto:${siteConfig.email}`}>
                <strong>{siteConfig.email}</strong>
              </a>.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
