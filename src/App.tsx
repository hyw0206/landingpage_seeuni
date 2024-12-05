'use client';
import Header from "components/Header/Header";
import Info from "components/Info/Info";
import Business from "components/Business/Business";
import ODM from "components/ODM/ODM";
import Brand from "components/Brand/Brand";
import Contact from "components/Contact/Contact";
import Footer from "components/Footer/Footer";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [language, setLanguage] = useState<"English" | "Korean">("English");

  return (
    <Router>
      <Header language={language} setLanguage={setLanguage} />
      <div>
        <Info language={language} />
      </div>
      <div>
        <Business language={language} />
      </div>
      <div>
        <Brand language={language} />
      </div>
      <div>
        <ODM language={language} />
      </div>
      <div>
        <Contact language={language} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
