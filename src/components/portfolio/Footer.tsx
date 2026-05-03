import { Linkedin, Github, Mail, Heart } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Mail, href: "mailto:zakaibaig0507@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <div className="font-semibold text-foreground">Zakia Baig</div>
          <div className="text-sm text-muted-foreground mt-1">
            Frontend Developer · UI Designer · AI Expert
          </div>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="h-10 w-10 rounded-full border border-border bg-card grid place-items-center text-muted-foreground hover:text-primary-foreground hover:bg-gradient-primary hover:border-transparent hover:-translate-y-0.5 transition-smooth"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="text-sm text-muted-foreground flex items-center gap-1.5">
          © {new Date().getFullYear()} Zakia Baig · Built with
          <Heart className="h-3.5 w-3.5 text-primary fill-primary" />
        </p>
      </div>
    </footer>
  );
}
