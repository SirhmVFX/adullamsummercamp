import Link from "next/link";
import PhotoSlot, { PhotoGrid } from "../_components/PhotoSlot";
import VideoSlot from "../_components/VideoSlot";
import QuoteCard from "../_components/QuoteCard";
import {
  journey,
  stats,
  liveClassPhotos,
  interactionPhotos,
  projectPhotos,
  awardPhotos,
  leadershipPhotos,
  videos,
  builderQuotes,
  parentQuotes,
} from "../_data/cohort";

export default function CohortOnePage() {
  return (
    <main className="flex flex-col">
      <section className="bg-[#3D1F0D] text-white py-20 px-4 text-center">
        <p className="text-[#F97316] font-bold tracking-widest uppercase text-sm mb-3">July–August 2026 · Complete</p>
        <h1 className="font-black text-4xl md:text-6xl">
          Cohort 1 <span className="text-[#F97316]">Recap</span>
        </h1>
        <p className="mt-4 text-orange-200 max-w-2xl mx-auto text-lg leading-relaxed">
          Our first Builders showed up. They took live classes, built projects, sat through leadership, and walked out with certificates and special awards.
        </p>
      </section>

      <section className="bg-[#FFF8F0] py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#3D1F0D] rounded-2xl p-6 text-center">
              <p className="font-black text-[#F97316] text-3xl">{s.value}</p>
              <p className="text-orange-200 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#F97316] font-bold uppercase tracking-widest text-sm text-center mb-2">The journey</p>
          <h2 className="font-black text-3xl md:text-4xl text-[#3D1F0D] text-center mb-10">
            Everything Cohort 1 completed
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {journey.map((item) => (
              <div key={item.title} className="border border-orange-100 rounded-2xl overflow-hidden">
                <PhotoSlot src={item.src} alt={item.title} label={item.title} aspect="aspect-[16/9]" />
                <div className="p-5 bg-[#FFF8F0]">
                  <p className="font-black text-[#3D1F0D]">{item.title}</p>
                  <p className="text-sm text-[#3D1F0D]/60 mt-1 leading-relaxed">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#3D1F0D] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#F97316] font-bold uppercase tracking-widest text-sm text-center mb-2">Cameras on</p>
          <h2 className="font-black text-3xl md:text-4xl text-white text-center mb-3">Live classes</h2>
          <p className="text-orange-200 text-center max-w-2xl mx-auto mb-10">
            Twice a week, mentors taught in real time. Builders did not hide behind recordings — they showed up live.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <VideoSlot {...videos[0]} />
            <VideoSlot {...videos[1]} />
          </div>
          <PhotoGrid items={liveClassPhotos} />
        </div>
      </section>

      <section className="bg-[#FFF8F0] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#F97316] font-bold uppercase tracking-widest text-sm text-center mb-2">Not a lecture</p>
          <h2 className="font-black text-3xl md:text-4xl text-[#3D1F0D] text-center mb-3">
            Live interaction sessions
          </h2>
          <p className="text-[#3D1F0D]/60 text-center max-w-2xl mx-auto mb-10">
            Questions. Peer shares. Mentor feedback. The camp felt like a room, not a playlist.
          </p>
          <PhotoGrid items={interactionPhotos} className="grid grid-cols-2 md:grid-cols-4 gap-3" />
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#F97316] font-bold uppercase tracking-widest text-sm text-center mb-2">Made, not watched</p>
          <h2 className="font-black text-3xl md:text-4xl text-[#3D1F0D] text-center mb-3">
            Children built projects
          </h2>
          <p className="text-[#3D1F0D]/60 text-center max-w-2xl mx-auto mb-10">
            Every Builder left with work they made — websites, posters, videos, app screens, crochet, stories.
          </p>
          <div className="mb-6">
            <VideoSlot {...videos[2]} />
          </div>
          <PhotoGrid items={projectPhotos} />
        </div>
      </section>

      <section className="bg-[#3D1F0D] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#F97316] font-bold uppercase tracking-widest text-sm text-center mb-2">Mindset</p>
          <h2 className="font-black text-3xl md:text-4xl text-white text-center mb-3">
            Leadership Masterclass
          </h2>
          <p className="text-orange-200 text-center max-w-2xl mx-auto mb-10">
            Two days. Confidence. Communication. Leading with courage. Every Builder sat through it.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {leadershipPhotos.map((p) => (
              <PhotoSlot key={p.src} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFF8F0] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#F97316] font-bold uppercase tracking-widest text-sm text-center mb-2">The finale</p>
          <h2 className="font-black text-3xl md:text-4xl text-[#3D1F0D] text-center mb-3">
            Certificates & special awards
          </h2>
          <p className="text-[#3D1F0D]/60 text-center max-w-2xl mx-auto mb-10">
            Every Builder received a certificate. Outstanding work was recognised with special awards. Award Day was the celebration they earned.
          </p>
          <div className="mb-6">
            <VideoSlot {...videos[3]} />
          </div>
          <PhotoGrid items={awardPhotos} className="grid grid-cols-2 md:grid-cols-4 gap-3" />
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#F97316] font-bold uppercase tracking-widest text-sm text-center mb-2">From the Builders</p>
          <h2 className="font-black text-3xl md:text-4xl text-[#3D1F0D] text-center mb-3">
            Builder feedback
          </h2>
          <p className="text-[#3D1F0D]/60 text-center max-w-2xl mx-auto mb-10">
            At Adullam, students are Builders. This is what Cohort 1 told us.
          </p>
          <div className="mb-8">
            <VideoSlot {...videos[4]} />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {builderQuotes.map((q) => (
              <QuoteCard
                key={q.name}
                quote={q.quote}
                name={q.name}
                meta={`${q.age} · ${q.track}`}
                photo={q.photo}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFF8F0] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#F97316] font-bold uppercase tracking-widest text-sm text-center mb-2">From the parents</p>
          <h2 className="font-black text-3xl md:text-4xl text-[#3D1F0D] text-center mb-3">
            Parent feedback
          </h2>
          <p className="text-[#3D1F0D]/60 text-center max-w-2xl mx-auto mb-10">
            Parents watched their children finish projects and walk into Award Day with certificates in hand.
          </p>
          <div className="mb-8">
            <VideoSlot {...videos[5]} />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {parentQuotes.map((q) => (
              <QuoteCard
                key={q.name}
                quote={q.quote}
                name={q.name}
                meta={q.relation}
                photo={q.photo}
                badge="Parent"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F97316] py-14 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-black text-white">The next cohort of Builders is open.</h2>
        <p className="mt-2 text-white/80 max-w-md mx-auto">Cohort 1 is done. Register your child to take the same journey.</p>
        <Link
          href="/register"
          className="mt-6 inline-block bg-[#3D1F0D] hover:bg-[#2a1508] text-white font-black px-10 py-4 rounded-full text-lg transition-colors"
        >
          Join the Next Cohort
        </Link>
      </section>
    </main>
  );
}
