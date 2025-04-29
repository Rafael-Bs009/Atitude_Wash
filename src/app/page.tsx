import { About } from "./_components/about";
import { Hero } from "./_components/hero";
import { Menu } from "./_components/menu";

export default function Home() {
  return (
    <main>
      <Menu />
      <Hero />
      <About />
    </main>
  );
}
