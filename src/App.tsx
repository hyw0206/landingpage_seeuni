import Header from "components/Header/Header";
import Info from "components/Info/Info";
import Business from "components/Business/Business";
import ODM from "components/ODM/ODM";
import Brand from "components/Brand/Brand";
import Contact from "components/Contact/Contact";
import Footer from "components/Footer/Footer";
import { useState } from "react";

function App() {

  const [language, setLanguage] = useState<"English" | "Korean">("English");
  return (
    <>
      <Header
        language={language}
        setLanguage={setLanguage}
      />
      <Info
        language={language}
      />
      <Business />
      <Brand language={language}/>
      <ODM language={language}/>
      <Contact
        language={language}
      />
      <Footer />
    </>
  );
}

export default App;
