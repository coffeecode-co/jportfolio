import { AboutMe } from '@/components/AboutMe';
import { ContactForm } from '@/components/ContactForm';
import { HeroSection } from '@/components/HeroSection';
import { MyExperience } from '@/components/MyExperience';
import { MyProjects } from '@/components/MyProjects';
import { MyServices } from '@/components/MyServices';
import { MySkills } from '@/components/MySkills';
import { Separator } from '@radix-ui/react-dropdown-menu';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutMe />
      <MyExperience />
      <MyProjects />
      <Separator className="h-0.5 bg-primary" />
      <MySkills />
      <MyServices />
      <ContactForm className="h-screen" />
    </main>
  );
}
