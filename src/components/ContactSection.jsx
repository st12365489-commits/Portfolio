
import React from 'react'
import { siteConfig } from '../data/projects'

export default function ContactSection({ onOpenContact }) {
  const socialLinks = siteConfig.socialLinks || []

  const linkedin = socialLinks.find((social) =>
    /linkedin/i.test(`${social.name} ${social.url}`)
  )

  const instagram = socialLinks.find((social) =>
    /instagram/i.test(`${social.name} ${social.url}`)
  )

  const contacts = [
    {
      id: 'email',
      label: 'Email',
      value: 'st12365489@gmail.com',
      href: 'mailto:st12365489@gmail.com',
      icon: '✉',
    },
    ...(linkedin
      ? [{
        id: 'linkedin',
        label: 'LinkedIn',
        value: linkedin.url.replace(/^https?:\/\//, '').replace(/\/$/, ''),
        href: linkedin.url,
        icon: 'in',
      }]
      : []),
    {
      id: 'phone',
      label: 'Phone',
      value: '+91 7080933710',
      href: 'tel:+917080933710',
      icon: '☎',
    },
    ...(instagram
      ? [{
        id: 'instagram',
        label: 'Instagram',
        value: instagram.url.replace(/^https?:\/\//, '').replace(/\/$/, ''),
        href: instagram.url,
        icon: '◎',
      }]
      : []),
  ]

  return (
    <section
      id="contact"
      className="contact-block"
      aria-label="Contact Section"
    >
      <div className="contact-intro">
        <div className="contact-accents" aria-hidden="true">
          <svg viewBox="0 0 60 20" width="50" height="18" fill="none">
            <path
              d="M 8 16 L 36 4"
              stroke="#F7B62D"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M 22 18 L 48 6"
              stroke="#F7B62D"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h3 className="contact-heading">
          Let’s
          <br />
          Work Together<span className="yellow-dot">.</span>
        </h3>

        <p className="contact-copy">
          Have a project in mind or just want to say hello?
          I’d love to hear from you.
        </p>
      </div>

      {/* Separate contact information section */}
      <div className="contact-information">
        <div className="contact-information-heading">
          <span className="contact-heading-line" />
          <h4>GET IN TOUCH</h4>
        </div>

        <div className="contact-information-grid">
          {contacts.map((contact) => (
            <a
              key={contact.id}
              href={contact.href}
              className="contact-information-card"
              aria-label={`${contact.label}: ${contact.value}`}
              target={
                contact.id === 'linkedin' ||
                  contact.id === 'instagram'
                  ? '_blank'
                  : undefined
              }
              rel={
                contact.id === 'linkedin' ||
                  contact.id === 'instagram'
                  ? 'noopener noreferrer'
                  : undefined
              }
            >
              <span className="contact-information-icon">
                {contact.icon}
              </span>
              <span className="contact-information-text">
                <span className="contact-information-label">
                  {contact.label}
                </span>
                <span className="contact-information-value">
                  {contact.value}
                </span>
              </span>
              <span className="contact-information-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Final CTA at the end */}
      <div className="contact-final-cta">
        <p>Have a project in mind?</p>

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
    </section>
  )
}
