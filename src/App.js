import React from 'react';
import GlobalStyle from './GlobalStyles';
import NavbarPages from './components/NavbarPages';
// import NavBurgerMenu from './components/NavBurgerMenu'
import NavBM from './components/NavBM'
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import Qualification from './components/Qualification';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';


function App() {

  return (
    <>
    <div className="App">
      <GlobalStyle/>
      <NavbarPages/>
      <AboutSection/>
      <NavBM/>
      <SkillsSection/>
      <ProjectsSection/>
      <Qualification/>
      <ContactSection/>
      <FooterSection />
    </div>
    </>
  );
}

export default App;
