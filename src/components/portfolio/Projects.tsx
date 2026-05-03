import { ArrowUpRight, Bot, Globe, ShoppingBag, type LucideIcon } from "lucide-react";
import { Section } from "./Section";

interface Project {
  icon: LucideIcon;
  title: string;
  description: string;
  tech: string[];
  accent: string;
}

const projects: Project[] = [
  {
    icon: Bot,
    title: "Smart Chatbot System",
    description:
      "An intelligent AI-powered chatbot that automates customer support and engages users with natural conversations using advanced prompt engineering.",
    tech: ["OpenAI", "Prompt Engineering", "React", "Node.js"],
    accent: "from-blue-500/30 to-indigo-500/20",
  },
  {
    icon: Globe,
    title: "Responsive Portfolio Website",
    description:
      "A modern, fully responsive portfolio with premium animations, dark theme, and SEO-optimized architecture for personal branding.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    accent: "from-indigo-500/30 to-violet-500/20",
  },
  {
    icon: ShoppingBag,
    title: "eCommerce Website",
    description:
      "Full-featured online store with product catalog, cart, secure checkout, and admin dashboard built with modern web stack.",
    tech: ["Next.js", "Stripe", "Tailwind CSS", "Database"],
    accent: "from-cyan-500/30 to-blue-500/20",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title={<>Featured <span className="text-gradient">Projects</span></>}
      intro="Here are some of my selected projects that showcase my skills in web development and AI solutions."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(({ icon: Icon, title, description, tech, accent }) => (
          <article
            key={title}
            className="group relative bg-gradient-card border border-border rounded-2xl overflow-hidden shadow-card hover:border-primary/50 hover:-translate-y-1.5 transition-smooth"
          >
            <div className={`relative h-44 bg-gradient-to-br ${accent} grid place-items-center overflow-hidden`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_oklch(0.7_0.18_255_/_0.3),transparent_60%)]" />
              <div className="relative h-20 w-20 rounded-2xl bg-background/40 backdrop-blur-md border border-border/50 grid place-items-center group-hover:scale-110 group-hover:rotate-6 transition-smooth">
                <Icon className="h-10 w-10 text-foreground" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-xl font-semibold">{title}</h3>
                <a
                  href="#contact"
                  aria-label={`View ${title}`}
                  className="h-9 w-9 rounded-full bg-background border border-border grid place-items-center text-muted-foreground hover:bg-gradient-primary hover:text-primary-foreground hover:border-transparent transition-smooth shrink-0"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
              <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
