import Link from "next/link";

const values = [
  { emoji: "🌱", title: "We See the Mighty", desc: "Every child carries greatness. We create the environment for it to emerge." },
  { emoji: "🎯", title: "One Skill, Deep Mastery", desc: "No surface-level learning. Each learner picks one skill and goes all in." },
  { emoji: "🤝", title: "Community First", desc: "We build more than skills — we build a generation that supports each other." },
  { emoji: "💡", title: "Practical & Income-Generating", desc: "Every skill taught can open doors, create opportunities, and build a future." },
];

const stats = [
  { value: "10", label: "Skills Offered" },
  { value: "5–20", label: "Age Range" },
  { value: "16", label: "Hands-on Sessions" },
  { value: "2", label: "Months of Impact" },
];

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="bg-[#3D1F0D] text-white py-20 px-4 text-center">
        <p className="text-[#F97316] font-bold tracking-widest uppercase text-sm mb-3">Our Story</p>
        <h1 className="font-black text-4xl md:text-6xl">
          About <span className="text-[#F97316]">Adullam</span>
        </h1>
        <p className="mt-4 text-orange-200 max-w-2xl mx-auto text-lg leading-relaxed">
          A cave called Adullam was where the distressed, the indebted, and the discontented gathered and became mighty men. That&apos;s our story too.
        </p>
      </section>

      {/* Mission */}
      <section className="bg-[#FFF8F0] py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#F97316] font-bold uppercase tracking-widest text-sm mb-3">Our Mission</p>
            <h2 className="font-black text-3xl md:text-4xl text-[#3D1F0D] leading-tight">
              From Hiding<br />to <span className="text-[#F97316]">Emerging</span>
            </h2>
            <p className="mt-5 text-[#3D1F0D]/70 leading-relaxed">
              Adullam Summer Camp exists to equip Nigerian children and young adults (ages 5–20) with real, practical, income-generating skills. We believe every child is mighty — they just need the right environment to emerge.
            </p>
            <p className="mt-4 text-[#3D1F0D]/70 leading-relaxed">
              Running July–August 2026, the camp offers 10 skill tracks taught by passionate mentors, 2 days a week, entirely online — so no child is left out regardless of location.
            </p>
          </div>
          {/* Stats */}
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

      {/* Values */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#F97316] font-bold uppercase tracking-widest text-sm text-center mb-2">What We Stand For</p>
          <h2 className="font-black text-3xl md:text-4xl text-[#3D1F0D] text-center mb-10">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-[#FFF8F0] border border-orange-100 rounded-2xl p-6 flex gap-4">
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

      {/* What makes us different */}
      <section className="bg-[#3D1F0D] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#F97316] font-bold uppercase tracking-widest text-sm mb-3">Why Adullam?</p>
          <h2 className="font-black text-3xl md:text-4xl text-white mb-8">What Makes Us Different</h2>
          <div className="grid sm:grid-cols-3 gap-4 text-left">
            {[
              { icon: "🏆", title: "Certificate & Award Day", desc: "Every graduate receives official recognition for their hard work." },
              { icon: "🧠", title: "FREE Leadership Masterclass", desc: "2 days of mindset and leadership training included for every student." },
              { icon: "📱", title: "100% Online", desc: "Learn from anywhere in Nigeria. All you need is a phone or laptop." },
            ].map((item) => (
              <div key={item.title} className="bg-[#2a1508] rounded-2xl p-5">
                <span className="text-3xl">{item.icon}</span>
                <p className="font-black text-white mt-3">{item.title}</p>
                <p className="text-orange-300 text-sm mt-1 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F97316] py-14 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-black text-white">Be part of the story.</h2>
        <p className="mt-2 text-white/80 max-w-md mx-auto">Join hundreds of young Nigerians choosing to emerge this summer.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register" className="bg-[#3D1F0D] hover:bg-[#2a1508] text-white font-black px-8 py-4 rounded-full transition-colors">
            Register Now
          </Link>
          <Link href="/mentors" className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-full transition-colors">
            Meet the Mentors
          </Link>
        </div>
      </section>

      <footer className="bg-[#2a1508] text-orange-200 text-center py-6 text-sm">
        <p>© 2025 Adullam Summer Camp · <a href="https://instagram.com/adullamsummercamp" className="underline hover:text-white">@adullamsummercamp</a></p>
      </footer>
    </main>
  );
}
