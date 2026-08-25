"use client";

import { useState } from "react";

type VideoSlotProps = {
  src?: string;
  poster?: string;
  label: string;
  caption?: string;
  className?: string;
};

export default function VideoSlot({ src, poster, label, caption, className = "" }: VideoSlotProps) {
  const [broken, setBroken] = useState(false);
  const canPlay = Boolean(src) && !broken;

  return (
    <figure className={`overflow-hidden rounded-2xl bg-[#3D1F0D] ${className}`}>
      <div className="relative aspect-video w-full">
        {canPlay ? (
          <video
            src={src}
            poster={poster}
            controls
            className="absolute inset-0 h-full w-full object-cover"
            onError={() => setBroken(true)}
          />
        ) : (
          <>
            {poster ? (
              <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" />
            ) : (
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, #3D1F0D 0%, #7c2d12 50%, #F97316 100%)",
                }}
              />
            )}
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-4">
              <div className="w-14 h-14 rounded-full bg-[#F97316] flex items-center justify-center shadow-lg">
                <span className="text-white text-xl ml-0.5" aria-hidden>
                  ▶
                </span>
              </div>
              <p className="text-white font-black text-sm">{label}</p>
            </div>
          </>
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
