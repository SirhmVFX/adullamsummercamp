import Link from "next/link";
import PhotoSlot, { PhotoGrid } from "../_components/PhotoSlot";
import VideoSlot from "../_components/VideoSlot";
import QuoteCard from "../_components/QuoteCard";
import {
  stats,
  awardPhotos,
  leadershipPhotos,
  liveClassPhotos,
  videos,
  builderQuotes,
  parentQuotes,
} from "../_data/cohort";

const values = [
  { emoji: "🌱", title: "We See the Mighty", desc: "Every child carries greatness. Cohort 1 proved it — Builders who started unsure walked out with certificates and projects." },
  { emoji: "🎯", title: "One Skill, Deep Mastery", desc: "No surface-level learning. Each Builder picked one skill and went all in for two months." },
  { emoji: "🤝", title: "Community First", desc: "Live classes and live interaction sessions turned a screen into a room. Builders supported each other." },
  { emoji: "💡", title: "Practical & Income-Generating", desc: "Every skill taught can open doors. Cohort 1 left with work they made, not just notes they took." },
];

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-[#3D1F0D] text-white py-20 px-4 text-center">
        <p className="text-[#F97316] font-bold tracking-widest uppercase text-sm mb-3">Our Story · Cohort 1 Complete</p>
        <h1 className="font-black text-4xl md:text-6xl">
          About <span className="text-[#F97316]">Adullam</span>
        </h1>
        <p className="mt-4 text-orange-200 max-w-2xl mx-auto text-lg leading-relaxed">
          A cave called Adullam was where the distressed, the indebted, and the discontented gathered and became mighty men. Cohort 1 of our Builders just lived that story.
        </p>
      </section>

      <section className="bg-[#FFF8F0] py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#F97316] font-bold uppercase tracking-widest text-sm mb-3">Our Mission</p>
            <h2 className="font-black text-3xl md:text-4xl text-[#3D1F0D] leading-tight">
              From Hiding<br />to <span className="text-[#F97316]">Emerging</span>
            </h2>
            <p className="mt-5 text-[#3D1F0D]/70 leading-relaxed">
              Adullam Summer Camp equips Nigerian children and young adults (ages 5–20) with real, practical, income-generating skills. We call our students <strong className="text-[#3D1F0D]">Builders</strong> — because they do not just attend. They make things.
            </p>
            <p className="mt-4 text-[#3D1F0D]/70 leading-relaxed">
              Cohort 1 ran July–August 2026. Builders completed live classes, training sessions, hands-on projects, live interaction sessions, and a 2-day Leadership Masterclass. Every Builder received a certificate. Special awards recognised standout work.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-[#3D1F0D] rounded-2xl p-6 text-center">
                <p className="font-black text-[#F97316] text-4xl">{s.value}</p>
                <p className="text-orange-200 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#F97316] font-bold uppercase tracking-widest text-sm text-center mb-2">Cohort 1 in the room</p>
          <h2 className="font-black text-3xl md:text-4xl text-[#3D1F0D] text-center mb-10">Live camp, not a playlist</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <VideoSlot {...videos[0]} />
            <PhotoSlot
              src="/media/cohort-1/about-community.svg"
              alt="Adullam Builders together"
              label="Builders together"
              caption="Cohort 1 — the community that showed up twice a week"
              aspect="aspect-video"
            />
          </div>
          <PhotoGrid items={liveClassPhotos.slice(0, 3)} />
        </div>
      </section>

      <section className="bg-[#FFF8F0] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#F97316] font-bold uppercase tracking-widest text-sm text-center mb-2">What We Stand For</p>
          <h2 className="font-black text-3xl md:text-4xl text-[#3D1F0D] text-center mb-10">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-orange-100 rounded-2xl p-6 flex gap-4">
                <span className="text-3xl shrink-0">{v.emoji}</span>
                <div>
                  <p className="font-black text-[#3D1F0D] text-base">{v.title}</p>
                  <p className="text-sm text-[#3D1F0D]/60 mt-1 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#3D1F0D] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#F97316] font-bold uppercase tracking-widest text-sm text-center mb-3">Why Adullam?</p>
          <h2 className="font-black text-3xl md:text-4xl text-white text-center mb-8">What Cohort 1 actually received</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: "🏆", title: "Certificate & Award Day", desc: "Every Builder received official recognition. Special awards went to outstanding work." },
              { icon: "🧠", title: "Leadership Masterclass", desc: "Two days of mindset, confidence, communication, and leadership — included for every Builder." },
              { icon: "📱", title: "100% Live Online", desc: "Live classes and live interaction sessions from anywhere in Nigeria. Phone or laptop." },
            ].map((item) => (
              <div key={item.title} className="bg-[#2a1508] rounded-2xl p-5">
                <span className="text-3xl">{item.icon}</span>
                <p className="font-black text-white mt-3">{item.title}</p>
                <p className="text-orange-300 text-sm mt-1 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            {leadershipPhotos.map((p) => (
              <PhotoSlot key={p.src} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-3xl md:text-4xl text-[#3D1F0D] text-center mb-10">
            Voices from <span className="text-[#F97316]">Cohort 1</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <QuoteCard
              quote={builderQuotes[0].quote}
              name={builderQuotes[0].name}
              meta={`${builderQuotes[0].age} · ${builderQuotes[0].track}`}
              photo={builderQuotes[0].photo}
            />
            <QuoteCard
              quote={parentQuotes[0].quote}
              name={parentQuotes[0].name}
              meta={parentQuotes[0].relation}
              photo={parentQuotes[0].photo}
              badge="Parent"
            />
          </div>
          <PhotoGrid items={awardPhotos.slice(0, 4)} className="grid grid-cols-2 md:grid-cols-4 gap-3" />
        </div>
      </section>

      <section className="bg-[#F97316] py-14 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-black text-white">Be part of the next chapter.</h2>
        <p className="mt-2 text-white/80 max-w-md mx-auto">Cohort 1 has emerged. Register your Builder for the next cohort.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register" className="bg-[#3D1F0D] hover:bg-[#2a1508] text-white font-black px-8 py-4 rounded-full transition-colors">
            Join the Next Cohort
          </Link>
          <Link href="/cohort-1" className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-full transition-colors">
            See Cohort 1
          </Link>
        </div>
      </section>
    </main>
  );
}
