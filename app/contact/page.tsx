"use client";
import { useState } from "react";

const faqs = [
  { q: "What age group is the camp for?", a: "Adullam Summer Camp is open to children and young adults between ages 5 and 20." },
  { q: "Is the camp free?", a: "Registration is free. Some courses may require you to get specific materials (e.g., yarn for Crochet, CapCut for Video Editing)." },
  { q: "Is it online or physical?", a: "100% online. All you need is a phone or laptop and access to the internet." },
  { q: "When does the camp run?", a: "July–August 2026, 2 days per week, for 2 months (16 sessions total)." },
  { q: "Can I register for more than one course?", a: "No — the camp is designed for deep mastery. Each learner picks one skill and commits fully to it." },
  { q: "How do I register?", a: "Head to the Register page and fill out the form. It will redirect you to the official Google Form to complete your registration." },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="bg-[#3D1F0D] text-white py-20 px-4 text-center">
        <p className="text-[#F97316] font-bold tracking-widest uppercase text-sm mb-3">Get in Touch</p>
        <h1 className="font-black text-4xl md:text-6xl">
          Contact <span className="text-[#F97316]">Us</span>
        </h1>
        <p className="mt-4 text-orange-200 max-w-xl mx-auto text-lg">
          Have a question? We&apos;re happy to help. Reach out via any of the channels below.
        </p>
      </section>

      {/* Contact cards + form */}
      <section className="bg-[#FFF8F0] py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Left — contact info */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[#F97316] font-bold uppercase tracking-widest text-sm mb-4">Reach Us</p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: "📸",
                    label: "Instagram",
                    value: "@adullamsummercamp",
                    href: "https://instagram.com/adullamsummercamp",
                  },
                  {
                    icon: "📋",
                    label: "Registration Form",
                    value: "Google Form",
                    href: "https://docs.google.com/forms/d/1pgVtU6jfS0JLvLUPy-jTLr1KZYYfQ0fQubKIQhBs4GQ/viewform",
                  },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-orange-100 rounded-2xl p-5 flex items-center gap-4 hover:border-[#F97316] transition-colors group"
                  >
                    <span className="text-3xl">{c.icon}</span>
                    <div>
                      <p className="text-xs font-black text-[#3D1F0D]/50 uppercase tracking-wider">{c.label}</p>
                      <p className="font-bold text-[#3D1F0D] group-hover:text-[#F97316] transition-colors">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social handles */}
            <div className="bg-[#3D1F0D] rounded-2xl p-6 text-white">
              <p className="font-black text-sm uppercase tracking-wider text-orange-200 mb-3">Follow the Camp</p>
              <p className="text-2xl font-black text-[#F97316]">@adullamsummercamp</p>
              <p className="text-orange-300 text-sm mt-1">Stay updated on Instagram, Facebook & Twitter</p>
            </div>
          </div>

          {/* Right — message form */}
          <div className="bg-white rounded-3xl border border-orange-100 shadow-sm overflow-hidden">
            <div className="bg-[#3D1F0D] px-6 py-5">
              <h2 className="font-black text-white text-xl">Send a Message</h2>
              <p className="text-orange-200 text-sm mt-1">We&apos;ll get back to you as soon as possible</p>
            </div>

            {sent ? (
              <div className="px-6 py-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-black text-[#3D1F0D] text-xl">Message Received!</h3>
                <p className="text-[#3D1F0D]/60 mt-2 text-sm">Thanks for reaching out. We&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-6 py-6 flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-xs font-black text-[#3D1F0D] uppercase tracking-wider">Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="border border-orange-200 rounded-xl px-4 py-3 text-[#3D1F0D] bg-[#FFF8F0] focus:outline-none focus:ring-2 focus:ring-[#F97316] placeholder:text-[#3D1F0D]/30 text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="text-xs font-black text-[#3D1F0D] uppercase tracking-wider">Email *</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="border border-orange-200 rounded-xl px-4 py-3 text-[#3D1F0D] bg-[#FFF8F0] focus:outline-none focus:ring-2 focus:ring-[#F97316] placeholder:text-[#3D1F0D]/30 text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-black text-[#3D1F0D] uppercase tracking-wider">Subject *</label>
                  <select
                    id="contact-subject"
                    required
                    className="border border-orange-200 rounded-xl px-4 py-3 text-[#3D1F0D] bg-[#FFF8F0] focus:outline-none focus:ring-2 focus:ring-[#F97316] text-sm"
                  >
                    <option value="" disabled>Select a topic...</option>
                    <option>Registration Help</option>
                    <option>Course Information</option>
                    <option>Technical Issues</option>
                    <option>Partnership / Sponsorship</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="text-xs font-black text-[#3D1F0D] uppercase tracking-wider">Message *</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Write your message here..."
                    className="border border-orange-200 rounded-xl px-4 py-3 text-[#3D1F0D] bg-[#FFF8F0] focus:outline-none focus:ring-2 focus:ring-[#F97316] placeholder:text-[#3D1F0D]/30 text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#F97316] hover:bg-orange-500 text-white font-black py-3 rounded-full transition-colors"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#F97316] font-bold uppercase tracking-widest text-sm text-center mb-2">Got Questions?</p>
          <h2 className="font-black text-3xl md:text-4xl text-[#3D1F0D] text-center mb-10">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-orange-100 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 bg-[#FFF8F0] hover:bg-orange-50 transition-colors"
                >
                  <span className="font-bold text-[#3D1F0D] text-sm">{faq.q}</span>
                  <span className={`text-[#F97316] font-black text-lg shrink-0 transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 py-4 bg-white text-sm text-[#3D1F0D]/70 leading-relaxed border-t border-orange-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#2a1508] text-orange-200 text-center py-6 text-sm">
        <p>© 2025 Adullam Summer Camp · <a href="https://instagram.com/adullamsummercamp" className="underline hover:text-white">@adullamsummercamp</a></p>
      </footer>
    </main>
  );
}
