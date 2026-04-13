import Link from "next/link";
import MentorCard from "../_components/MentorCard";

const mentors = [
  {
    name: "Daniel Iyiola",
    course: "Coding",
    image: "/images/pl.webp",
    emoji: "🎨",
    bio: "A creative animator passionate about bringing stories to life through motion and design.",
    requirements: ["Phone or laptop", "Access to internet/data", "Writing materials"],
  },
  {
    name: "David Iyiola",
    course: "Graphic Design (Canva)",
    image: "/images/david.jpeg",
    emoji: "🎨",
    bio: "Iyiola David Olaoluwa is a youth mentor, creative designer, and logistics professional with a strong passion for empowering young people through learning, creativity, and personal development. He has over 7–8 years of experience working with teenagers and young adults, providing guidance in career development, mentorship, and spiritual growth. He is also an experienced Canva designer with over 2 years of practice, creating engaging visual content for churches and personal projects. His creative work includes book cover designs that have received recognition on Wattpad, reflecting his ability to combine creativity with audience-focused design. Professionally, he works as a Fleet Manager in the logistics sector, with a growing interest in aviation through ongoing pilot ground school training. He is passionate about systems, structure, and helping people understand how to turn skills into opportunities.",
    requirements: ["Canva app installed", "Phone or laptop"],
  },
  {
    name: "Adenike Ogunyemi",
    course: "Video Editing (CapCut)",
    image: "/images/nike.jpeg",
    emoji: "🎬",
    bio: "Denike Ogungemi is a Certified Brand Strategist and Media Creative with over four years of experience helping brands build strong digital identities and communicate with clarity, creativity, and purpose. Starting her career as a social media manager, she has evolved into a well-rounded creative professional with a deep understanding of content strategy, audience behavior, and digital storytelling. She has successfully developed and executed content strategies, managed brand communications and campaigns, and created high-performing visual content for multiple projects and growing brands. Her work is driven by a balance of creativity and data using insights to craft content that not only captures attention but also drives engagement and brand growth. Denike is highly proficient with a range of industry tools including Canva, CapCut, Adobe Premiere Pro, Notion, Trello, and AI-powered creative tools. She leverages these platforms to streamline workflows, enhance content quality, and deliver visually compelling content.",
    requirements: ["CapCut app installed", "Phone or laptop"],
  },
  {
    name: "Anne Iyiola (A.I🌹)",
    course: "Content Creating (Story Telling)",
    image: "/images/pl.webp",
    emoji: "🎤",
    bio: "A storyteller and public speaking coach empowering young voices to share their stories boldly.",
    requirements: ["Phone or laptop", "Access to a social media platform (e.g., YouTube)"],
  },
  {
    name: "Samuel Ganiu (The Fullstack Mechanic)",
    course: "Web Development",
    image: "/images/sam.jpeg",
    emoji: "💻",
    bio: "Ganiu Samuel, widely known as *“The Fullstack Mechanic,”* is a multidisciplinary creative and builder working at the intersection of design, technology, visual effects, and storytelling. With over eight years of experience in design and more than two years of growing expertise in software engineering, he seamlessly blends product thinking with technical execution to craft impactful digital experiences. He operates across both frontend and backend development, using technologies such as React, Next.js, Vue.js, Node.js, NestJS, Laravel, FastAPI, and Go. Beyond engineering, he brings ideas to life through motion design, video production, and immersive visual storytelling. His work spans platform development, user-centered product design, and high-quality multimedia content creation. Samuel has contributed to and led projects like Telex—a real-time monitoring and notification system—and several AI-driven tools, consistently combining creativity with structured problem-solving. He has also spent over three years instructing multimedia and software development at APTECH Computer Education, Alagbole, where he mentors and equips aspiring creatives and developers with practical skills. In addition to his technical and educational roles, he actively works as a brand manager and designer for multiple brands, and co-founded a full-service branding agency, Saisei (Rebirth), along with its supporting subdivisions. He also leads GeekHive, a tech community dedicated to guiding individuals from beginner level to job-ready across various tech disciplines. Driven by curiosity and execution, The Fullstack Mechanic is passionate about building products, growing businesses, simplifying complex ideas, and transforming concepts into systems people genuinely enjoy using.",
    requirements: ["Laptop (compulsory)"],
  },
  {
    name: "Daniel Oludahunsi",
    course: "Product Design",
    image: "/images/dan.jpeg",
    emoji: "🖥️",
    bio: "Daniel Oludahunsi is a product designer with over 4+ years of experience designing intuitive, user-centered digital products across web and mobile platforms. He specializes in creating solutions that address real-world problems. He has worked with companies such as Sweesher, FinFyde, Statsbyte and Lavenderlane, where he has contributed to building scalable and impactful digital experiences. Currently, Daniel works at Sleekabyte Technologies, where he continues to design products that balance user needs with business goals. Over the years, he has also worked on a variety of projects including Robovolts, Gestion, Squadneti, Bookmint, Skuu AI and The Pan African American Chamber of Commerce, among others. His experience spans industries such as fintech, SAAS, AI and lifestyle products, giving him a well-rounded perspective on product design. With a process rooted in research, iteration and design thinking, Daniel approaches design beyond visuals, creating products that not only look good but work effectively in real-world contexts. As a designer passionate about impact, he is committed to leveraging technology to solve everyday challenges faced by people in Nigeria and across Africa. Social handles: Twitter (X): @danielenitan_ Linkedin: Daniel Oludahunsi",
    requirements: ["Laptop (Figma installed or accessible)", "Access to internet", "Pen and Jotter"],
  },
  {
    name: "Grace Oderinde",
    course: "Crochet",
    image: "/images/pl.webp",
    emoji: "🧶",
    bio: "A crochet artist sharing the joy and income potential of handmade crafts with young learners.",
    requirements: ["Crochet hook (pin)", "Wool (yarn)"],
  },
  {
    name: "Dr. Glory Ishola (Dr. Ubani)",
    course: "First Aid",
    image: "/images/pl.webp",
    emoji: "🏥",
    bio: "A healthcare professional equipping kids with life-saving first aid knowledge and skills.",
    requirements: ["Clean cloth or towel", "Cotton wool", "Plasters", "A doll or teddy (for practice)"],
  },
  {
    name: "Rachael Iyiola",
    course: "French Language",
    image: "/images/pl.webp",
    emoji: "🌍",
    bio: "A French language enthusiast opening doors to global communication and culture.",
    requirements: ["Phone or laptop"],
  },
  {
    name: "Kawthar Adeniyi (Kathylinx)",
    course: "Portuguese Language",
    image: "/images/pl.webp",
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
            <MentorCard key={`${m.name}-${m.course}`} {...m} />
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
