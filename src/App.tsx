import { BrowserRouter } from 'react-router-dom';

import {
  About,
  Contact,
  Experience,
  // Feedbacks,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
} from './components';
// @ts-ignore: declaration file for './components/Skills' is missing (Skills.jsx)
import Skills from './components/Skills';
// @ts-ignore: declaration file for './components/Technologies' is missing
import Technologies from './components/Technologies';
import { useEffect } from 'react';
import { config } from './constants/config';

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Skills />
        <Technologies />
        {/* <Tech /> */}
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
