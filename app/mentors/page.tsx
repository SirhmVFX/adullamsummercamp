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
    image: "/images/ai.jpeg",
    emoji: "🎤",
    bio: "Anne Iyiola is a certified educator, content strategist, and storytelling specialist with over four years of experience in curriculum design, digital content creation, and youth education. As Content Creation and Storytelling Mentor at Adullam Summer Camp, she facilitates structured learning in narrative writing, digital content development, and creative communication, equipping participants with skills that are directly applicable in today's media-driven world. Her professional background spans content management, SEO, brand strategy, and classroom teaching across secondary and community education settings.",
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
    name: "Grace Tofunmi",
    course: "Crochet",
    image: "/images/grace.jpeg",
    emoji: "🧶",
    bio: "Grace Tofunmi is the founder of Bídèmí, a crochet brand dedicated to creating handmade pieces that blend craftsmanship, storytelling, and cultural inspiration. With five years of experience in crochet, she is passionate about transforming simple yarn into meaningful designs that reflect patience, creativity and artistry. Inspired by memories of watching her mother crochet, Grace built Bídèmí as a way to honour that legacy while creating pieces that celebrate culture and handmade fashion. Through Bídèmí, she is growing a global brand that tells stories through crochet.",
    requirements: ["Crochet hook (pin)", "Wool (yarn)"],
  },
  {
    name: "Dr. Glory Ishola (Dr. Ubani)",
    course: "First Aid",
    image: "/images/glory.jpeg",
    emoji: "🏥",
    bio: "Glory Ishola is a medical doctor with over 3 years of clinical experience in the assessment and management of acute and emergency conditions. She trained at Saint Nicholas Hospital during her housemanship and currently practices at Reddington Hospital, where she continues to build expertise in emergency care and clinical management. She holds a Basic Life Support (BLS) certification and is skilled in patient evaluation, stabilization, and the management of urgent medical presentations. Her clinical experience spans a wide range of cases, reinforcing her understanding of the importance of timely first aid in improving patient outcomes. She is passionate about preventive health education and is committed to promoting first aid awareness and emergency preparedness.",
    requirements: ["Clean cloth or towel", "Cotton wool", "Plasters", "A doll or teddy (for practice)"],
  },
  {
    name: "Rachael Iyiola",
    course: "French Language",
    image: "/images/rach.jpeg",
    emoji: "🌍",
    bio: "Rachael Morolayo Iyiola is a passionate French language facilitator who enjoys helping children and young people learn in a fun and engaging way. She will be teaching French at the Children’s Summer Camp for participants aged 2 to 20 years. She has successfully passed the DELF/DALF examinations and has practical experience translating songs, write-ups, and books, as well as working on French research projects. This allows her to bring both knowledge and real-life application into her teaching. Rachael’s approach is simple and interactive. She uses games, music, storytelling, and conversations to make learning enjoyable and easy to understand for all age groups. She focuses on creating a comfortable space where learners feel confident to try, make mistakes, and grow. Her goal is to help every child leave with a better understanding of French and a genuine interest in the language.",
    requirements: ["Phone or laptop"],
  },
  {
    name: "Kawthar Adeniyi (Kathylinx)",
    course: "Portuguese Language",
    image: "/images/kath.jpeg",
    emoji: "🌍",
    bio: "Kawthar Omolabake Adeniyi is a language educator, phonics instructor, and content creator passionate about literacy development and language learning. She specializes in teaching phonics, diction in English, oral English, and Portuguese , helping learners build strong reading, pronunciation, and communication skills. Her journey with the Portuguese language began during her university years, where her curiosity and love for languages deepened. Through consistent learning, mentorship, and language exchange with fellow learners, she developed a strong interest in Portuguese and began sharing her knowledge with others. Over time, she started teaching Portuguese to peers and learners who were interested in exploring the language. Over the years, Kawthar has worked with learners across different age groups, teaching phonics, English, and Portuguese, and helping language learners build confidence in reading, speaking, and communication through engaging and practical teaching approaches. Beyond the classroom, she creates educational content and language resources through Kathylinx Channel, where she shares phonics lessons, language tips, and literacy-focused materials. Her work is driven by a passion for helping learners discover the joy of reading, languages, and effective communication. Committed to impact and continuous learning, Kawthar continues to promote literacy, language education, and youth development within her community and beyond. Social handles: LinkedIn: Kawthar Adeniyi, YouTube: kathylinxchannel",
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
