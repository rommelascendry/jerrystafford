import { useEffect, useRef, useState } from 'react'
import SandStormEffect from '../components/SandStormEffect'

export default function Contact() {
  const [sectionVisible, setSectionVisible] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  })

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowModal(true)
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

  return (
    <main>
      {/* Editorial typography import & modal animation */}
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
      `}</style>

      {/* ========================================
          SECTION 9 — CONTACT
      ======================================== */}
      <section
        ref={sectionRef}
        className="relative min-h-[750px] overflow-hidden bg-[#f5ecdf] bg-fixed bg-cover bg-center py-20 lg:py-28"
        style={{ backgroundImage: "url('/images/herosection3.png')" }}
      >
        {/* Parallax soft warmth tint overlay */}
        <div className="absolute inset-0 z-0 bg-[#f5ecdf]/65 backdrop-blur-[1px]" />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#f5ecdf] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#f5ecdf] to-transparent" />

        {/* Ambient atmospheric sandstorm */}
        <SandStormEffect />

        <div className="relative z-10 mx-auto max-w-[860px] px-6 lg:px-8">
          <div
            className={`transition-all duration-1000 ease-out ${
              sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            {/* Header / Intro */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-[#b69269]" />
                <span className="font-hero-body text-[10.5px] font-bold tracking-[0.24em] text-[#9b662a]">
                  GET IN TOUCH
                </span>
                <div className="h-px w-12 bg-[#b69269]" />
              </div>

              <h1 className="font-hero-heading mt-2.5 text-[34px] font-semibold tracking-[-0.01em] text-[#341d13] sm:text-[44px]">
                Contact Jerry L. Stafford
              </h1>

              <p className="font-hero-body mx-auto mt-4 max-w-[690px] text-[14px] leading-[1.72] text-[#4d423b]">
                Have a question about Jerry L. Stafford’s books, want to share your thoughts as a reader, or wish to contact him regarding an interview, media opportunity, literary inquiry, or other professional request?
              </p>
              <p className="font-hero-body mx-auto mt-1.5 max-w-[690px] text-[14px] leading-[1.72] text-[#4d423b]">
                Complete the form below and your message will be forwarded to Jerry L. Stafford.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-10">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="font-hero-body block text-[12.5px] font-bold text-[#341d13]">
                    Full Name <span className="text-[#a03622]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="font-hero-body mt-2 w-full rounded-[3px] border border-[#cfbeaa] bg-[#fcf8f2]/90 px-3.5 py-2.5 text-[13.5px] text-[#341d13] placeholder-[#8e8175] shadow-sm outline-none transition-all duration-200 focus:border-[#9e6727] focus:ring-1 focus:ring-[#9e6727]"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="font-hero-body block text-[12.5px] font-bold text-[#341d13]">
                    Your Email Address <span className="text-[#a03622]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="font-hero-body mt-2 w-full rounded-[3px] border border-[#cfbeaa] bg-[#fcf8f2]/90 px-3.5 py-2.5 text-[13.5px] text-[#341d13] placeholder-[#8e8175] shadow-sm outline-none transition-all duration-200 focus:border-[#9e6727] focus:ring-1 focus:ring-[#9e6727]"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mt-5">
                <label htmlFor="subject" className="font-hero-body block text-[12.5px] font-bold text-[#341d13]">
                  Subject <span className="text-[#a03622]">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="font-hero-body mt-2 w-full rounded-[3px] border border-[#cfbeaa] bg-[#fcf8f2]/90 px-3.5 py-2.5 text-[13.5px] text-[#341d13] shadow-sm outline-none transition-all duration-200 focus:border-[#9e6727] focus:ring-1 focus:ring-[#9e6727]"
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
              <div className="mt-5">
                <label htmlFor="message" className="font-hero-body block text-[12.5px] font-bold text-[#341d13]">
                  Message <span className="text-[#a03622]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="font-hero-body mt-2 w-full resize-y rounded-[3px] border border-[#cfbeaa] bg-[#fcf8f2]/90 px-3.5 py-2.5 text-[13.5px] text-[#341d13] placeholder-[#8e8175] shadow-sm outline-none transition-all duration-200 focus:border-[#9e6727] focus:ring-1 focus:ring-[#9e6727]"
                />
              </div>

              {/* Action & Delivery Notice */}
              <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="font-hero-body rounded-[3px] bg-[#9e6727] px-8 py-3.5 text-[11px] font-bold tracking-[0.14em] text-white shadow-sm transition-all duration-200 hover:bg-[#83531b] hover:-translate-y-0.5"
                >
                  SEND MESSAGE
                </button>

                <p className="font-hero-body text-[12.5px] leading-snug text-[#5c5045]">
                  Your message will be sent to Jerry L. Stafford’s email.
                  <br />
                  Thank you for reaching out.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ========================================
          CONFIRMATION MODAL
      ======================================== */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="animate-modal-pop relative w-full max-w-[500px] overflow-hidden rounded-[4px] border border-[#cfbeaa] bg-[#fbf8f2] p-8 text-center shadow-2xl">
            {/* Top decorative accent motif */}
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-[#b69269]" />
              <span className="font-hero-body text-[10px] font-bold tracking-[0.24em] text-[#9b662a]">
                MESSAGE SENT
              </span>
              <div className="h-px w-10 bg-[#b69269]" />
            </div>

            {/* Checkmark Icon */}
            <div className="mx-auto mt-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#bfa88f] bg-[#efe4d3] text-[#9e6727] shadow-sm">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <h2 className="font-hero-heading mt-4 text-[28px] font-semibold text-[#341d13]">
              Thank You for Reaching Out
            </h2>

            <p className="font-hero-body mt-3 text-[14px] leading-relaxed text-[#5c5045]">
              Your message has been delivered safely and will be forwarded privately to Jerry L. Stafford.
            </p>

            {/* Modal Close Action */}
            <div className="mt-7 flex justify-center">
              <button
                type="button"
                onClick={closeModal}
                className="font-hero-body rounded-[3px] bg-[#9e6727] px-8 py-3 text-[11px] font-bold tracking-[0.14em] text-white shadow-sm transition-all duration-200 hover:bg-[#83531b] hover:-translate-y-0.5"
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