import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth; /* 부드러운 스크롤 이동 효과 */
    scroll-padding-top: 120px;
  }
`;

export const BusinessExportWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 443px;
  ::selection {
    background-color: #ED74DA;
    color: white;
  }
`

export const BusinessExportTitle = styled.div`
  margin-top: 55px;
  font-size: 40px;
  font-weight: 600;
`

export const BusinessExportArticleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 33px;
`

export const BusinessExportArticleText = styled.div`
  width: 356px;
  font-size: 20px;
  font-weight: 300;
  font-family: "Roboto";
  font-style: italic;
  line-height: 180%;
  &.korean {
    font-family: "S-CoreDream";
  }
`

export const BusinessExportArticleLine = styled.hr`
  width: 2px;
  height: 257px;
  margin-left: 40px;
  background: rgba(0, 0, 0, 0.6);
  border: 0;
`

export const BusinessExportArticleImage = styled.img`
  width: 337px;
  height: 257px;
  margin-left: 54px;
`