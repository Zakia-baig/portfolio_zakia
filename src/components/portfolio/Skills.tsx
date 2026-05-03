import {
  Code2, Palette, Users, Brain, BookOpen,
  type LucideIcon,
} from "lucide-react";
import { Section } from "./Section";

interface SkillCategory {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    icon: Code2,
    title: "Technical Skills",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Git & GitHub"],
  },
  {
    icon: Palette,
    title: "Design Skills",
    skills: ["UI/UX Design", "Responsive Layouts", "Figma", "Prototyping", "Color Theory"],
  },
  {
    icon: Users,
    title: "Professional Skills",
    skills: ["Communication", "Problem Solving", "Leadership", "Time Management", "Mentoring"],
  },
  {
    icon: Brain,
    title: "AI & Technology",
    skills: ["Prompt Engineering", "Chatbot Development", "AI Integration", "LLM APIs", "Automation"],
  },
  {
    icon: BookOpen,
    title: "Teaching Skills",
    skills: ["Curriculum Design", "Public Speaking", "Student Engagement", "20+ Years Experience"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="My Expertise"
      title={<>Skills & <span className="text-gradient">capabilities</span></>}
      intro="A blend of technical mastery, creative design, and decades of teaching wisdom."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(({ icon: Icon, title, skills }) => (
          <div
            key={title}
            className="group relative bg-gradient-card border border-border rounded-2xl p-7 shadow-card hover:border-primary/50 hover:-translate-y-1 transition-smooth overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-smooth" />
            <div className="relative">
              <div className="h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center shadow-glow mb-5">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{title}</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <li
                    key={s}
                    className="text-xs px-3 py-1.5 rounded-full bg-background/60 border border-border text-foreground/80 hover:border-primary/50 hover:text-foreground transition-smooth"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}