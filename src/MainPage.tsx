import { AppLayout } from "./layout/AppLayout";
import { HomeSection } from "./components/HomeSection";
import { AboutMe } from "./components/AboutMe";
import { TechStack } from "./components/TechStack";
import { Contact } from "./components/Contact";
import { MultiLayerParallax } from "./components/MultiLayerParallax";

export const MainPage = () => {
  return (
    <AppLayout>
      <MultiLayerParallax />
      <div className="px-4">
        <AboutMe />
        <TechStack />
        <Contact />
      </div>
    </AppLayout>
  );
};
