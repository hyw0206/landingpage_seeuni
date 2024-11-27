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
`;

export const HeaderContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const HeaderLogo = styled.img`
  width: 210px;
  height: 43px;
  margin-right: 102px;
  @media (max-width: 960px) {
    margin-right: clamp(0px, calc(180px - ((960px - 100vw))), 180px);
  }
`;

export const HeaderItem = styled.div`
  height: 100%;
  padding: 0 11px;
  &:hover {
    background: #E0E0E0;
    div::after {
      border-bottom: 4px solid #ED74DA;
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
    border-bottom: 4px solid transparent;
    transition: border-bottom 0.8s ease;
  }    
`
export const HeaderCountryItem = styled.div`
  
  padding: 0 11px;
  img {
    margin-top: 22px;
    width: 29px;
    height: 19px;
  }
  &:last-child {
    padding-right: 0;
  }
`