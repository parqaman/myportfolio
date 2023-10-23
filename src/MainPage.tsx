import { AppLayout } from "./layout/AppLayout";
import { HomeSection } from "./components/HomeSection";
import { AboutMe } from "./components/AboutMe";
import { TechStack } from "./components/TechStack";
import { Contact } from "./components/Contact";

export const MainPage = () => {
  return (
    <AppLayout>
      <HomeSection />
      <AboutMe />
      <TechStack />
      <Contact />
    </AppLayout>
  );
};
