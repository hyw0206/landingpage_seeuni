import * as Styled from 'elements/Header/Header';
import { useState } from "react"

type headerProps = {
  language: "English" | "Korean",
  setLanguage: React.Dispatch<React.SetStateAction<"English" | "Korean">>
}
export default function Header({language, setLanguage} :headerProps) {
  const [showSetLanguage, setShowSetLanguage] = useState<boolean>(false);

  const onClickSetLanguageEnglish = () => {
    if (language === "English") return;
    else setLanguage("English");
  }
  const onClickSetLanguageKorean = () => {
    if (language === "Korean") return;
    setLanguage("Korean");
  }
  const onClickSetShowButton = () => {
    setShowSetLanguage(!showSetLanguage);
  }

  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderContentWrapper>
      <a href='#'><Styled.HeaderLogo src="/image/SEEUNI_Logo.png" alt="SEEUNI Logo"/></a>
      <Styled.HeaderItem>
        <a href='#About-us' style={{textDecoration: 'none', color: '#000000'}}><Styled.HeaderItemText>About us</Styled.HeaderItemText></a>
      </Styled.HeaderItem>
      <Styled.HeaderItem>
        <a href='#K-BeautyExport' style={{textDecoration: 'none', color: '#000000'}}><Styled.HeaderItemText>K-Beauty Export</Styled.HeaderItemText></a>
      </Styled.HeaderItem>
      <Styled.HeaderItem>
        <a href='#Our-Brands' style={{textDecoration: 'none', color: '#000000'}}><Styled.HeaderItemText>Our Brands</Styled.HeaderItemText></a>
      </Styled.HeaderItem>
      <Styled.HeaderItem>
        <a href='#ODM-Service' style={{textDecoration: 'none', color: '#000000'}}><Styled.HeaderItemText>ODM Service</Styled.HeaderItemText></a>
      </Styled.HeaderItem>
      <Styled.HeaderItem>
        <a href='#Contact-us' style={{textDecoration: 'none', color: '#000000'}}><Styled.HeaderItemText>Contact us</Styled.HeaderItemText></a>
      </Styled.HeaderItem>
      <div style={{display: "flex", flexDirection: "column"}}>
        <Styled.HeaderCountryWrapper>
          <Styled.HeaderCountryLogo 
            src="/image/Header/language.png" 
            alt="change language" 
            />
          <Styled.HeaderCountryLogo 
            src="/image/Header/arrow_drop_down.png" 
            alt="view change language" 
            style={{ cursor: "pointer"}}
            onClick={onClickSetShowButton}
            />
        </Styled.HeaderCountryWrapper>
        {
          showSetLanguage &&
          (
            <>
            <Styled.HeaderCountryText
              onClick={onClickSetLanguageEnglish}
            >
              English
            </Styled.HeaderCountryText>
            <Styled.HeaderCountryText
              onClick={onClickSetLanguageKorean}
            >
              Korean
            </Styled.HeaderCountryText>
            </>
          )  
        }
        
      </div>
   
      </Styled.HeaderContentWrapper>
      
    </Styled.HeaderWrapper>
  )
}