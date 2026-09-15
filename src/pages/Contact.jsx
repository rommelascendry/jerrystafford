import { useEffect, useRef, useState } from 'react'
import SandStormEffect from '../components/SandStormEffect'

export default function Contact() {
  const [sectionVisible, setSectionVisible] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  })

  const WEB3FORMS_ACCESS_KEY = '33e659de-782b-4670-becc-e4bd732b6d64'

  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  // Lock body scroll while the modal is open (prevents mobile background scroll)
  useEffect(() => {
    if (showModal) {
      const previous = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = previous
      }
    }
  }, [showModal])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New Inquiry: ${formData.subject}`,
      Inquiry_Subject: formData.subject,
      name: formData.fullName,
      email: formData.email,
      message: formData.message,
      from_name: 'Jerry L. Stafford Contact Form',
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (data.success) {
        setShowModal(true)
      } else {
        setErrorMessage(data.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      console.error('Submission failed:', err)
      setErrorMessage('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeModal = () => {
    setShowModal(false)
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: '',
    })
  }

  const fieldClass =
    'font-hero-body input-no-zoom mt-2 w-full rounded-[3px] border border-[#cfbeaa] bg-[#fcf8f2]/90 px-3.5 py-3 text-[#341d13] placeholder-[#8e8175] shadow-sm outline-none transition-all duration-200 focus:border-[#9e6727] focus:ring-1 focus:ring-[#9e6727] sm:py-2.5'

  return (
    <main className="w-full overflow-x-hidden">
      {/* Editorial typography, modal animation + global responsive scale */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        .font-hero-heading {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        .font-hero-body {
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
        }
        .font-editorial-caps {
          font-family: 'Cinzel', 'Times New Roman', serif;
        }

        /* ---- Fluid type scale (shared across all pages) ---- */
        .fs-eyebrow  { font-size: clamp(9px, 2.3vw, 10.5px); }
        .fs-display  { font-size: clamp(30px, 7vw, 62px); }
        .fs-h1       { font-size: clamp(27px, 6vw, 44px); }
        .fs-h2       { font-size: clamp(22px, 5vw, 28px); }
        .fs-h3       { font-size: clamp(17px, 3.6vw, 20px); }
        .fs-body     { font-size: clamp(13.5px, 2.7vw, 14.5px); }
        .fs-small    { font-size: clamp(11.5px, 2.3vw, 12.5px); }
        .fs-label    { font-size: clamp(12px, 2.5vw, 12.5px); }
        .fs-btn      { font-size: clamp(10px, 2.2vw, 11px); }

        /* ---- 16px on mobile stops iOS from zooming when a field is focused ---- */
        .input-no-zoom { font-size: 16px; }
        @media (min-width: 640px) {
          .input-no-zoom { font-size: 13.5px; }
        }

        /* ---- background-attachment: fixed breaks on iOS/Android ---- */
        .bg-parallax { background-attachment: scroll; }
        @media (min-width: 1024px) and (hover: hover) and (pointer: fine) {
          .bg-parallax { background-attachment: fixed; }
        }

        /* ---- Comfortable tap targets ---- */
        .tap-target {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-modal-pop {
          animation: modalFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* ========================================
          SECTION 9 — CONTACT
      ======================================== */}
      <section
        ref={sectionRef}
        className="bg-parallax relative w-full overflow-hidden bg-[#f5ecdf] bg-cover bg-center py-14 sm:py-20 lg:min-h-[750px] lg:py-28"
        style={{ backgroundImage: "url('/images/herosection3.png')" }}
      >
        {/* Soft warmth tint overlay */}
        <div className="absolute inset-0 z-0 bg-[#f5ecdf]/65 backdrop-blur-[1px]" />
        <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#f5ecdf] to-transparent sm:h-16" />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#f5ecdf] to-transparent sm:h-16" />

        {/* Ambient atmospheric sandstorm */}
        <SandStormEffect />

        <div className="relative z-10 mx-auto w-full max-w-[860px] px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-1000 ease-out ${
              sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            {/* Header / Intro */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2.5 sm:gap-3">
                <div className="h-px w-8 bg-[#b69269] sm:w-12" />
                <span className="font-hero-body fs-eyebrow font-bold tracking-[0.2em] text-[#9b662a] sm:tracking-[0.24em]">
                  GET IN TOUCH
                </span>
                <div className="h-px w-8 bg-[#b69269] sm:w-12" />
              </div>

              <h1 className="font-hero-heading fs-h1 mt-2.5 font-semibold leading-[1.15] tracking-[-0.01em] text-[#341d13]">
                Contact Jerry L. Stafford
              </h1>

              <p className="font-hero-body fs-body mx-auto mt-4 max-w-[66ch] leading-[1.72] text-[#4d423b]">
                Have a question about Jerry L. Stafford&rsquo;s books, want to share your thoughts as a reader, or wish to contact him regarding an interview, media opportunity, literary inquiry, or other professional request?
              </p>
              <p className="font-hero-body fs-body mx-auto mt-1.5 max-w-[66ch] leading-[1.72] text-[#4d423b]">
                Complete the form below and your message will be forwarded to Jerry L. Stafford.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 sm:mt-10">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Full Name */}
                <div className="min-w-0">
                  <label htmlFor="fullName" className="font-hero-body fs-label block font-bold text-[#341d13]">
                    Full Name <span className="text-[#a03622]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    autoComplete="name"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={fieldClass}
                  />
                </div>

                {/* Email Address */}
                <div className="min-w-0">
                  <label htmlFor="email" className="font-hero-body fs-label block font-bold text-[#341d13]">
                    Your Email Address <span className="text-[#a03622]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    inputMode="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={fieldClass}
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mt-5 min-w-0">
                <label htmlFor="subject" className="font-hero-body fs-label block font-bold text-[#341d13]">
                  Subject <span className="text-[#a03622]">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className={fieldClass}
                >
                  <option value="" disabled>Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Reader Message">Reader Message</option>
                  <option value="Book Inquiry">Book Inquiry</option>
                  <option value="Interview & Media Request">Interview &amp; Media Request</option>
                  <option value="Literary or Publishing Inquiry">Literary or Publishing Inquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="mt-5 min-w-0">
                <label htmlFor="message" className="font-hero-body fs-label block font-bold text-[#341d13]">
                  Message <span className="text-[#a03622]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className={`${fieldClass} resize-y sm:min-h-[150px]`}
                />
              </div>

              {/* Action & Delivery Notice */}
              <div className="mt-6 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="font-hero-body fs-btn tap-target w-full flex-shrink-0 rounded-[3px] bg-[#9e6727] px-8 py-3.5 font-bold tracking-[0.14em] text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#83531b] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>

                <p className="font-hero-body fs-small text-center leading-snug text-[#5c5045] sm:text-left">
                  Your message will be sent to Jerry L. Stafford&rsquo;s email.
                  <br className="hidden sm:block" />{' '}
                  Thank you for reaching out.
                </p>
              </div>

              {/* Inline Error Notice */}
              {errorMessage && (
                <div className="mt-4 rounded border border-[#e2a99d] bg-[#fdf2f0] p-3 text-center text-sm font-semibold text-[#a03622]">
                  {errorMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ========================================
          CONFIRMATION MODAL
      ======================================== */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Message sent"
        >
          <div className="animate-modal-pop relative my-auto w-full max-w-[500px] max-h-[90vh] overflow-y-auto rounded-[4px] border border-[#cfbeaa] bg-[#fbf8f2] p-6 text-center shadow-2xl sm:p-8">
            {/* Top decorative accent motif */}
            <div className="flex items-center justify-center gap-2.5 sm:gap-3">
              <div className="h-px w-8 bg-[#b69269] sm:w-10" />
              <span className="font-hero-body fs-eyebrow font-bold tracking-[0.22em] text-[#9b662a]">
                MESSAGE SENT
              </span>
              <div className="h-px w-8 bg-[#b69269] sm:w-10" />
            </div>

            {/* Checkmark Icon */}
            <div className="mx-auto mt-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#bfa88f] bg-[#efe4d3] text-[#9e6727] shadow-sm sm:mt-6 sm:h-14 sm:w-14">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <h2 className="font-hero-heading fs-h2 mt-4 font-semibold leading-tight text-[#341d13]">
              Thank You for Reaching Out
            </h2>

            <p className="font-hero-body fs-body mt-3 leading-relaxed text-[#5c5045]">
              Your message has been delivered safely and will be forwarded privately to Jerry L. Stafford.
            </p>

            {/* Modal Close Action */}
            <div className="mt-6 flex justify-center sm:mt-7">
              <button
                type="button"
                onClick={closeModal}
                autoFocus
                className="font-hero-body fs-btn tap-target w-full rounded-[3px] bg-[#9e6727] px-8 py-3 font-bold tracking-[0.14em] text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#83531b] sm:w-auto"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}