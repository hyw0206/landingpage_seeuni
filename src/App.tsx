'use client';
import Header from "components/Header/Header";
import Info from "components/Info/Info";
import Business from "components/Business/Business";
import ODM from "components/ODM/ODM";
import Brand from "components/Brand/Brand";
import Contact from "components/Contact/Contact";
import Footer from "components/Footer/Footer";
import { useState } from "react";
import {
  FullpageContainer,
  FullpageSection,
} from '@shinyongjun/react-fullpage';
import '@shinyongjun/react-fullpage/css';
function App() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [language, setLanguage] = useState<"English" | "Korean">("English");
  return (
    <>
      <Header
        language={language}
        setLanguage={setLanguage}
      />
      {/* <FullpageContainer
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        transitionDuration={500}
      > 
      <FullpageSection> */}
        <Info
          language={language}
        />
      {/* </FullpageSection>
      <FullpageSection> */}
        <Business />    
      {/* </FullpageSection>
      <FullpageSection> */}
        <Brand language={language}/>
      {/* </FullpageSection>
      <FullpageSection> */}
        <ODM language={language}/>
      {/* </FullpageSection>
      <FullpageSection> */}
        {/* <div style={{display: "flex", flexDirection: "column", width: "100%"}}> */}
          <Contact
            language={language}
          />
          <Footer />
        {/* </div>
      </FullpageSection>
    </FullpageContainer> */}
    </>
  );
}

export default App;
