import Image from "next/image";
import Link from "next/link";

const courses = [
  { emoji: "🎨", title: "Coding", mentor: "Daniel Iyiola" },
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

const highlights = [
  { label: "1 skill per child", sub: "Deep focused mastery" },
  { label: "2 days per week", sub: "Live online classes" },
  { label: "2 months", sub: "July–August 2026" },
  { label: "16 hands-on sessions", sub: "Build real life projects" },
  { label: "2-Days Free Leadership Masterclass", sub: "Every student gets 2 days of mindset training, building confidence, communication, and leadership skills" },
  { label: "Certificate & Award Day", sub: "Official recognition and celebration during final hangout" },
];

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[90vh] bg-[#3D1F0D] flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
        {/* <Image
          src="/images/adullamheroimage.png"
          alt="Adullam Summer Camp — From Hiding to Emerging"
          fill
          priority
          className="object-cover object-center"
        /> */}
        <div className="absolute inset-0" />
        <div className="relative z-10 flex flex-col items-center">
          <p className="text-[#F97316] font-bold tracking-widest uppercase text-sm mb-4">Ages 6–28 · Online · July–August 2026</p>
          <h1 className="font-black text-5xl md:text-7xl leading-tight max-w-3xl text-white">
            From{" "}
            <span className="text-[#F97316]">Hiding</span>
            <br />
            to{" "}
            <span className="text-[#F97316]">Emerging</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-orange-100 max-w-xl leading-relaxed">
            Where Nigerian kids learn skills that matter. We see the mighty in every child.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/register"
              className="bg-[#F97316] hover:bg-orange-500 text-white font-black px-8 py-4 rounded-full text-lg transition-colors"
            >
              Register Now — It&apos;s Free
            </Link>
            <Link
              href="/mentors"
              className="border-2 border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded-full text-lg transition-colors"
            >
              Meet the Mentors
            </Link>
          </div>
          <p className="mt-8 text-orange-200 text-sm">10 Skills · Online · Nigeria</p>
        </div>
      </section>

      {/* Welcome strip */}
      <section className="bg-[#FFF8F0] py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-[#3D1F0D]">
          Welcome to <span className="text-[#F97316]">Adullam Summer Camp</span>
        </h2>
        <p className="mt-4 text-[#3D1F0D]/70 max-w-2xl mx-auto text-lg leading-relaxed">
          We&apos;re equipping children and young adults (ages 5–20) with real, practical, income-generating skills — the kind that open doors, create opportunities, and build futures.
        </p>
      </section>

      {/* Program Highlights */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-[#3D1F0D] text-center mb-2">
            Program <span className="text-[#F97316]">Highlights</span>
          </h2>
          <p className="text-center text-[#3D1F0D]/60 mb-10">Everything you need to know about the camp</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {highlights.map((h) => (
              <div key={h.label} className="bg-[#FFF8F0] border border-orange-100 rounded-2xl p-5">
                <p className="font-black text-[#3D1F0D] text-base">{h.label}</p>
                <p className="text-sm text-[#3D1F0D]/60 mt-1">{h.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="bg-[#3D1F0D] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-2">
            10 <span className="text-[#F97316]">Skills</span> to Choose From
          </h2>
          <p className="text-center text-orange-200 mb-10">Pick one. Go deep. Come out transformed.</p>
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
        <h2 className="text-3xl md:text-4xl font-black text-white">Ready to Emerge?</h2>
        <p className="mt-3 text-white/90 text-lg max-w-lg mx-auto">
          Spots are limited. Secure your child&apos;s place in the camp today.
        </p>
        <Link
          href="/register"
          className="mt-8 inline-block bg-[#3D1F0D] hover:bg-[#2a1508] text-white font-black px-10 py-4 rounded-full text-lg transition-colors"
        >
          Register Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-[#2a1508] text-orange-200 text-center py-6 text-sm">
        <p>© 2025 Adullam Summer Camp · <a href="https://instagram.com/adullamsummercamp" className="underline hover:text-white">@adullamsummercamp</a></p>
      </footer>
    </main>
  );
}
