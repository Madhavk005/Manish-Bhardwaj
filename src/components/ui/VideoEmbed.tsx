export function VideoEmbed({ videoId }: { videoId: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[28px] border border-border shadow-[0_10px_40px_rgba(0,0,0,.04)] group-hover:shadow-[0_25px_70px_rgba(0,0,0,.08)] transition-shadow duration-400 mx-auto">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Video"
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
