export function ShortsEmbed({
  videoId,
  title = "YouTube Short",
}: {
  videoId: string;
  title?: string;
}) {
  return (
    <div className="relative aspect-[9/16] w-full max-w-[360px] overflow-hidden rounded-[28px] border border-border shadow-[0_10px_40px_rgba(0,0,0,.04)] group-hover:shadow-[0_25px_70px_rgba(0,0,0,.08)] transition-shadow duration-400 mx-auto">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}