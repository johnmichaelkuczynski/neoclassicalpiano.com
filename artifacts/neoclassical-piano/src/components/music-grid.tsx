import { Play } from "lucide-react";
import { type Track } from "@/data/music";

interface MusicGridProps {
  tracks: Track[];
  type: "Album" | "Single";
}

export function MusicGrid({ tracks, type }: MusicGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
      {tracks.map((track, idx) => (
        <a
          key={track.youtubeId}
          href={track.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <div className="relative aspect-video overflow-hidden bg-muted">
            {/* The YouTube hqdefault is 480x360 (4:3), this aspect-video container 
                with object-cover naturally crops the top/bottom black bars out! */}
            <img
              src={`https://img.youtube.com/vi/${track.youtubeId}/hqdefault.jpg`}
              alt={track.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500 ease-out">
                <Play className="w-5 h-5 ml-1" fill="currentColor" />
              </div>
            </div>
            
            <div className="absolute top-3 left-3 bg-background/95 backdrop-blur-sm px-2 py-1 text-[10px] uppercase font-mono tracking-widest text-foreground font-bold">
              {type} {(idx + 1).toString().padStart(2, '0')}
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-1">
            <h3 className="font-serif text-lg leading-tight group-hover:text-accent transition-colors duration-300">
              {track.title}
            </h3>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mt-1">
              Listen on YouTube
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
