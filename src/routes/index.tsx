import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zakia Baig — Frontend Developer, UI Designer & AI Expert" },
      {
        name: "description",
        content:
          "Zakia Baig — Frontend Developer, UI Designer, and AI Prompt Engineer building modern responsive websites and intelligent chatbot solutions.",
      },
      { property: "og:title", content: "Zakia Baig — Frontend Developer & AI Expert" },
      {
        property: "og:description",
        content:
          "Modern responsive websites, premium UI design, and AI chatbot solutions by Zakia Baig.",
      },
      { property: "og:image", content: "/images/profile.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/images/profile.jpg" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
