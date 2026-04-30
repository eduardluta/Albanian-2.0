import Image from "next/image";
import { POSTER_AUDIO_TAGS, type NetflixTitle } from "@/data/netflix-petition";

export default function PosterCard({
  title,
  flagText = "No Albanian",
}: {
  title: NetflixTitle;
  flagText?: string;
}) {
  return (
    <div className="shrink-0 w-[220px] sm:w-[240px] bg-[#15151a] rounded-md overflow-hidden border-2 border-red flex flex-col">
      <div className="relative h-[300px] sm:h-[340px] bg-black overflow-hidden">
        <Image
          src={title.img}
          alt={title.t}
          width={342}
          height={513}
          className="w-full h-full object-cover block"
          loading="lazy"
          unoptimized
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.85) 100%)",
          }}
          aria-hidden
        />
        <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-nflx text-paper text-[9px] font-extrabold tracking-[0.14em] uppercase pl-1 pr-2 py-1 rounded-sm">
          <span className="inline-flex items-center justify-center w-[18px] h-[18px] bg-paper text-nflx text-[11px] font-extrabold rounded-sm">
            10
          </span>
          <span>Top in Albania</span>
        </div>
        <span className="absolute top-2 right-2 bg-red text-paper text-[9px] font-extrabold tracking-[0.14em] uppercase px-2 py-1 rounded shadow-[0_4px_14px_rgba(0,0,0,0.6)]">
          {flagText}
        </span>
      </div>
      <div className="px-3.5 pt-3.5 pb-4 flex flex-col gap-2">
        <div className="flex flex-wrap gap-2 items-center text-[11px] text-[#aaa]">
          <span className="text-[#46d369] font-bold">98% Match</span>
          <span className="px-1.5 py-px border border-white/30 text-[10px] tracking-[0.04em]">
            {title.rt}
          </span>
          <span>{title.y}</span>
          <span className="px-1.5 py-px border border-white/[0.18] text-[10px] text-[#bbb]">
            HD
          </span>
          <span>{title.meta}</span>
        </div>
        <div className="text-[9px] tracking-[0.16em] uppercase text-[#888] font-bold mt-1">
          Audio · 33 langs available
        </div>
        <div className="flex flex-wrap gap-1">
          {POSTER_AUDIO_TAGS.map((a) => (
            <span
              key={a}
              className="text-[10px] px-1.5 py-0.5 bg-white/[0.06] rounded-sm text-[#ccc] font-semibold"
            >
              {a}
            </span>
          ))}
          <span className="text-[10px] px-1.5 py-0.5 bg-red/[0.18] rounded-sm text-red font-extrabold line-through">
            SQ
          </span>
        </div>
      </div>
    </div>
  );
}
