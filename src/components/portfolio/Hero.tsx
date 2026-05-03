import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const profileImg = "/images/profile.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-hero pt-32 md:pt-40 pb-20 md:pb-28"
    >
      {/* decorative shapes */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute top-1/2 -right-40 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.7_0.18_255_/_0.1),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image (mobile: top) */}
        <div className="order-1 lg:order-2 flex justify-center animate-fade-in">
          <div className="relative group">
            <div className="absolute -inset-4 rounded-full bg-gradient-primary blur-2xl opacity-40 group-hover:opacity-70 transition-smooth" />
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-[26rem] lg:w-[26rem] rounded-full p-1.5 bg-gradient-primary shadow-elegant animate-glow-pulse">
              <img
                src={profileImg}
                alt="Zakia Baig — Frontend Developer & AI Expert"
                width={768}
                height={768}
                className="h-full w-full rounded-full object-cover border-4 border-background transition-smooth group-hover:scale-[1.03]"
              />
            </div>
            <div className="absolute -bottom-4 -right-2 bg-card border border-border rounded-2xl px-4 py-2.5 shadow-card flex items-center gap-2 animate-float">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">AI Expert</span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="order-2 lg:order-1 text-center lg:text-left animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Open to new opportunities
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Hi, I'm <span className="text-gradient">Zakia Baig</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl font-medium text-foreground/90">
            Frontend Developer · UI Designer · AI Expert & Prompt Engineer
          </p>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
            I am a passionate Web Developer and AI Expert who creates modern,
            responsive, and user-friendly websites. As a Prompt Engineer, I build
            smart AI solutions and chatbots that help businesses automate, grow,
            and succeed.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground border-0 shadow-glow group"
            >
              <a href="#contact">
                Hire Me
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border bg-card/50 hover:bg-card backdrop-blur"
            >
              <a href="#projects">
                <Download className="h-4 w-4" />
                View Projects
              </a>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
            {[
              { v: "20+", l: "Years Teaching" },
              { v: "50+", l: "Projects" },
              { v: "AI", l: "Specialist" },
            ].map((s) => (
              <div key={s.l} className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}