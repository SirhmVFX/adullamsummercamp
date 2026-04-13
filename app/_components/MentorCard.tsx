"use client";
import { useState } from "react";
import Image from "next/image";

interface MentorCardProps {
  name: string;
  course: string;
  emoji: string;
  image: string;
  bio: string;
  requirements: string[];
}

export default function MentorCard({ name, course, emoji, image, bio, requirements }: MentorCardProps) {
  const [expanded, setExpanded] = useState(false);
  const preview = bio.slice(0, 80) + "…";

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-orange-100 flex flex-col">
      {/* Header */}
      <div className="bg-[#3D1F0D] px-6 py-8 flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full bg-[#F97316]/20 flex items-center justify-center text-4xl mb-4 overflow-hidden">
          <Image src={image} alt={name} width={128} height={128} className="rounded-full object-cover w-full h-full" />
        </div>
        <h2 className="font-black text-white text-xl">{name}</h2>
        <span className="mt-1 text-[#F97316] text-sm font-bold">{course}</span>
      </div>

      {/* Body */}
      <div className="px-6 py-5 flex flex-col gap-4 flex-1">
        <p className="text-[#3D1F0D]/70 text-sm leading-relaxed">
          {expanded ? bio : preview}
          {" "}
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[#F97316] font-bold hover:underline text-sm whitespace-nowrap"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        </p>

        <div>
          <p className="text-xs font-black text-[#3D1F0D] uppercase tracking-wider mb-2">Materials Needed</p>
          <ul className="flex flex-col gap-1">
            {requirements.map((r) => (
              <li key={r} className="flex items-start gap-2 text-sm text-[#3D1F0D]/70">
                <span className="text-[#F97316] mt-0.5">✓</span>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
