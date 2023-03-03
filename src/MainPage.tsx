import { AppLayout } from './layout/AppLayout'
import { HomeSection } from './components/HomeSection'
import { AboutMe } from './components/AboutMe'
import { TechStack } from './components/TechStack'
import { Contact } from './components/Contact'
import { useEffect } from 'react'

export const MainPage = () => {
  useEffect(() => {
    const components = document.querySelectorAll('.content');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.remove('opacity-0');
          entry.target.classList.add('opacity-1');
          entry.target.classList.add('translate-x-0');
        }
      })
    }, {
      threshold: 0.5
    });
    
    components.forEach((component) => {
      if(component) observer.observe(component);
    });
  }, []);
  
  return (
    <AppLayout>
      <HomeSection/>
      <AboutMe/>
      <TechStack/>
      <Contact/>
    </AppLayout>
  )
}
