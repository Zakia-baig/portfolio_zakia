import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, intro, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("relative py-20 md:py-28 scroll-mt-24", className)}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          {eyebrow && (
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {title}
          </h2>
          {intro && (
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {intro}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}