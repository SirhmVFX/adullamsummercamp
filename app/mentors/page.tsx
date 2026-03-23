import Link from "next/link";

const mentors = [
  {
    name: "Big Bro Daniel",
    course: "Animation",
    emoji: "🎨",
    bio: "A creative animator passionate about bringing stories to life through motion and design.",
    requirements: ["Phone or laptop", "Access to internet/data", "Writing materials"],
  },
  {
    name: "Brother In Law",
    course: "Graphic Design (Canva)",
    emoji: "🎨",
    bio: "A graphic design expert helping young creatives build visual communication skills using Canva.",
    requirements: ["Canva app installed", "Phone or laptop"],
  },
  {
    name: "Denike Ogunyemi",
    course: "Video Editing (CapCut)",
    emoji: "🎬",
    bio: "A video editing pro teaching the art of storytelling through compelling video content.",
    requirements: ["CapCut app installed", "Phone or laptop"],
  },
  {
    name: "Anne",
    course: "Content Creating & Public Speaking",
    emoji: "🎤",
    bio: "A storyteller and public speaking coach empowering young voices to share their stories boldly.",
    requirements: ["Phone or laptop", "Access to a social media platform (e.g., YouTube)"],
  },
  {
    name: "The Fullstack Mechanic",
    course: "Web Development",
    emoji: "💻",
    bio: "A fullstack developer turning beginners into builders — one line of code at a time.",
    requirements: ["Laptop (compulsory)"],
  },
  {
    name: "Anonymous",
    course: "Product Design",
    emoji: "🖥️",
    bio: "A product designer teaching the fundamentals of UX/UI and how to design products people love.",
    requirements: ["Laptop (Figma installed or accessible)", "Access to internet", "Pen and Jotter"],
  },
  {
    name: "Rachael",
    course: "Crochet",
    emoji: "🧶",
    bio: "A crochet artist sharing the joy and income potential of handmade crafts with young learners.",
    requirements: ["Crochet hook (pin)", "Wool (yarn)"],
  },
  {
    name: "Glory Ubani",
    course: "First Aid",
    emoji: "🏥",
    bio: "A healthcare professional equipping kids with life-saving first aid knowledge and skills.",
    requirements: ["Clean cloth or towel", "Cotton wool", "Plasters", "A doll or teddy (for practice)"],
  },
  {
    name: "Rachael",
    course: "French Language",
    emoji: "🌍",
    bio: "A French language enthusiast opening doors to global communication and culture.",
    requirements: ["Phone or laptop"],
  },
  {
    name: "Kathylinx",
    course: "Portuguese Language",
    emoji: "🌍",
    bio: "A Portuguese language tutor helping young Nigerians connect with the Lusophone world.",
    requirements: ["Phone or laptop"],
  },
];

export default function MentorsPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="bg-[#3D1F0D] text-white py-20 px-4 text-center">
        <p className="text-[#F97316] font-bold tracking-widest uppercase text-sm mb-3">The Team</p>
        <h1 className="font-black text-4xl md:text-6xl">
          Meet Your <span className="text-[#F97316]">Mentors</span>
        </h1>
        <p className="mt-4 text-orange-200 max-w-xl mx-auto text-lg">
          10 skilled, passionate instructors. Each one dedicated to seeing you emerge.
        </p>
      </section>

      {/* Mentors grid */}
      <section className="bg-[#FFF8F0] py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((m) => (
            <div key={`${m.name}-${m.course}`} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-orange-100 flex flex-col">
              {/* Card header */}
              <div className="bg-[#3D1F0D] px-6 py-8 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-[#F97316]/20 flex items-center justify-center text-4xl mb-4">
                  {m.emoji}
                </div>
                <h2 className="font-black text-white text-xl">{m.name}</h2>
                <span className="mt-1 text-[#F97316] text-sm font-bold">{m.course}</span>
              </div>

              {/* Card body */}
              <div className="px-6 py-5 flex flex-col gap-4 flex-1">
                <p className="text-[#3D1F0D]/70 text-sm leading-relaxed">{m.bio}</p>
                <div>
                  <p className="text-xs font-black text-[#3D1F0D] uppercase tracking-wider mb-2">Materials Needed</p>
                  <ul className="flex flex-col gap-1">
                    {m.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-[#3D1F0D]/70">
                        <span className="text-[#F97316] mt-0.5">✓</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F97316] py-14 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-black text-white">Ready to learn from the best?</h2>
        <Link
          href="/register"
          className="mt-6 inline-block bg-[#3D1F0D] hover:bg-[#2a1508] text-white font-black px-10 py-4 rounded-full text-lg transition-colors"
        >
          Register Now
        </Link>
      </section>

      <footer className="bg-[#2a1508] text-orange-200 text-center py-6 text-sm">
        <p>© 2025 Adullam Summer Camp · <a href="https://instagram.com/adullamsummercamp" className="underline hover:text-white">@adullamsummercamp</a></p>
      </footer>
    </main>
  );
}
