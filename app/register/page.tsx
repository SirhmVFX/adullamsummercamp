"use client";
import { useState } from "react";
import Link from "next/link";
import PhotoSlot from "../_components/PhotoSlot";
import VideoSlot from "../_components/VideoSlot";
import QuoteCard from "../_components/QuoteCard";
import { awardPhotos, videos, builderQuotes, parentQuotes } from "../_data/cohort";

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
    window.open(
      "https://forms.gle/VFGW2s2V162jTkTc7",
      "_blank"
    );
    setSubmitted(true);
  }

  return (
    <main className="flex flex-col">
      <section className="bg-[#3D1F0D] text-white py-20 px-4 text-center">
        <p className="text-[#F97316] font-bold tracking-widest uppercase text-sm mb-3">Cohort 1 is complete</p>
        <h1 className="font-black text-4xl md:text-6xl">
          Join the <span className="text-[#F97316]">Next Cohort</span>
        </h1>
        <p className="mt-4 text-orange-200 max-w-xl mx-auto text-lg">
          Our first Builders finished live classes, projects, leadership, and Award Day. Register your child to become a Builder next.
        </p>
      </section>

      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 items-center">
          <VideoSlot {...videos[3]} />
          <div>
            <p className="text-[#F97316] font-bold uppercase tracking-widest text-sm mb-2">What the last cohort received</p>
            <h2 className="font-black text-2xl text-[#3D1F0D]">The same journey awaits.</h2>
            <ul className="mt-4 flex flex-col gap-2 text-[#3D1F0D]/70 text-sm">
              <li>✓ Live classes, twice a week</li>
              <li>✓ Training sessions and hands-on projects</li>
              <li>✓ Live interaction sessions with mentors</li>
              <li>✓ 2-day Leadership Masterclass</li>
              <li>✓ Certificate and Award Day — plus special awards</li>
            </ul>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {awardPhotos.slice(0, 2).map((p) => (
                <PhotoSlot key={p.src} {...p} />
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-4 mt-8">
          <QuoteCard
            quote={builderQuotes[2].quote}
            name={builderQuotes[2].name}
            meta={`${builderQuotes[2].age} · ${builderQuotes[2].track}`}
            photo={builderQuotes[2].photo}
          />
          <QuoteCard
            quote={parentQuotes[2].quote}
            name={parentQuotes[2].name}
            meta={parentQuotes[2].relation}
            photo={parentQuotes[2].photo}
            badge="Parent"
          />
        </div>
      </section>

      <section className="bg-[#F97316] px-4 py-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-black text-white text-sm uppercase tracking-wider mb-3">📌 General Requirements (All Builders)</p>
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

      <section className="bg-[#FFF8F0] py-16 px-4">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="bg-white rounded-3xl p-10 text-center shadow-sm border border-orange-100">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="font-black text-2xl text-[#3D1F0D]">You&apos;re on your way!</h2>
              <p className="mt-3 text-[#3D1F0D]/70">
                The registration form has opened in a new tab. Complete it to secure your Builder&apos;s spot in the next cohort.
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
                <p className="text-orange-200 text-sm mt-1">Register a Builder for the next Adullam Summer Camp cohort</p>
              </div>

              <form onSubmit={handleSubmit} className="px-8 py-8 flex flex-col gap-6">
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
                    placeholder="Must be between 6 and 20"
                    className="border border-orange-200 rounded-xl px-4 py-3 text-[#3D1F0D] bg-[#FFF8F0] focus:outline-none focus:ring-2 focus:ring-[#F97316] placeholder:text-[#3D1F0D]/30"
                  />
                </div>

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
    </main>
  );
}
