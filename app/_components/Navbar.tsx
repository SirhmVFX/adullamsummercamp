"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#3D1F0D] text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-[#F97316] font-black text-lg tracking-tight">Adullam</span>
          <span className="text-xs text-orange-200 tracking-widest uppercase">Summer Camp</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-[#F97316] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#F97316] transition-colors">About</Link>
          <Link href="/mentors" className="hover:text-[#F97316] transition-colors">Mentors</Link>
          <Link href="/contact" className="hover:text-[#F97316] transition-colors">Contact</Link>
          <Link href="/register" className="bg-[#F97316] hover:bg-orange-500 text-white px-5 py-2 rounded-full font-bold transition-colors">
            Register Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#2a1508] px-4 pb-4 flex flex-col gap-3 text-sm font-medium">
          <Link href="/" onClick={() => setOpen(false)} className="py-2 border-b border-white/10 hover:text-[#F97316]">Home</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="py-2 border-b border-white/10 hover:text-[#F97316]">About</Link>
          <Link href="/mentors" onClick={() => setOpen(false)} className="py-2 border-b border-white/10 hover:text-[#F97316]">Mentors</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="py-2 border-b border-white/10 hover:text-[#F97316]">Contact</Link>
          <Link href="/register" onClick={() => setOpen(false)} className="mt-2 bg-[#F97316] text-white text-center py-2 rounded-full font-bold">
            Register Now
          </Link>
        </div>
      )}
    </nav>
  );
}
