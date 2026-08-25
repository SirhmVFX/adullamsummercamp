import Link from "next/link";
import HeroTiles from "./_components/HeroTiles";
import PhotoSlot, { PhotoGrid } from "./_components/PhotoSlot";
import VideoSlot from "./_components/VideoSlot";
import QuoteCard from "./_components/QuoteCard";
import {
  journey,
  stats,
  liveClassPhotos,
  projectPhotos,
  awardPhotos,
  videos,
  builderQuotes,
  parentQuotes,
} from "./_data/cohort";

const courses = [
  { emoji: "🎨", title: "Graphic Design (Canva)", mentor: "David Iyiola" },
  { emoji: "🎬", title: "Video Editing (CapCut)", mentor: "Adenike Ogunyemi" },
  { emoji: "🎤", title: "Content Creating (Story Telling)", mentor: "Anne Iyiola (A.I🌹)" },
  { emoji: "💻", title: "Web Development", mentor: "Samuel Ganiu (The Fullstack Mechanic)" },
  { emoji: "🖥️", title: "Product Design", mentor: "Daniel Oludahunsi" },
  { emoji: "🧶", title: "Crochet", mentor: "Grace Oderinde" },
  { emoji: "🏥", title: "First Aid", mentor: "Dr. Glory Ishola (Dr. Ubani)" },
  { emoji: "🌍", title: "French Language", mentor: "Rachael Iyiola" },
  { emoji: "🌍", title: "Portuguese Language", mentor: "Kawthar Adeniyi (Kathylinx)" },
];

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative h-screen min-h-150 bg-[#3D1F0D] flex flex-col items-center md:pt-46 pt-24 text-center px-4 overflow-hidden">
        <img
          src="/images/illustrations.svg"
          alt=""
          aria-hidden="true"
          className="absolute left-0 right-0 bottom-0 w-full pointer-events-none"
          style={{ zIndex: 999 }}
        />
        <HeroTiles />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(249,115,22,0.12) 0%, transparent 70%)",
            zIndex: 2,
          }}
        />

        <div className="relative flex flex-col items-center gap-4 px-4 " style={{ zIndex: 9999 }}>
          <span className="text-[#F97316] font-bold tracking-widest uppercase text-xs sm:text-sm border border-[#F97316] rounded-full px-4 py-1.5">
            Cohort 1 Complete · July–August 2026
          </span>

          <h1 className="font-black text-4xl sm:text-6xl md:text-7xl leading-tight max-w-3xl text-white">
            From{" "}
            <span className="text-[#F97316]">Hiding</span>
            <br />
            to{" "}
            <span className="text-[#F97316]">Emerging</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-orange-100 max-w-xl leading-relaxed">
            Our first cohort of Builders is done. Live classes. Hands-on projects. Leadership. Certificates. Special awards. They showed up — and they emerged.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full sm:w-auto">
            <Link
              href="/cohort-1"
              className="bg-[#F97316] hover:bg-orange-500 text-white font-black px-8 py-4 rounded-full text-base sm:text-lg transition-colors text-center"
            >
              See Cohort 1
            </Link>
            <Link
              href="/register"
              className="border-2 border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded-full text-base sm:text-lg transition-colors text-center"
            >
              Join the Next Cohort
            </Link>
          </div>

          <p className="text-orange-200/60 text-xs sm:text-sm mt-2">Builders · Live online · Nigeria</p>
        </div>
      </section>

      {/* Cohort 1 done strip */}
      <section className="bg-[#FFF8F0] py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#3D1F0D]">
            Cohort 1 is <span className="text-[#F97316]">done</span>
          </h2>
          <p className="mt-4 text-[#3D1F0D]/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Every Builder completed their classes, training sessions, hands-on project, live interaction sessions, and the 2-day Leadership Masterclass. Certificates were awarded. Special awards were given. The first Adullam cohort has emerged.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
            {stats.map((s) => (
              <div key={s.label} className="bg-[#3D1F0D] rounded-2xl p-6">
                <p className="font-black text-[#F97316] text-3xl md:text-4xl">{s.value}</p>
                <p className="text-orange-200 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#F97316] font-bold uppercase tracking-widest text-sm text-center mb-2">What Cohort 1 completed</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#3D1F0D] text-center mb-10">
            The full <span className="text-[#F97316]">Builder</span> journey
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {journey.map((item) => (
              <div key={item.title} className="border border-orange-100 bg-[#FFF8F0] rounded-2xl overflow-hidden">
                <PhotoSlot src={item.src} alt={item.title} label={item.title} aspect="aspect-[16/9]" />
                <div className="p-5">
                  <p className="font-black text-[#3D1F0D]">{item.title}</p>
                  <p className="text-sm text-[#3D1F0D]/60 mt-1 leading-relaxed">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live classes + video */}
      <section className="bg-[#3D1F0D] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#F97316] font-bold uppercase tracking-widest text-sm text-center mb-2">Cameras on</p>
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-3">
            Live classes. Live interaction.
          </h2>
          <p className="text-center text-orange-200 mb-10 max-w-2xl mx-auto">
            Cohort 1 did not learn from recordings alone. Builders met their mentors live, twice a week, and stayed for interaction sessions — questions, feedback, and real conversation.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <VideoSlot {...videos[0]} />
            <VideoSlot {...videos[1]} />
          </div>
          <PhotoGrid items={liveClassPhotos} />
        </div>
      </section>

      {/* Projects */}
      <section className="bg-[#FFF8F0] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#F97316] font-bold uppercase tracking-widest text-sm text-center mb-2">They built things</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#3D1F0D] text-center mb-3">
            Children built <span className="text-[#F97316]">projects</span>
          </h2>
          <p className="text-center text-[#3D1F0D]/60 mb-10 max-w-2xl mx-auto">
            Websites. Posters. Edited videos. App screens. Crochet pieces. Stories. Every Builder left with work they made with their own hands.
          </p>
          <div className="mb-6">
            <VideoSlot {...videos[2]} />
          </div>
          <PhotoGrid items={projectPhotos} />
        </div>
      </section>

      {/* Certificates & awards */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#F97316] font-bold uppercase tracking-widest text-sm text-center mb-2">The finale</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#3D1F0D] text-center mb-3">
            Certificates awarded. Special awards given.
          </h2>
          <p className="text-center text-[#3D1F0D]/60 mb-10 max-w-2xl mx-auto">
            Every Builder received a certificate. Outstanding work was recognised with special awards. Award Day was the celebration they earned.
          </p>
          <div className="mb-6">
            <VideoSlot {...videos[3]} />
          </div>
          <PhotoGrid items={awardPhotos} className="grid grid-cols-2 md:grid-cols-4 gap-3" />
        </div>
      </section>

      {/* Builder feedback */}
      <section className="bg-[#FFF8F0] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#F97316] font-bold uppercase tracking-widest text-sm text-center mb-2">From the Builders</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#3D1F0D] text-center mb-3">
            What our <span className="text-[#F97316]">Builders</span> said
          </h2>
          <p className="text-center text-[#3D1F0D]/60 mb-10 max-w-2xl mx-auto">
            At Adullam, students are Builders. Here is what Cohort 1 told us when camp ended.
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
                badge="Builder"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Parent feedback */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#F97316] font-bold uppercase tracking-widest text-sm text-center mb-2">From the parents</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#3D1F0D] text-center mb-3">
            What <span className="text-[#F97316]">parents</span> said
          </h2>
          <p className="text-center text-[#3D1F0D]/60 mb-10 max-w-2xl mx-auto">
            Parents watched their children show up, finish projects, and walk into Award Day with certificates in hand.
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

      {/* Skills */}
      <section className="bg-[#3D1F0D] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-2">
            9 <span className="text-[#F97316]">Skills</span> Cohort 1 trained in
          </h2>
          <p className="text-center text-orange-200 mb-10">Pick one. Go deep. Come out transformed — just like they did.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {courses.map((c) => (
              <div key={c.title} className="bg-[#2a1508] hover:bg-[#4a2810] transition-colors rounded-2xl p-5 flex flex-col gap-2">
                <span className="text-3xl">{c.emoji}</span>
                <p className="font-black text-white text-base">{c.title}</p>
                <p className="text-sm text-orange-300">Mentor: {c.mentor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F97316] py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white">Your child can be a Builder too.</h2>
        <p className="mt-3 text-white/90 text-lg max-w-lg mx-auto">
          Cohort 1 is complete. Register now for the next cohort of Adullam Summer Camp.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/register"
            className="inline-block bg-[#3D1F0D] hover:bg-[#2a1508] text-white font-black px-10 py-4 rounded-full text-lg transition-colors"
          >
            Join the Next Cohort
          </Link>
          <Link
            href="/cohort-1"
            className="inline-block bg-white/20 hover:bg-white/30 text-white font-bold px-10 py-4 rounded-full text-lg transition-colors"
          >
            Watch Cohort 1
          </Link>
        </div>
      </section>
    </main>
  );
}
