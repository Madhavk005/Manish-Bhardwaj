import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "outline" | "white";
  external?: boolean;
  className?: string;
}

const baseStyles =
  "group/btn relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-7 py-3 sm:px-8 sm:py-4 rounded-full font-medium transition-all duration-300 hover:scale-[1.02]";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  dark: "bg-white text-[#171717] shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:bg-primary hover:text-white hover:shadow-[0_25px_70px_rgba(255,90,31,0.25)]",
  outline:
    "bg-transparent border border-border text-foreground shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:bg-white hover:text-[#171717] hover:border-white hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)]",
  white:
    "bg-white text-[#171717] shadow-[0_10px_40px_rgba(255,255,255,0.05)] hover:bg-primary hover:text-white hover:shadow-[0_25px_70px_rgba(255,90,31,0.2)]",
};

export function Button({
  href,
  children,
  variant = "dark",
  external,
  className,
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], className);
  const shine = (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
    />
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cn(classes, "group/btn")}>
        {shine}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(classes, "group/btn")}>
      {shine}
      {children}
    </Link>
  );
}