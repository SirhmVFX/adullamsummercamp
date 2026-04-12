"use client";
import { useState } from "react";
import Link from "next/link";

const courses = [
  "Animation",
  "Graphic Design (Canva)",
  "Video Editing (CapCut)",
  "Content Creating & Public Speaking",
  "Web Development",
  "Product Design",
  "Crochet",
  "First Aid",
  "French Language",
  "Portuguese Language",
];

const materialsByCourse: Record<string, string[]> = {
  "Animation": ["Phone or laptop", "Access to internet/data", "Writing materials (notebook & pen or note-taking app)"],
  "Graphic Design (Canva)": ["Canva app installed", "Phone or laptop"],
  "Video Editing (CapCut)": ["CapCut app installed", "Phone or laptop"],
  "Content Creating & Public Speaking": ["Phone or laptop", "Access to a social media platform (e.g., YouTube)"],
  "Web Development": ["Laptop (compulsory)", "Access to internet/data"],
  "Product Design": ["Laptop (Figma installed or accessible)", "Access to internet", "Pen and Jotter"],
  "Crochet": ["Crochet hook (pin)", "Wool (yarn)"],
  "First Aid": ["Clean cloth or towel", "Cotton wool", "Plasters", "A doll or teddy (for practice)"],
  "French Language": ["Phone or laptop"],
  "Portuguese Language": ["Phone or laptop"],
};

export default function RegisterPage() {
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Redirect to the Google Form
    window.open(
      "https://docs.google.com/forms/d/1pgVtU6jfS0JLvLUPy-jTLr1KZYYfQ0fQubKIQhBs4GQ/viewform",
      "_blank"
    );
    setSubmitted(true);
  }

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="bg-[#3D1F0D] text-white py-20 px-4 text-center">
        <p className="text-[#F97316] font-bold tracking-widest uppercase text-sm mb-3">Join the Camp</p>
        <h1 className="font-black text-4xl md:text-6xl">
          Register <span className="text-[#F97316]">Now</span>
        </h1>
        <p className="mt-4 text-orange-200 max-w-xl mx-auto text-lg">
          Secure your spot. Pick your skill. Start your journey from hiding to emerging.
        </p>
      </section>

      {/* General requirements banner */}
      <section className="bg-[#F97316] px-4 py-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-black text-white text-sm uppercase tracking-wider mb-3">📌 General Requirements (All Learners)</p>
          <div className="flex flex-wrap gap-3">
            {[
              "Ready to fully participate",
              "Writing materials (notebook & pen or note-taking app)",
              "Phone or laptop",
              "Access to internet/data",
            ].map((r) => (
              <span key={r} className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">{r}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-[#FFF8F0] py-16 px-4">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="bg-white rounded-3xl p-10 text-center shadow-sm border border-orange-100">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="font-black text-2xl text-[#3D1F0D]">You&apos;re on your way!</h2>
              <p className="mt-3 text-[#3D1F0D]/70">
                The registration form has opened in a new tab. Complete it to secure your spot.
              </p>
              <Link
                href="/"
                className="mt-6 inline-block bg-[#F97316] hover:bg-orange-500 text-white font-black px-8 py-3 rounded-full transition-colors"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-sm border border-orange-100 overflow-hidden">
              <div className="bg-[#3D1F0D] px-8 py-6">
                <h2 className="font-black text-white text-2xl">Registration Form</h2>
                <p className="text-orange-200 text-sm mt-1">Fill in your details to register for Adullam Summer Camp 2025</p>
              </div>

              <form onSubmit={handleSubmit} className="px-8 py-8 flex flex-col gap-6">
                {/* Full name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-black text-[#3D1F0D] uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="border border-orange-200 rounded-xl px-4 py-3 text-[#3D1F0D] bg-[#FFF8F0] focus:outline-none focus:ring-2 focus:ring-[#F97316] placeholder:text-[#3D1F0D]/30"
                  />
                </div>

                {/* Age */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="age" className="text-sm font-black text-[#3D1F0D] uppercase tracking-wider">
                    Age *
                  </label>
                  <input
                    id="age"
                    type="number"
                    required
                    min={6}
                    max={28}
                    placeholder="Must be between 5 and 20"
                    className="border border-orange-200 rounded-xl px-4 py-3 text-[#3D1F0D] bg-[#FFF8F0] focus:outline-none focus:ring-2 focus:ring-[#F97316] placeholder:text-[#3D1F0D]/30"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-sm font-black text-[#3D1F0D] uppercase tracking-wider">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+234 000 000 0000"
                    className="border border-orange-200 rounded-xl px-4 py-3 text-[#3D1F0D] bg-[#FFF8F0] focus:outline-none focus:ring-2 focus:ring-[#F97316] placeholder:text-[#3D1F0D]/30"
                  />
                </div>

                {/* Course selection */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="course" className="text-sm font-black text-[#3D1F0D] uppercase tracking-wider">
                    Choose Your Skill *
                  </label>
                  <select
                    id="course"
                    required
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                    className="border border-orange-200 rounded-xl px-4 py-3 text-[#3D1F0D] bg-[#FFF8F0] focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  >
                    <option value="" disabled>Select a course...</option>
                    {courses.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Dynamic materials checklist */}
                {selected && (
                  <div className="bg-[#FFF8F0] border border-orange-200 rounded-2xl p-5">
                    <p className="font-black text-[#3D1F0D] text-sm uppercase tracking-wider mb-3">
                      📋 Materials You&apos;ll Need for {selected}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {materialsByCourse[selected]?.map((m) => (
                        <li key={m} className="flex items-start gap-2 text-sm text-[#3D1F0D]/80">
                          <span className="text-[#F97316] font-bold mt-0.5">✓</span>
                          {m}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 text-xs text-[#3D1F0D]/50">Please ensure you have these ready before the camp starts.</p>
                  </div>
                )}

                {/* Device */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="device" className="text-sm font-black text-[#3D1F0D] uppercase tracking-wider">
                    Device Available *
                  </label>
                  <select
                    id="device"
                    required
                    className="border border-orange-200 rounded-xl px-4 py-3 text-[#3D1F0D] bg-[#FFF8F0] focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  >
                    <option value="" disabled>Select device...</option>
                    <option>Phone</option>
                    <option>Laptop</option>
                    <option>Both</option>
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="bg-[#F97316] hover:bg-orange-500 text-white font-black py-4 rounded-full text-lg transition-colors mt-2"
                >
                  Complete Registration →
                </button>

                <p className="text-center text-xs text-[#3D1F0D]/40">
                  Clicking the button will open the official Google Form to complete your registration.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      <footer className="bg-[#2a1508] text-orange-200 text-center py-6 text-sm">
        <p>© 2025 Adullam Summer Camp · <a href="https://instagram.com/adullamsummercamp" className="underline hover:text-white">@adullamsummercamp</a></p>
      </footer>
    </main>
  );
}
