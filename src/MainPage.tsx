import { AppLayout } from "./layout/AppLayout";
import { AboutMe } from "./components/AboutMe";
import { TechStack } from "./components/TechStack";
import { Contact } from "./components/Contact";
import { MultiLayerParallax } from "./components/MultiLayerParallax";
import { Projects } from "./components/Projects";

export const MainPage = () => {
  return (
    <AppLayout>
      <MultiLayerParallax />
      <div className="px-4">
        <AboutMe />
        <TechStack />
        <Projects />
        <Contact />
      </div>
    </AppLayout>
  );
};
