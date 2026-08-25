"use client";

import { useState } from "react";

type PhotoSlotProps = {
  src?: string;
  alt: string;
  label: string;
  caption?: string;
  className?: string;
  aspect?: string;
};

export default function PhotoSlot({
  src,
  alt,
  label,
  caption,
  className = "rounded-2xl",
  aspect = "aspect-[4/3]",
}: PhotoSlotProps) {
  const [broken, setBroken] = useState(false);
  const showPlaceholder = !src || broken;

  return (
    <figure className={`overflow-hidden bg-[#3D1F0D] ${className}`}>
      <div className={`relative ${aspect} w-full`}>
        {!showPlaceholder ? (
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover"
            onError={() => setBroken(true)}
          />
        ) : (
          <DummyPhoto label={label} />
        )}
      </div>
      {caption ? (
        <figcaption className="bg-[#2a1508] px-3 py-2 text-xs text-orange-200 leading-snug">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function DummyPhoto({ label }: { label: string }) {
  const hue = hashHue(label);
  return (
    <div
      className="absolute inset-0 flex flex-col justify-end p-4"
      style={{
        background: `linear-gradient(145deg, hsl(${hue} 55% 18%) 0%, #3D1F0D 45%, hsl(${(hue + 28) % 360} 70% 42%) 100%)`,
      }}
    >
      <div className="absolute inset-0 opacity-30" aria-hidden>
        <div className="absolute top-6 left-6 w-24 h-24 rounded-full bg-white/20" />
        <div className="absolute top-16 right-10 w-16 h-16 rounded-full bg-[#F97316]/40" />
        <div className="absolute bottom-16 left-1/3 w-32 h-32 rounded-full bg-white/10" />
        <div className="grid grid-cols-3 gap-2 p-6 pt-10 max-w-[70%]">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-xl bg-white/15 border border-white/20"
              style={{ backgroundColor: `hsla(${(hue + i * 18) % 360}, 70%, 60%, 0.35)` }}
            />
          ))}
        </div>
      </div>
      <p className="relative text-white font-black text-sm leading-snug drop-shadow">{label}</p>
    </div>
  );
}

function hashHue(value: string) {
  let n = 0;
  for (let i = 0; i < value.length; i++) n = (n + value.charCodeAt(i) * 17) % 360;
  return n;
}

export function PhotoGrid({
  items,
  className = "grid grid-cols-2 md:grid-cols-3 gap-3",
}: {
  items: { src?: string; alt: string; label: string; caption?: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      {items.map((item) => (
        <PhotoSlot key={item.src ?? item.label} {...item} />
      ))}
    </div>
  );
}
