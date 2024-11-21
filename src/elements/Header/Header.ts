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

  background: #ffffff;
  box-sizing: border-box;
`;

export const HeaderContentWrapper = styled.div`
  width: 1050px;
  min-width: 1050px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-right: 90px;
`


export const HeaderLogo = styled.img`  
  height: 43px;
`;

export const HeaderItem = styled.div`
  margin: 0 0 0 36px;
  font-weight: 200;
  box-sizing: border-box;
  position: relative;

  &:hover {
    &::after {
      border-bottom: 3px solid #8fd6bd;
    }
  }
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    left: 0;
    bottom: -8px;
    border-bottom: 3px solid transparent;
    transition: border-bottom 0.8s ease;
  }    
`;


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