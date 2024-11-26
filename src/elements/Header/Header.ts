import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  z-index: 9999;
  background: #ffffff;
  box-sizing: border-box;
`;

export const HeaderContentWrapper = styled.div`
  min-width: 940px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export const HeaderLogo = styled.img`
  width: 210px;
  height: 43px;
  margin-right: 180px;
  margin-bottom: 39px;
`;

export const HeaderItem = styled.div`
  height: 100%;
  padding: 0 11px;
  
  box-sizing: border-box;
  

  &:hover {
    background: #E0E0E0;
    div {
      font-weight: 400;
    }
    div::after {
      border-bottom: 3px solid #33D62C;
    }
  }
  
`;

export const HeaderItemText = styled.div`
  position: relative;
  font-weight: 300;
  font-size: 16px;
  margin-top: 61px;
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    left: 0;
    bottom: -9px;
    border-bottom: 3px solid transparent;
    transition: border-bottom 0.8s ease;
  }    
`
export const HeaderCountryItem = styled.div`
  
  padding: 0 11px;
  img {
    margin-bottom: 38px;
  }
`

// px -> 4px (width, height ...)
// font
// css 속성 순서
// display (flex) width height mar pad bor text color ~~~
// styled 이름 규칙 Header
// 함수 이름 규칙 onClickUpCount

// git main <- 메인 코드 

// 나 헤더 개발할거임
// git header <- 여기에 업로드.
// merge