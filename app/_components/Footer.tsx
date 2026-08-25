import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#2a1508] text-orange-200 py-10 px-4 text-sm">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <p className="font-black text-white">Adullam Summer Camp</p>
          <p className="mt-1">Cohort 1 complete · Builders emerged · July–August 2026</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/cohort-1" className="hover:text-white">Cohort 1</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/mentors" className="hover:text-white">Mentors</Link>
          <Link href="/register" className="hover:text-white">Join Next Cohort</Link>
          <a href="https://instagram.com/adullamsummercamp" className="underline hover:text-white">@adullamsummercamp</a>
        </div>
      </div>
      <p className="text-center text-orange-200/50 mt-8">© 2026 Adullam Summer Camp</p>
    </footer>
  );
}

export default Footer;
