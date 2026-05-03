import { Code2, Palette, Bot, ShoppingCart, ArrowRight, type LucideIcon } from "lucide-react";
import { Section } from "./Section";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Code2,
    title: "Website Development",
    description: "Modern, fast, and responsive websites built with the latest web technologies and best practices.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed for clarity, conversion, and an exceptional user experience.",
  },
  {
    icon: Bot,
    title: "Chatbot Development",
    description: "Smart AI chatbots that automate support, capture leads, and engage users 24/7 for your business.",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Development",
    description: "Full-featured online stores with secure payments, product management, and conversion-focused design.",
  },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="What I Do"
      title={<>My <span className="text-gradient">Services</span></>}
      intro="I offer high-quality web development and AI-based solutions to help businesses grow and succeed in the digital world."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group relative bg-gradient-card border border-border rounded-2xl p-7 shadow-card hover:border-primary/50 hover:-translate-y-1 transition-smooth"
          >
            <div className="h-14 w-14 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow mb-5 group-hover:scale-110 transition-smooth">
              <Icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm text-primary font-medium group/link"
            >
              Learn more
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
            </a>
          </div>
        ))}
      </div>

      <p className="mt-14 text-center text-lg text-foreground/90 italic">
        "Let's work together to bring your ideas to life!"
      </p>
    </Section>
  );
}
