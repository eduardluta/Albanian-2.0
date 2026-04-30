import { SOCIAL_ROWS, type SocialRow, type SocialPost } from "@/data/netflix-petition";

const PLATFORM_ICON: Record<SocialRow["plat"], React.ReactNode> = {
  ig: (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  ),
  li: (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
    </svg>
  ),
  fb: (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor">
      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.408.593 24 1.325 24h11.494v-9.294H9.692v-3.622h3.127V8.413c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.592 1.323-1.324V1.325C24 .593 23.407 0 22.675 0z" />
    </svg>
  ),
};

const PLATFORM_AV_BG: Record<SocialRow["plat"], string> = {
  ig: "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
  li: "#0A66C2",
  fb: "#1877F2",
};

const PLATFORM_TEXT_COLOR: Record<SocialRow["plat"], string> = {
  ig: "#E1306C",
  li: "#0A66C2",
  fb: "#1877F2",
};

const PLATFORM_CHECK_BG: Record<SocialRow["plat"], string> = {
  ig: "#E1306C",
  li: "#1877F2",
  fb: "#1877F2",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

function PostCard({ post, plat }: { post: SocialPost; plat: SocialRow["plat"] }) {
  return (
    <article className="bg-[#111114] border border-rule rounded-md p-3.5 flex flex-col gap-2.5 text-[13px]">
      <header className="flex items-center gap-2.5">
        <div
          className="shrink-0 w-[30px] h-[30px] rounded-full flex items-center justify-center text-[10px] font-extrabold text-paper"
          style={{ background: PLATFORM_AV_BG[plat] }}
        >
          {initials(post.name)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[12px] font-bold text-paper flex items-center gap-1.5 truncate">
            <span className="truncate">{post.name}</span>
            {post.verified ? (
              <span
                className="shrink-0 inline-flex items-center justify-center w-3 h-3 rounded-full text-paper text-[8px] font-extrabold"
                style={{ background: PLATFORM_CHECK_BG[plat] }}
                title="Verified"
                aria-label="Verified"
              >
                ✓
              </span>
            ) : null}
          </div>
          <div className="text-[10px] text-grey-5 truncate">{post.handle}</div>
        </div>
      </header>
      <div className="text-[12.5px] leading-[1.45] text-[#e8e8ea]">{post.body}</div>
      {post.image ? (
        <div
          className={`relative w-full ${plat === "ig" ? "aspect-square" : "aspect-[16/10]"} rounded-sm overflow-hidden flex items-center justify-center border border-white/[0.06]`}
          style={{ background: post.image.tone }}
        >
          <div
            className={`font-display leading-none text-paper/[0.92] [text-shadow:0_2px_12px_rgba(0,0,0,0.4)] ${
              plat === "ig" ? "text-[48px]" : "text-[38px]"
            }`}
          >
            {post.image.glyph}
          </div>
          {post.image.label ? (
            <div className="absolute left-2 right-2 bottom-2 text-[9px] tracking-[0.1em] uppercase text-paper font-bold [text-shadow:0_1px_4px_rgba(0,0,0,0.7)]">
              {post.image.label}
            </div>
          ) : null}
        </div>
      ) : null}
      <footer className="flex items-center gap-2.5 text-[10px] text-grey-5 pt-2 border-t border-rule flex-wrap">
        <span>♡ {post.stats.likes}</span>
        <span>⌯ {post.stats.comments}</span>
        {post.stats.shares ? <span>↪ {post.stats.shares}</span> : null}
        {post.stats.reposts ? <span>↻ {post.stats.reposts}</span> : null}
        <span className="ml-auto text-[9px] tracking-[0.1em] uppercase text-grey-4 font-bold">
          {post.time}
        </span>
      </footer>
    </article>
  );
}

export default function SocialWall() {
  return (
    <section
      className="py-16 md:py-20 border-t border-rule"
      style={{ background: "#080808" }}
    >
      <div className="wrap">
      <div className="flex justify-between items-end mb-12 flex-wrap gap-6">
        <div>
          <div className="text-[11px] tracking-[0.2em] uppercase text-grey-5 font-bold mb-4 inline-flex items-center gap-3">
            <span className="w-6 h-px bg-red" aria-hidden />
            06 · Social wall
          </div>
          <h2
            className="font-display leading-[0.95] tracking-[0.005em] mt-2"
            style={{ fontSize: "clamp(48px, 7vw, 88px)" }}
          >
            #NETFLIXSHQIP
          </h2>
          <div className="mt-3 text-[13px] text-grey-5 tracking-[0.04em]">
            Live posts from the hashtag · Instagram · LinkedIn · Facebook · updated every 60s
          </div>
        </div>
        <div className="flex gap-8">
          {[
            ["2.4M", "Hashtag impressions"],
            ["12,840", "Posts this week"],
            ["147", "Verified voices"],
          ].map(([v, k]) => (
            <div key={k}>
              <div
                className="font-display text-paper leading-none tracking-[0.01em]"
                style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
              >
                {v}
              </div>
              <div className="text-[10px] tracking-[0.16em] uppercase text-grey-5 font-bold mt-2">
                {k}
              </div>
            </div>
          ))}
        </div>
      </div>

      {SOCIAL_ROWS.map((row) => (
        <div key={row.plat} className="mb-8 last:mb-0">
          <div className="flex items-center gap-3 mb-3.5">
            <span
              className="inline-flex items-center justify-center"
              style={{ color: PLATFORM_TEXT_COLOR[row.plat] }}
            >
              {PLATFORM_ICON[row.plat]}
            </span>
            <span className="text-[11px] tracking-[0.18em] uppercase font-extrabold text-paper">
              {row.label}
            </span>
            <span className="flex-1 h-px bg-rule" />
            <span className="text-[10px] tracking-[0.14em] uppercase text-grey-5 font-bold">
              {row.posts.length} posts
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2.5">
            {row.posts.map((post, i) => (
              <PostCard key={i} post={post} plat={row.plat} />
            ))}
          </div>
        </div>
      ))}
      </div>
    </section>
  );
}
