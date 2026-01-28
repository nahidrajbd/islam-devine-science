import {
  BookOpen,
  Compass,
  Sparkles,
  Moon,
  Atom,
  GraduationCap,
  FileText,
  Star
} from "lucide-react";
import zinPresentingImg from "@/assets/zin-presenting.jpg";
import greenDomeImg from "@/assets/green_dome.jpg";
import quranImg from "@/assets/quran_revelation.jpg";
import scienceCoverImg from "@/assets/islam_science_cover.jpg";
import cosmosImg from "@/assets/cosmos_nature.jpg";
import socialImg from "@/assets/social_sciences_education.jpg";
import blogImg from "@/assets/photo_for_blog_articles.jpg";
import { Layout } from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { NavigationCard } from "@/components/home/NavigationCard";
import { AuthorSection } from "@/components/home/AuthorSection";
import { FeaturedVideo } from "@/components/home/FeaturedVideo";

const navigationItems = [
  {
    title: "About",
    description: "Learn about Prof. Zin Eddine Dadach's journey, research, and dedication to Islamic knowledge.",
    href: "/about",
    icon: BookOpen,
    imageUrl: zinPresentingImg,
  },
  {
    title: "Discover Islam",
    description: "Explore the fundamentals: Quran, Sunnah, Tajweed, and the Beautiful Names of Allah.",
    href: "/discover-islam",
    icon: Compass,
    imageUrl: quranImg,
  },
  {
    title: "Islam & Science",
    description: "Understanding the harmony between Islamic wisdom and scientific inquiry.",
    href: "/islam-science",
    icon: Sparkles,
    imageUrl: scienceCoverImg,
  },
  {
    title: "Prophet Muhammad (SAW)",
    description: "Teachings, methods, and wisdom of the beloved Prophet.",
    href: "/prophet-muhammad",
    icon: Moon,
    imageUrl: greenDomeImg,
  },
  {
    title: "Divine Forces & Laws",
    description: "Exploring the signs of Allah in nature and the laws governing creation.",
    href: "/divine-forces",
    icon: Star,
    imageUrl: cosmosImg,
  },
  {
    title: "Natural Sciences",
    description: "Mathematics, Physics, Chemistry, Medicine, Zoology, Botany, Astronomy, Geology, and Oceanography through an Islamic lens.",
    href: "/sciences",
    icon: Atom,
    imageUrl: scienceCoverImg,
  },
  {
    title: "Social Sciences",
    description: "Islamic educational models and perspectives on society.",
    href: "/social-sciences",
    icon: GraduationCap,
    imageUrl: socialImg,
  },
  {
    title: "Blogs & Articles",
    description: "Collection of published articles on Islam, science, and spirituality.",
    href: "/blog",
    icon: FileText,
    imageUrl: blogImg,
  },
];

import { FeaturedBooks } from "@/components/home/FeaturedBooks";
import { HeroVideo } from "@/components/home/HeroVideo";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Islam & Sciences | Divine Science & The Islamic Golden Age"
        description="Explore the harmony between Islam and Science. A resource for Tawheed-based knowledge, the scientific heritage of Islamic civilization, and Divine Laws."
      />

      {/* Full Width Video Hero */}
      <HeroVideo />

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Side - Navigation Cards (TV Screens) */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="inline-block w-1 h-6 bg-accent rounded-full" />
                Explore Knowledge
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {navigationItems.map((item) => (
                  <NavigationCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    href={item.href}
                    icon={item.icon}
                    imageUrl={item.imageUrl}
                  />
                ))}
              </div>
            </div>

            {/* Right Side - Author Section */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <AuthorSection />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <FeaturedVideo
        videoId="nN3PU35fhLc"
        title="Watch: Islam & Sciences"
      />

      {/* featured books section */}
      <FeaturedBooks />
    </Layout>
  );
};

export default Index;
