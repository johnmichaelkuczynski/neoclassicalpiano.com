import { ArrowRight, Music2 } from "lucide-react";
import { albums, singles } from "@/data/music";
import { MusicGrid } from "@/components/music-grid";
import artistPortrait from "@assets/NEW_JM_AVATAR_1786600779060.png";

// Each genre on the ticker links to a representative release.
const genreLinks: { label: string; url: string }[] = [
  {
    label: "Neoclassical Piano",
    url: "https://www.youtube.com/watch?v=Sso08uzFYnc&list=OLAK5uy_llzF0gvq_zP2V-lo5Yrb2Yi8wiGOuFB20", // Classical Neoclassical
  },
  {
    label: "A Cappella",
    url: "https://www.youtube.com/watch?v=fsoSJ7gZQ-c&list=OLAK5uy_m0u-S72KgArblJ2G0Pt8y4bSMp9qNFjS8", // Neoclassical A Cappella Volume V
  },
  {
    label: "Disco",
    url: "https://www.youtube.com/watch?v=1GRI4sF6Q8Q&list=OLAK5uy_n6WoN_AhZOgXi3pW26Sz4P7R_GiPMfD78", // Neoclassical Disco
  },
  {
    label: "Techno",
    url: "https://www.youtube.com/watch?v=0K6-v5xPcQY&list=OLAK5uy_nFSsEoI-eCe1quvTbkWjDBgHsnCj8SYr8", // Neoclassical Techno
  },
  {
    label: "Jazz",
    url: "https://www.youtube.com/watch?v=Aec1JlJcxe8&list=OLAK5uy_mqb5ZA1XqFmAX5Uzk-WnCcodEICQ29v8M", // Neoclassical Featherlight Jazz
  },
  {
    label: "Banjo",
    url: "https://www.youtube.com/watch?v=tBkxlRXGc2s&list=OLAK5uy_k2ejbmo9QWNmvdZajlhh7R4knsEZpNMK4", // Neoclassical Banjo
  },
  {
    label: "Horn",
    url: "https://www.youtube.com/watch?v=0Z_cX3gUIdc&list=OLAK5uy_lP_O76Z_tfHUykgAcS-b92hH8f00qjc8Y", // Neoclassical Horn
  },
  {
    label: "Ragtime",
    url: "https://www.youtube.com/watch?v=zG5JKcdr4BY&list=OLAK5uy_kOpkJr6bXF5NtTmzp3PehQgIKlQyEVuow", // Classical Rag
  },
];

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background selection:bg-accent selection:text-white">
      {/* Navigation / Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference text-white px-6 py-6 flex justify-between items-center pointer-events-none">
        <div className="flex items-center gap-6">
          <a
            href="mailto:zhi@zhisystems.org"
            className="font-mono text-xs uppercase tracking-widest font-bold pointer-events-auto hover:underline"
          >
            Contact Me
          </a>
          <div className="font-mono text-xs uppercase tracking-widest font-bold">
            Neoclassical Piano
          </div>
        </div>
        <div className="font-mono text-xs uppercase tracking-widest hidden md:block">
          Composer &bull; Artist
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex items-center px-6 md:px-12 lg:px-24 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-screen-2xl mx-auto w-full flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
          <div className="shrink-0">
            <img
              src={artistPortrait}
              alt="Composer Portrait"
              className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover object-top border border-foreground/10"
            />
          </div>
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] font-serif tracking-tighter uppercase mb-6">
              Neoclassical Piano
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 font-sans max-w-lg leading-relaxed mb-10">
              Albums and singles spanning neoclassical piano, a cappella,
              disco, techno, banjo, jazz, ragtime, and horn.
            </p>

            <a
              href="#albums"
              className="inline-flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
              <span className="font-mono text-sm uppercase tracking-widest font-bold group-hover:text-accent transition-colors">
                Explore the Catalog
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Marquee Divider */}
      <div className="bg-foreground text-background py-4 overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee inline-flex gap-8 items-center font-mono text-sm uppercase tracking-widest">
          {[0, 1].map((loop) => (
            <span key={loop} className="inline-flex gap-8 items-center">
              {genreLinks.map(({ label, url }) => (
                <span key={label} className="inline-flex gap-8 items-center">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    {label}
                  </a>
                  <span className="text-accent">&bull;</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Albums Section */}
      <section id="albums" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif tracking-tighter uppercase mb-4">
                Albums
              </h2>
              <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest max-w-md">
                Full-length explorations. Available primarily on YouTube.
              </p>
            </div>
            <div className="text-right">
              <span className="inline-block bg-accent text-white font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 mb-2">
                {albums.length} Releases
              </span>
            </div>
          </div>

          <MusicGrid tracks={albums} type="Album" />
        </div>
      </section>

      {/* Singles Section */}
      <section id="singles" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white border-t border-border">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif tracking-tighter uppercase mb-4">
                Singles
              </h2>
              <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest max-w-md">
                Individual works, etudes, and compositional exercises.
              </p>
            </div>
          </div>

          <MusicGrid tracks={singles} type="Single" />
        </div>
      </section>

      {/* Footer / Alternate Platforms */}
      <footer className="bg-foreground text-background py-24 px-6 md:px-12 lg:px-24 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <Music2 className="w-12 h-12 text-accent mb-8" />
          <h2 className="text-3xl md:text-5xl font-serif tracking-tighter mb-6">
            Beyond YouTube
          </h2>
          <p className="text-lg md:text-xl text-background/70 font-sans mb-12 max-w-xl mx-auto leading-relaxed">
            While the primary catalog is available on YouTube, selected works and tracks not found there are available for streaming on Amazon Music.
          </p>
          <a 
            href="https://music.amazon.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-mono text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-accent transition-colors duration-300"
          >
            Find on Amazon Music
          </a>
          
          <div className="mt-32 pt-8 border-t border-background/20 w-full flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-background/40 uppercase tracking-widest">
            <span>&copy; {new Date().getFullYear()} Neoclassical Piano.</span>
            <span>All Rights Reserved.</span>
          </div>
        </div>
      </footer>
      
      {/* Marquee Animation Styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        /* Ensure the marquee content is duplicated enough times to loop smoothly */
        .animate-marquee > * {
          flex-shrink: 0;
        }
      `}</style>
    </main>
  );
}
