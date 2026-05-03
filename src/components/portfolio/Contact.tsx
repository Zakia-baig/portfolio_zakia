import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import { toast } from "sonner";

const contactItems = [
  { icon: Mail, label: "Email", value: "zakaibaig0507@gmail.com", href: "mailto:zakaibaig0507@gmail.com" },
  { icon: Phone, label: "Phone", value: "0331 2610608", href: "tel:+923312610608" },
  { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", value: "View on GitHub", href: "https://github.com" },
];

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Message sent! I'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  }

  return (
    <Section
      id="contact"
      eyebrow="Get In Touch"
      title={<>Contact <span className="text-gradient">Me</span></>}
      intro="Feel free to get in touch with me for any project or collaboration."
    >
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {contactItems.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex items-center gap-4 p-5 bg-gradient-card border border-border rounded-2xl shadow-card hover:border-primary/50 hover:-translate-y-0.5 transition-smooth"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center shadow-glow shrink-0 group-hover:scale-110 transition-smooth">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
                <div className="text-foreground font-medium truncate">{value}</div>
              </div>
            </a>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="lg:col-span-3 bg-gradient-card border border-border rounded-2xl p-7 sm:p-9 shadow-card space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field id="name" label="Your Name" type="text" placeholder="Jane Doe" required />
            <Field id="email" label="Email Address" type="email" placeholder="jane@example.com" required />
          </div>
          <Field id="subject" label="Subject" type="text" placeholder="Project inquiry" />
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground/90 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none transition-smooth focus:border-primary focus:bg-background focus:ring-4 focus:ring-primary/20 resize-none"
            />
          </div>
          <Button
            type="submit"
            disabled={submitting}
            size="lg"
            className="w-full bg-gradient-primary text-primary-foreground border-0 shadow-glow hover:opacity-90"
          >
            {submitting ? "Sending..." : <>Send Message <Send className="h-4 w-4" /></>}
          </Button>
        </form>
      </div>
    </Section>
  );
}

function Field({
  id,
  label,
  ...rest
}: { id: string; label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground/90 mb-2">
        {label}
      </label>
      <input
        id={id}
        name={id}
        {...rest}
        className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none transition-smooth focus:border-primary focus:bg-background focus:ring-4 focus:ring-primary/20"
      />
    </div>
  );
}
