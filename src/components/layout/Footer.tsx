import { Link } from "react-router-dom";
import { Youtube, BookOpen, GraduationCap, Share2, School, Linkedin } from "lucide-react";

const socialLinks = [
  { name: "YouTube", href: "https://www.youtube.com/@zineddinedadach9113", icon: Youtube },
  { name: "Goodreads", href: "https://www.goodreads.com/author/show/22056749.Zin_Eddine_Dadach", icon: BookOpen },
  { name: "ResearchGate", href: "https://www.researchgate.net/profile/Zin-Eddine-Dadach", icon: GraduationCap },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/zin-eddine-dadach-25316437b", icon: Linkedin },
  { name: "ORCID", href: "https://orcid.org/0000-0002-4318-9750", icon: Share2 },
  { name: "Google Scholar", href: "https://scholar.google.com/citations?user=k4yGhicAAAAJ&hl=en", icon: School },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Discover Islam", href: "/discover-islam" },
  { name: "Islam & Science", href: "/islam-science" },
  { name: "Blog", href: "/blog" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Decorative top border */}
      <div className="h-1 bg-accent" />

      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.svg" alt="Islam & Sciences Logo" className="h-10 w-10 rounded-full bg-white/10 p-1" />
              <h3 className="text-lg font-heading font-bold">Islam & Sciences</h3>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Dedicated to show the importance of science in Islam as a means to understand God's creation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Author & Social */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Connect</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              <strong>Prof. Zin Eddine Dadach</strong><br />
              Researcher in Islam and Science
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
                  title={link.name}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="text-sm text-primary-foreground/60 mt-4">
              You are welcome to contact me.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60 max-w-3xl mx-auto leading-relaxed">
            © {new Date().getFullYear()} Islam & Sciences. This website is a Sadaqah Jariyah dedicated to spreading knowledge. All content is free to use, share, and distribute under the Creative Commons Attribution 4.0 International License. We only ask that you credit the source so others may find the original works.
          </p>
        </div>
      </div>
    </footer>
  );
}
