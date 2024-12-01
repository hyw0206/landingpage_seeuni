import styled, { createGlobalStyle } from "styled-components";

// GlobalStyle로 부드러운 스크롤 효과
// Info.tsx에 선언했고, Business.tsx나 다른 메인 tsx에 선언 안해도 잘 됨.
// 아이디만 잘 선언해주고 사용하면 될듯
export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth; /* 부드러운 스크롤 이동 효과 */
    scroll-padding-top: 120px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`