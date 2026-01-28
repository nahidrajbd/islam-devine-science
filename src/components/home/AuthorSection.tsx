import {
  Sparkles,
  BookOpen,
  Youtube,
  FlaskConical,
  Image,
  Presentation,
  GraduationCap,
  Fingerprint,
  School,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import zinPhoto from "@/assets/zin.jpg";


const socialLinks = [
  {
    icon: Youtube,
    href: "https://www.youtube.com/channel/UCBXO6T0L6aSnLq2Pi09V4_Q",
    label: "YouTube",
  },
  {
    icon: BookOpen,
    href: "https://www.goodreads.com/author/show/19717864.Zin_Eddine_Dadach",
    label: "Goodreads",
  },
  {
    icon: FlaskConical,
    href: "https://www.researchgate.net/profile/Zin-Eddine-Dadach",
    label: "ResearchGate",
  },
  {
    icon: Image,
    href: "https://www.pinterest.com/zdadachzin/",
    label: "Pinterest",
  },
  {
    icon: Presentation,
    href: "https://www.slideshare.net/zdadach",
    label: "SlideShare",
  },
  {
    icon: GraduationCap,
    href: "https://independent.academia.edu/ZDadach",
    label: "Academia",
  },
  {
    icon: Fingerprint,
    href: "https://orcid.org/0000-0003-0635-2886",
    label: "ORCID",
  },
  {
    icon: School,
    href: "https://scholar.google.com/citations?user=k4yGhicAAAAJ&hl=en",
    label: "Google Scholar",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/zin-eddine-dadach-25316437b",
    label: "LinkedIn",
  },
];

export function AuthorSection() {
  return (
    <div className="space-y-8">
      {/* Quranic Opening */}
      {/* Quranic Opening */}
      <div className="text-center space-y-4 px-4 py-2">
        <div className="flex items-center justify-center gap-2 text-accent">
          <span className="text-2xl">۞</span>
          <span className="text-xs font-medium uppercase tracking-widest">Quran 10:3</span>
          <span className="text-2xl">۞</span>
        </div>
        <blockquote className="quran-verse text-foreground/90 leading-relaxed text-lg font-serif italic">
          "Surely your Lord is Allah, Who created the heavens and the earth in six days, then established Himself on the Throne (of His Dominion), governing all affairs of the universe. None may intercede with Him except after obtaining His leave.Such is Allah, your Lord; do therefore serve Him.Will you not take heed?"
        </blockquote>
        <div className="w-24 h-0.5 mx-auto bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      </div>

      {/* Author Welcome */}
      <Card className="border-2 border-primary/20">
        <CardHeader className="text-center pb-2">
          <CardTitle className="font-heading text-2xl">Welcome</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          {/* Author Photo */}
          <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-accent/30 shadow-lg">
            <img
              src={zinPhoto}
              alt="Prof. Zin Eddine Dadach"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-heading text-xl font-semibold text-primary">
              Prof. Zin Eddine Dadach
            </h3>
            <p className="text-sm text-muted-foreground">
              Researcher in Islam and Science
            </p>
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed">
            "The Holy Quran offers spiritual guidance and uses images, not the technical language of a science textbook; science is seen as a tool, not an end in itself."
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                title={link.label}
              >
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Islamization of Sciences - Repositioned */}
      <Card className="border-2 border-primary/20">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-accent" />
            <CardTitle className="font-heading text-lg">The Divine Science</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-foreground/80 leading-relaxed">
          <p>
            Allah (SWT) created the universe and decreed upon it the laws by which the natural order functions.
          </p>
          <p>
            The Beautiful Name <strong className="text-primary">Al Aleem</strong> (SWT) could be translated as "The Scientist" Who created the universe with His Divine Science.
          </p>
          <p>
            <strong className="text-primary">Tawheed-based science</strong> recognizes Allah in all aspects of creation. Knowledge without Tawhid leads to neglect of our purpose.
          </p>
          <div className="pt-2">
            <p className="text-xs italic text-muted-foreground border-l-2 border-accent pl-2">
              "And that man attains only what he strives for" — Quran 53:39
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
