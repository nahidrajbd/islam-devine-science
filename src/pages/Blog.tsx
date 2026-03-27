import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { BlogCard } from "@/components/shared/BlogCard";

const blogPosts = [
  {
    title: "The Prophet of Excellence (SAW)",
    excerpt: "Exploring the exceptional characteristics and life of Prophet Muhammad (SAW) as a timeless guide for humanity.",
    date: "February 17",
    source: "IslamiCity",
    href: "https://islamicity.org/106300/the-prophet-of-excellence-saw/",
    isExternal: true,
  },
  {
    title: "Tawheed in Science Through the Lens of Human Behaviour",
    excerpt: "An insightful reflection on how the oneness of Allah (Tawheed) manifests within natural sciences and human behavior.",
    date: "Recent",
    source: "IslamiCity",
    href: "https://islamicity.org/106134/tawheed-in-science-through-the-lens-of-human-behaviour/",
    isExternal: true,
  },
  {
    title: "Natural Sciences in the Mirror of Islam",
    excerpt: "Examining the realm of natural sciences from an Islamic perspective, guided by the profound wisdom of the Quran.",
    date: "Recent",
    source: "IslamiCity",
    href: "https://islamicity.org/106114/natural-sciences-in-the-mirror-of-islam/",
    isExternal: true,
  },
  {
    title: "The Mathematics of the Quran",
    excerpt: "Delving into the numerical marvels and structural brilliance present within the mathematical composition of the Quran.",
    date: "Recent",
    source: "IslamiCity",
    href: "https://islamicity.org/105685/the-mathematics-of-the-quran/",
    isExternal: true,
  },
  {
    title: "The Crisis of the Muslim Ummah: A Call for the Re-Islamization of Science",
    excerpt: "Addressing the modern challenges of the Muslim Ummah by advocating for the integration of Islamic ethics into science.",
    date: "Recent",
    source: "IslamiCity",
    href: "https://islamicity.org/102825/the-crisis-of-the-muslim-ummah-a-call-for-the-re-islamization-of-science/",
    isExternal: true,
  },
  {
    title: "A Way Back to Islam",
    excerpt: "Guiding reflections inspired by the Quran to reconnect with the roots of our faith and worldview.",
    date: "Recent",
    source: "IslamiCity",
    href: "https://islamicity.org/102023/back-to-your-islam/",
    isExternal: true,
  },
  {
    title: "The Need for the Re-Islamization of the Sciences",
    excerpt: "An exploration of the necessity to integrate Islamic principles and values back into modern scientific discourse.",
    date: "December 5, 2024",
    source: "The Muslim Vibe",
    href: "https://themuslimvibe.com/faith-islam/the-need-for-the-re-islamization-of-the-sciences",
    isExternal: true,
  },
  {
    title: "13 Scientific Facts in the Holy Quran",
    excerpt: "The most important thing to remember is that the conception of knowledge (Al-Ilm) in Islam is never separated from its spiritual dimension.",
    date: "December 1, 2024",
    source: "The Muslim Vibe",
    href: "https://themuslimvibe.com/faith-islam/13-scientific-facts-in-the-holy-quran",
    isExternal: true,
  },
  {
    title: "Consumerism and Warnings from the Merciful (SWT)",
    excerpt: "The fundamental reason for consumerism is the common belief that we are buying comfort and happiness through material possessions.",
    date: "November 29, 2024",
    source: "The Muslim Vibe",
    href: "https://themuslimvibe.com/community/consumerism-and-warnings-from-the-merciful-swt",
    isExternal: true,
  },
  {
    title: "The Eternal Path of Charity: A New Book on Tawheed, the Universe, and Faith",
    excerpt: "The Prophet Mohammad (PBUH) teaches us: 'True enrichment does not come through possessing a lot of wealth.'",
    date: "November 5, 2024",
    source: "The Muslim Vibe",
    href: "https://themuslimvibe.com/western-muslim-culture/art/books/the-eternal-path-of-charity-a-new-book-on-tawheed-the-universe-and-faith",
    isExternal: true,
  },
  {
    title: "The Tawhidic Paradigm",
    excerpt: "Understanding the integrated worldview of Tawheed and its profound implications on the sciences, society, and our spiritual journey.",
    date: "October 20, 2024",
    source: "The Muslim Vibe",
    href: "https://themuslimvibe.com/faith-islam/the-tawhidic-paradigm",
    isExternal: true,
  },
  {
    title: "Lessons Learned by a Muslim Traveler",
    excerpt: "For my part, I realize now that the hidden Hand of Allah (SWT) was guiding me throughout my journey across continents.",
    date: "August 10, 2024",
    source: "The Muslim Vibe",
    href: "https://themuslimvibe.com/faith-islam/lessons-learned-by-a-muslim-traveler",
    isExternal: true,
  },
  {
    title: "Islam: The Message of Love",
    excerpt: "Behold, the first House (of Prayer) established for mankind is the one at Bakkah: it is full of blessing and guidance for all beings.",
    date: "April 13, 2024",
    source: "The Muslim Vibe",
    href: "https://themuslimvibe.com/faith-islam/islam-the-message-of-love",
    isExternal: true,
  },
  {
    title: "The Divine Laws of Science in Islam",
    excerpt: "Regarding the Quranic verse: 'And the heaven He has raised high, and has set up the Balance.'",
    date: "March 7, 2023",
    source: "The Muslim Vibe",
    href: "https://themuslimvibe.com/faith-islam/the-divine-laws-of-science-in-islam",
    isExternal: true,
  },
  {
    title: "The Beautiful Names of Allah (SWT)",
    excerpt: "Knowing the meaning of the Beautiful Names of Allah (SWT) allows us to thank Him for His infinite blessings and to worship Him with deeper understanding.",
    date: "July 14, 2022",
    source: "The Muslim Vibe",
    href: "https://themuslimvibe.com/faith-islam/the-beautiful-names-of-allah-swt",
    isExternal: true,
  },
  {
    title: "Charity As Taught By The Quran And Prophet Muhammad (PBUH)",
    excerpt: "For this mission of love and compassion, Prophet Muhammad (PBUH) said: 'All creatures are the dependents of Allah...'",
    date: "August 2, 2021",
    source: "The Muslim Vibe",
    href: "https://themuslimvibe.com/faith-islam/charity-as-taught-by-the-quran-and-prophet-muhammad-pbuh",
    isExternal: true,
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
