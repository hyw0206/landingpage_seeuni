import * as Styled from 'elements/Header/Header';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type headerProps = {
  language: "English" | "Korean";
  setLanguage: React.Dispatch<React.SetStateAction<"English" | "Korean">>;
};

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Header({ language, setLanguage }: headerProps) {
  const [showSetLanguage, setShowSetLanguage] = useState<boolean>(false);
  const navigate = useNavigate();

  const onClickSetLanguageEnglish = () => {
    if (language === "English") return;
    setLanguage("English");
  };

  const onClickSetLanguageKorean = () => {
    if (language === "Korean") return;
    setLanguage("Korean");
  };

  const onClickSetShowButton = () => {
    setShowSetLanguage(!showSetLanguage);
  };

  const handleLinkClick = (id: string) => {
    navigate("/"); // 홈으로 이동
    if (id === "") {
      // 로고 클릭 시 페이지 맨 위로 이동
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setTimeout(() => scrollToSection(id), 100); // 지정된 섹션으로 스크롤
    }
  };
  
  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderContentWrapper>
        {/* 로고 클릭 시 맨 위로 스크롤 */}
        <a onClick={() => handleLinkClick("")} style={{ textDecoration: 'none', cursor: 'pointer' }}>
          <Styled.HeaderLogo src="/image/SEEUNI_Logo.png" alt="SEEUNI Logo" />
        </a>
        <Styled.HeaderItem>
          <a onClick={() => handleLinkClick("About-us")} style={{ textDecoration: 'none', color: '#000000', cursor: 'pointer' }}>
            <Styled.HeaderItemText>About us</Styled.HeaderItemText>
          </a>
        </Styled.HeaderItem>
        <Styled.HeaderItem>
          <a onClick={() => handleLinkClick("K-BeautyExport")} style={{ textDecoration: 'none', color: '#000000', cursor: 'pointer' }}>
            <Styled.HeaderItemText>K-Beauty Export</Styled.HeaderItemText>
          </a>
        </Styled.HeaderItem>
        <Styled.HeaderItem>
          <a onClick={() => handleLinkClick("Our-Brands")} style={{ textDecoration: 'none', color: '#000000', cursor: 'pointer' }}>
            <Styled.HeaderItemText>Our Brands</Styled.HeaderItemText>
          </a>
        </Styled.HeaderItem>
        <Styled.HeaderItem>
          <a onClick={() => handleLinkClick("ODM-Service")} style={{ textDecoration: 'none', color: '#000000', cursor: 'pointer' }}>
            <Styled.HeaderItemText>ODM Service</Styled.HeaderItemText>
          </a>
        </Styled.HeaderItem>
        <Styled.HeaderItem>
          <a onClick={() => handleLinkClick("Contact-us")} style={{ textDecoration: 'none', color: '#000000', cursor: 'pointer' }}>
            <Styled.HeaderItemText>Contact us</Styled.HeaderItemText>
          </a>
        </Styled.HeaderItem>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Styled.HeaderCountryWrapper>
            <Styled.HeaderCountryLogo
              src="/image/Header/language.png"
              alt="change language"
            />
            <Styled.HeaderCountryLogo
              src="/image/Header/arrow_drop_down.png"
              alt="view change language"
              style={{ cursor: "pointer" }}
              onClick={onClickSetShowButton}
            />
          </Styled.HeaderCountryWrapper>
          {showSetLanguage && (
            <>
              {language === "English" ? (
                <>
                  <Styled.HeaderCountryText
                    onClick={onClickSetLanguageEnglish}
                    style={{ color: "#ED74DA" }}
                  >
                    English
                  </Styled.HeaderCountryText>
                  <Styled.HeaderCountryText onClick={onClickSetLanguageKorean}>
                    Korean
                  </Styled.HeaderCountryText>
                </>
              ) : (
                <>
                  <Styled.HeaderCountryText
                    onClick={onClickSetLanguageKorean}
                    style={{ color: "#ED74DA" }}
                  >
                    Korean
                  </Styled.HeaderCountryText>
                  <Styled.HeaderCountryText onClick={onClickSetLanguageEnglish}>
                    English
                  </Styled.HeaderCountryText>
                </>
              )}
            </>
          )}
        </div>
      </Styled.HeaderContentWrapper>
    </Styled.HeaderWrapper>
  );
}
