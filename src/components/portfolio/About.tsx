import { GraduationCap, Sparkles, Code2, Brain } from "lucide-react";
import { Section } from "./Section";

const highlights = [
  { icon: GraduationCap, label: "20+ Years Teaching at College & University" },
  { icon: Brain, label: "Master's in Economics + AI Qualification" },
  { icon: Code2, label: "Web Development & Modern UI Design" },
  { icon: Sparkles, label: "Chatbots & Prompt Engineering" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title={<>Educator turned <span className="text-gradient">tech innovator</span></>}
    >
      <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-20 rounded-3xl" />
            <div className="relative bg-gradient-card border border-border rounded-3xl p-8 shadow-card">
              <div className="grid grid-cols-2 gap-4">
                {highlights.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="bg-background/50 border border-border rounded-2xl p-4 hover:border-primary/50 transition-smooth"
                  >
                    <div className="h-10 w-10 rounded-xl bg-gradient-primary grid place-items-center mb-3 shadow-glow">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <p className="text-sm text-foreground/90 leading-snug">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg">
          <p>
            I am a dedicated and experienced professional with{" "}
            <span className="text-foreground font-semibold">over 20 years of teaching experience</span>{" "}
            at college and university levels. My strong academic background includes a{" "}
            <span className="text-foreground font-semibold">Master's degree in Economics</span>, a B.Ed degree, and a professional qualification in{" "}
            <span className="text-foreground font-semibold">Artificial Intelligence</span>.
          </p>
          <p>
            Alongside my teaching career, I have developed expertise in{" "}
            <span className="text-foreground font-semibold">web development, UI design, and AI-based solutions</span>. I specialize in creating modern, responsive websites and intelligent systems, including chatbots and prompt engineering solutions.
          </p>
          <p>
            My unique combination of teaching experience and technical skills allows me to understand problems deeply and deliver clear, effective, and user-focused solutions. I am passionate about helping individuals and businesses grow through technology.
          </p>
          <p>
            My goal is to continuously evolve as a developer and AI expert while providing high-quality digital solutions that create real impact.
          </p>
        </div>
      </div>
    </Section>
  );
}