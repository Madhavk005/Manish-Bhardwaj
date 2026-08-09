import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "light",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <p
        className={cn(
          "flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4",
          align === "center" && "justify-center"
        )}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        {eyebrow}
      </p>
      <h2
        className={cn(
          "text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4",
          tone === "dark" ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-lg max-w-xl",
            tone === "dark" ? "text-white/60" : "text-muted",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}