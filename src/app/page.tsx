import { About } from "./_components/about";
import { Hero } from "./_components/hero";
import { Menu } from "./_components/menu";
import { Services } from "./_components/sectionServices";
import { Testimonials } from "./_components/sectionTestimonials";
import { Faq } from "./_components/sectionFaq";
import { Inspiring } from "./_components/inspiring";
import { EndCta } from "./_components/endCta";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <main>
      <Menu />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Faq />
      <Inspiring />
      <EndCta />
      <Footer />
    </main>
  );
}
