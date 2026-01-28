import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { BlogCard } from "@/components/shared/BlogCard";

const blogPosts = [
  {
    title: "THE BEAUTIFUL NAMES OF ALLAH (SWT)",
    excerpt: "Knowing the meaning of the Beautiful Names of Allah (SWT) allows us to thank Him for His infinite blessings and to worship Him with deeper understanding.",
    date: "November 4, 2022",
    source: "The Muslim Vibe",
    href: "#",
    isExternal: false,
  },
  {
    title: "CHARITY AS TAUGHT BY THE QURAN AND PROPHET MUHAMMAD (PBUH)",
    excerpt: "For this mission of love and compassion, Prophet Muhammad (PBUH) said: 'All creatures are the dependents of Allah...'",
    date: "November 4, 2022",
    source: "The Muslim Vibe",
    href: "#",
    isExternal: false,
  },
  {
    title: "ISLAM: THE MESSAGE OF LOVE",
    excerpt: "Behold, the first House (of Prayer) established for mankind is the one at Bakkah: it is full of blessing and guidance for all beings.",
    date: "November 5, 2022",
    source: "The Muslim Vibe",
    href: "#",
    isExternal: false,
  },
  {
    title: "LESSONS LEARNED BY A MUSLIM TRAVELER",
    excerpt: "For my part, I realize now that the hidden Hand of Allah (SWT) was guiding me throughout my journey across continents.",
    date: "November 5, 2022",
    source: "The Muslim Vibe",
    href: "#",
    isExternal: false,
  },
  {
    title: "13 SCIENTIFIC FACTS IN THE HOLY QURAN",
    excerpt: "The most important thing to remember is that the conception of knowledge (Al-Ilm) in Islam is never separated from its spiritual dimension.",
    date: "November 5, 2022",
    source: "The Muslim Vibe",
    href: "#",
    isExternal: false,
  },
  {
    title: "A LOOK AT AN ISLAM-BASED EDUCATIONAL MODEL",
    excerpt: "Since the Noble Quran is the book of Allah (SWT) and needed to be organically integrated into every aspect of Muslim life.",
    date: "November 5, 2022",
    source: "The Muslim Vibe",
    href: "#",
    isExternal: false,
  },
  {
    title: "THE FOUNDATION AND SOUL OF ISLAM",
    excerpt: "Al-Aql and Al-Fitrah are fundamental ways to realize the reality of Al-Tawheed, which means the Oneness of Allah.",
    date: "November 5, 2022",
    source: "The Muslim Vibe",
    href: "#",
    isExternal: false,
  },
  {
    title: "SIGNS OF ALLAH'S DIVINE LAWS OF CHARITY IN NATURE",
    excerpt: "Similar to nature, divine laws of charity for Muslims are also indicated in the Quran and the teachings of the Prophet.",
    date: "November 5, 2022",
    source: "The Muslim Vibe",
    href: "#",
    isExternal: false,
  },
  {
    title: "CONSUMERISM AND WARNINGS FROM THE MERCIFUL (SWT)",
    excerpt: "The fundamental reason for consumerism is the common belief that we are buying comfort and happiness through material possessions.",
    date: "November 5, 2022",
    source: "The Muslim Vibe",
    href: "#",
    isExternal: false,
  },
  {
    title: "THE DIVINE LAWS OF SCIENCE IN ISLAM",
    excerpt: "Regarding the Quranic verse: 'And the heaven He has raised high, and has set up the Balance.'",
    date: "November 5, 2022",
    source: "The Muslim Vibe",
    href: "#",
    isExternal: false,
  },
  {
    title: "THE ETERNAL PATH OF CHARITY",
    excerpt: "The Prophet Mohammad (PBUH) teaches us: 'True enrichment does not come through possessing a lot of wealth.'",
    date: "November 5, 2022",
    source: "The Muslim Vibe",
    href: "#",
    isExternal: false,
  },
  {
    title: "HOW TO STAY ON A PATH OF GOD-CONSCIOUSNESS AND CHARITY IN THE WORKPLACE",
    excerpt: "Always present a smiling face to colleagues and maintain honesty and integrity in all dealings.",
    date: "November 5, 2022",
    source: "The Muslim Vibe",
    href: "#",
    isExternal: false,
  },
  {
    title: "Rejecting Nepotism, Classism and Racism Just Like Prophet Muhammed",
    excerpt: "As a Muslim, I belong to my Ummah (Muslim community). Muslims around the world are united by faith, not by race or nationality.",
    date: "November 5, 2022",
    source: "About Islam",
    href: "#",
    isExternal: false,
  },
  {
    title: "Following The Path of Prophet Muhammad (PBUH)",
    excerpt: "You are the best community (Ummah) raised up for the benefit of humanity; enjoining what is right, forbidding what is wrong.",
    date: "November 5, 2022",
    source: "Islam City",
    href: "#",
    isExternal: false,
  },
  {
    title: "6 Teaching Methods of Prophet Muhammad (PBUH)",
    excerpt: "They said: 'Glory to You! We have no knowledge except what You taught us. You, indeed You, are the All-Knowing, the Wise.'",
    date: "November 5, 2022",
    source: "Islam City",
    href: "#",
    isExternal: false,
  },
  {
    title: "Hajj 2020: Protecting One Another Is Truly Part of Faith",
    excerpt: "Indeed, the first House [of worship] established for mankind was that at Bakkah, blessed and a guidance for the worlds.",
    date: "November 5, 2022",
    source: "Islam City",
    href: "#",
    isExternal: false,
  },
  {
    title: "The Eternal Spring",
    excerpt: "The aim of this paper is to link the Eternal Path of Charity to the feeling of Mercy from Allah (SWT).",
    date: "November 5, 2022",
    source: "Islam City",
    href: "#",
    isExternal: false,
  },
  {
    title: "Created to Be Muslim",
    excerpt: "O humanity! Indeed, We created you from a male and a female and made you into peoples and tribes so that you may know one another.",
    date: "November 17, 2022",
    source: "About Islam",
    href: "#",
    isExternal: false,
  },
];

const Blog = () => {
  return (
    <Layout>
      <PageHeader
        title="Blogs & Articles"
        subtitle="Collection of published articles on Islam, science, and spirituality"
        verse={{
          text: "Invite to the way of your Lord with wisdom and good instruction, and argue with them in a way that is best.",
          reference: "Quran 16:125"
        }}
      />

      <section className="py-12">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <BlogCard
                  key={index}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  source={post.source}
                  href={post.href}
                  isExternal={post.isExternal}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
