import { AppLayout } from "./layout/AppLayout";
import { HomeSection } from "./components/HomeSection";
import { AboutMe } from "./components/AboutMe";
import { TechStack } from "./components/TechStack";
import { Contact } from "./components/Contact";
import { useEffect, useRef } from "react";
import { useScroll, motion, useTransform, useMotionValue } from "framer-motion";

export const MainPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  return (
    <AppLayout>
      <HomeSection />
      <AboutMe />
      <TechStack />
      <Contact />
    </AppLayout>
  );
};
