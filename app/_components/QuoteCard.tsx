import PhotoSlot from "./PhotoSlot";

type QuoteCardProps = {
  quote: string;
  name: string;
  meta: string;
  photo?: string;
  badge?: string;
};

export default function QuoteCard({ quote, name, meta, photo, badge = "Builder" }: QuoteCardProps) {
  return (
    <blockquote className="bg-white border border-orange-100 rounded-2xl p-5 flex flex-col gap-5 h-full">
      <p className="text-[#3D1F0D]/80 text-sm leading-relaxed flex-1">&ldquo;{quote}&rdquo;</p>
      <footer className="flex items-center gap-3 mt-auto">
        {photo ? (
          <div className="w-14 h-14 shrink-0 overflow-hidden rounded-full">
            <PhotoSlot src={photo} alt={name} label={name} aspect="aspect-square" className="rounded-full" />
          </div>
        ) : null}
        <div>
          <p className="font-black text-[#3D1F0D] text-sm">{name}</p>
          <p className="text-[#F97316] text-xs font-bold mt-0.5">
            {badge} · {meta}
          </p>
        </div>
      </footer>
    </blockquote>
  );
}
