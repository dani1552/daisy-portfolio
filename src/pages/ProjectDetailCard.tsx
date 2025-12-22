import { useMemo, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HiCalendar } from "react-icons/hi";
import { PROJECTS } from "@/constants/projects";
import type { Project } from "@/types/projects";

export default function ProjectDetailCard() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const detail = useMemo(
    () => PROJECTS.find((project: Project) => project.slug === slug),
    [slug],
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!detail) {
    return (
      <main className="min-h-screen bg-[var(--color-bg)] text-white flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <p className="text-white/70">요청하신 페이지를 찾을 수 없습니다.</p>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20 transition"
          >
            홈으로 돌아가기
          </button>
        </div>
      </main>
    );
  }

  const backgroundImage = detail.backgroundImage ?? "/images/profile.jpg";

  return (
    <main className="min-h-screen text-white relative overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-4 py-8 sm:py-12">
        <div className="w-full space-y-6 sm:space-y-8">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="relative z-10 bg-[var(--color-bg)] text-sm text-white/70 font-semibold hover:text-white transition"
          >
            ← 뒤로가기
          </button>

          <section className="relative rounded-lg overflow-hidden min-h-[300px] sm:min-h-[350px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${backgroundImage})`,
              }}
            />

            <div className="flex">
              <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-10 space-y-2 sm:space-y-3">
                <div className="space-y-1.5 sm:space-y-2">
                  <h1 className="text-[clamp(1rem,1.8vw,1.3rem)] sm:text-[clamp(1.2rem,2.2vw,1.5rem)] font-black text-white leading-tight">
                    {detail.title}
                  </h1>
                  <p className="text-[clamp(0.75rem,1.1vw,0.9rem)] sm:text-[clamp(0.8rem,0.95vw,0.95rem)] text-white/90 font-medium">
                    {detail.description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 text-white/60 text-[10px] sm:text-xs font-medium">
                  <HiCalendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  <span>기간 | {detail.period}</span>
                </div>

                {detail.stacks && detail.stacks.length > 0 && (
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {detail.stacks.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 sm:px-3 py-0.5 sm:py-1 font-bold rounded-lg bg-white/10 text-white text-[10px] sm:text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-10 flex gap-2 sm:gap-3">
              <a
                href="https://github.com/dani1552"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full backdrop-blur-sm transition"
              >
                <img
                  src="/icons/github-icon.png"
                  alt="GitHub"
                  className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
                />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full backdrop-blur-sm transition "
              >
                <img
                  src="/icons/youtube-logo.png"
                  alt="YouTube"
                  className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
                />
              </a>
            </div>
          </section>

          <section className="rounded-lg border border-white/10 bg-white/5 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl overflow-hidden">
            <div className="p-6 sm:p-10 space-y-4 sm:space-y-5 bg-black/35">
              {detail.teamMembers && (
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <div className="text-white font-bold text-[clamp(0.8rem,1vw,0.95rem)] sm:text-[clamp(0.85rem,0.9vw,1rem)] min-w-[80px] sm:min-w-[100px]">
                    개발 인원
                  </div>
                  <div className="text-white text-[clamp(0.75rem,1.2vw,0.9rem)] sm:text-[clamp(0.8rem,0.9vw,0.95rem)]">
                    {detail.teamMembers.split(/(Frontend)/).map((part, index) =>
                      part === "Frontend" ? (
                        <span
                          key={index}
                          className="relative inline-block"
                          style={{
                            background:
                              "linear-gradient(to bottom, transparent 0%, transparent 48%, rgba(255, 182, 193, 0.5) 48%, rgba(255, 182, 193, 0.5) 52%, transparent 52%, transparent 100%)",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "bottom",
                            backgroundSize: "100% 0.35em",
                            paddingBottom: "0.15em",
                          }}
                        >
                          {part}
                        </span>
                      ) : (
                        <span key={index}>{part}</span>
                      ),
                    )}
                  </div>
                </div>
              )}

              {detail.contribution && (
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <div className="text-white font-bold text-[clamp(0.8rem,1vw,0.95rem)] sm:text-[clamp(0.85rem,0.9vw,1rem)] min-w-[80px] sm:min-w-[100px]">
                    기여도
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="text-white text-[clamp(0.75rem,1.2vw,0.9rem)] sm:text-[clamp(0.8rem,0.9vw,0.95rem)]">
                      {detail.contribution.percentage}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {detail.contribution.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 rounded-lg border border-blue-400/50 text-blue-400 bg-white text-[clamp(0.75rem,1.2vw,0.9rem)] sm:text-[clamp(0.8rem,0.9vw,0.95rem)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {detail.introduction && (
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <div className="text-white font-bold text-[clamp(0.8rem,1vw,0.95rem)] sm:text-[clamp(0.85rem,0.9vw,1rem)] min-w-[80px] sm:min-w-[100px]">
                    소개
                  </div>
                  <div className="text-white text-[clamp(0.75rem,1.2vw,0.9rem)] sm:text-[clamp(0.8rem,0.9vw,0.95rem)] leading-relaxed">
                    <p dangerouslySetInnerHTML={{ __html: detail.introduction }} />
                  </div>
                </div>
              )}

              {detail.video && (
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <div className="text-white font-bold text-[clamp(0.8rem,1vw,0.95rem)] sm:text-[clamp(0.85rem,0.9vw,1rem)] min-w-[80px] sm:min-w-[100px]">
                    시연영상
                  </div>
                  <div className="flex-1">
                    <video
                      controls
                      preload="metadata"
                      playsInline
                      className="w-full rounded-2xl bg-black/50"
                      style={{ maxHeight: "600px" }}
                    >
                      <source src={detail.video} type="video/mp4" />
                      브라우저가 비디오 태그를 지원하지 않습니다.
                    </video>
                  </div>
                </div>
              )}

              {detail.images && detail.images.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-6">
                  {detail.images.map((image, index) => (
                    <div
                      key={index}
                      className="group relative aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-500 hover:border-white/20 hover:shadow-[0_16px_45px_rgba(0,0,0,0.35)]"
                    >
                      <img
                        src={image}
                        alt={`프로젝트 이미지 ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="pointer-events-none absolute inset-[-40%] bg-[conic-gradient(from_120deg_at_50%_50%,rgba(255,255,255,0.08),rgba(255,255,255,0),rgba(255,255,255,0.12),rgba(255,255,255,0))] opacity-60 blur-3xl transition-opacity duration-700 group-hover:opacity-90" />
                      <div className="pointer-events-none absolute inset-px rounded-[0.4rem] bg-gradient-to-br from-white/15 via-transparent to-white/5 opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
