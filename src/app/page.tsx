import Navbar from "@/components/Navbar";
import FeatureShowcaseSection from "@/components/landing/FeatureShowcaseSection";
import HeroSection from "@/components/landing/HeroSection";
import LocalProofSection from "@/components/landing/LocalProofSection";
import StoryIntroSection from "@/components/landing/StoryIntroSection";
import WaitlistSection from "@/components/WaitlistSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { faqs } from "@/content/faqs";
import { absoluteUrl, siteConfig } from "@/lib/seo";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/logo.png"),
    email: `mailto:${siteConfig.contactEmail}`,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: absoluteUrl("/"),
    description: siteConfig.description,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo.png"),
      },
    },
    potentialAction: {
      "@type": "RegisterAction",
      name: "Join Windward Atlas early access",
      target: absoluteUrl("/#waitlist"),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: siteConfig.name,
    operatingSystem: "iOS, Android",
    applicationCategory: "TravelApplication",
    description: siteConfig.description,
    url: absoluteUrl("/"),
    image: siteConfig.previewImages.map((imagePath) => absoluteUrl(imagePath)),
    areaServed: {
      "@type": "Country",
      name: "Dominica",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  },
];

const jsonLd = JSON.stringify(structuredData).replace(/</g, "\\u003c");

export default function Home() {
  return (
    <>
      <script
        id="windward-atlas-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <main>
        <Navbar />
        <HeroSection />
        <StoryIntroSection />
        <FeatureShowcaseSection />
        <LocalProofSection />
        <WaitlistSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}
