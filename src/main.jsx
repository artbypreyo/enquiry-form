import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

const websiteUrl = 'https://artbypreyo.github.io/enquiry-form/'
const whatsappUrl = `https://wa.me/918918665336?text=${encodeURIComponent('Hi Art By Preyo, I’m interested in your artwork. Could you please share more details?')}`

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/artbypreyo/' },
  { label: 'Facebook', href: 'https://www.facebook.com/artbypreyo' },
  { label: 'YouTube', href: 'https://www.youtube.com/@artbypreyo' },
  { label: 'WhatsApp', href: whatsappUrl },
]

function SocialIcon({ label }) {
  if (label === 'Instagram') {
    return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.7" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
  }
  if (label === 'Facebook') {
    return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.23.2 2.23.2v2.46H15.2c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" /></svg>
  }
  if (label === 'YouTube') {
    return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.58 7.19a2.75 2.75 0 0 0-1.94-1.95C17.93 4.78 12 4.78 12 4.78s-5.93 0-7.64.46a2.75 2.75 0 0 0-1.94 1.95C1.96 8.9 1.96 12 1.96 12s0 3.1.46 4.81a2.75 2.75 0 0 0 1.94 1.95c1.71.46 7.64.46 7.64.46s5.93 0 7.64-.46a2.75 2.75 0 0 0 1.94-1.95c.46-1.71.46-4.81.46-4.81s0-3.1-.46-4.81ZM10 15.23V8.77L15.73 12 10 15.23Z" /></svg>
  }
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
}

function App() {
  const formRef = useRef(null)
  const [phone, setPhone] = useState('')
  const sent = new URLSearchParams(window.location.search).has('sent')

  function openWhatsApp() {
    const form = formRef.current
    if (!form?.reportValidity()) return

    const fields = new FormData(form)
    const lines = [
      'Hi Art By Preyo, I would like to make an enquiry.',
      `Name: ${fields.get('name')}`,
      `Phone: ${fields.get('phone')}`,
      fields.get('email') ? `Email: ${fields.get('email')}` : '',
      `Interested in: ${fields.get('interest')}`,
      `Message: ${fields.get('message')}`,
    ].filter(Boolean)

    window.location.href = `https://wa.me/918918665336?text=${encodeURIComponent(lines.join('\n'))}`
  }

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <div className="page-wrap">
        <header className="site-header">
          <a className="brand" href={window.location.pathname} aria-label="Art By Preyo home">
            <img src={`${import.meta.env.BASE_URL}art-by-preyo-circle.png`} alt="" width="64" height="64" />
            <span><strong>Art <em>by</em> Preyo</strong><small>ART & CRAFT</small></span>
          </a>
          <a className="header-link" href="https://artbypreyo.github.io/social-links/">Explore our links</a>
        </header>

        <main className="main-card">
          {sent ? (
            <section className="success-panel" aria-labelledby="success-title">
              <div className="success-mark" aria-hidden="true">✓</div>
              <p className="eyebrow">ENQUIRY SENT</p>
              <h1 id="success-title">Thank you for reaching out<span className="period">.</span></h1>
              <p>Your message is on its way to Art By Preyo. We’ll get back to you using the contact details you shared.</p>
              <a className="primary-link" href={websiteUrl}>Return to website</a>
            </section>
          ) : (
            <div className="content-grid">
              <section className="intro-panel" aria-labelledby="page-title">
                <div className="paint-stroke" aria-hidden="true" />
                <p className="eyebrow">LET’S CREATE SOMETHING SPECIAL</p>
                <h1 id="page-title">Have something <em>beautiful</em> in mind<span className="period">?</span></h1>
                <p className="intro">Tell us what you are looking for. Whether it is a piece you have seen or an idea of your own, we would love to hear about it.</p>
                <div className="contact-note"><span className="note-icon" aria-hidden="true">✳</span><span>Share a few details and we’ll be in touch.</span></div>
                <div className="decorative-dots" aria-hidden="true"><i /><i /><i /><i /><i /></div>
              </section>

              <section className="form-panel" aria-labelledby="form-title">
                <p className="section-label">START A CONVERSATION</p>
                <h2 id="form-title">Send an enquiry</h2>
                <p className="form-intro">We’ll reply using the contact details you provide.</p>
                <form ref={formRef} action="https://formsubmit.co/kundupreyasi1997@gmail.com" method="POST">
                  <input type="hidden" name="_subject" value="New Art By Preyo enquiry" />
                  <input type="hidden" name="_next" value={websiteUrl} />
                  <input type="hidden" name="_template" value="table" />
                  <input type="text" name="_honey" className="honeypot" tabIndex="-1" autoComplete="off" aria-hidden="true" />

                  <div className="field-row">
                    <label>Your name <span aria-hidden="true">*</span><input name="name" type="text" autoComplete="name" placeholder="Your name" required maxLength="100" /></label>
                    <label>Phone number <span aria-hidden="true">*</span><input name="phone" type="tel" autoComplete="tel-national" inputMode="numeric" placeholder="10-digit mobile number" value={phone} onChange={(event) => setPhone(event.target.value.replace(/\D/g, '').slice(0, 10))} pattern="[0-9]{10}" title="Enter a 10-digit mobile number" required maxLength="10" /></label>
                  </div>
                  <label>Email address <small>(optional)</small><input name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength="200" /></label>
                  <label>What are you interested in? <span aria-hidden="true">*</span>
                    <select name="interest" defaultValue="" required>
                      <option value="" disabled>Select an option</option>
                      <option>Artwork</option>
                      <option>Custom creation</option>
                      <option>General enquiry</option>
                    </select>
                  </label>
                  <label>Tell us a little more <span aria-hidden="true">*</span><textarea name="message" rows="4" placeholder="Your idea, occasion, questions, or anything helpful…" required maxLength="3000" /></label>
                  <button className="submit-button" type="submit">Send enquiry by email</button>
                  <button className="whatsapp-button" type="button" onClick={openWhatsApp}><svg className="wa-badge" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg> Continue on WhatsApp</button>
                  <p className="form-disclaimer">WhatsApp opens a prepared message for you to review and send.</p>
                </form>
              </section>
            </div>
          )}
        </main>

        <aside className="discover-card" aria-label="More from Art By Preyo">
          <span><small>MORE TO EXPLORE</small><strong>Find all our creative corners in one place.</strong></span>
          <a href="https://artbypreyo.github.io/social-links/">Visit our social links <span aria-hidden="true">↗</span></a>
        </aside>

        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Art By Preyo</p>
          <nav aria-label="Social media">
            {socialLinks.map(({ label, href }) => <a className={label.toLowerCase()} key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}><SocialIcon label={label} /></a>)}
          </nav>
        </footer>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
