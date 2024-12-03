import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 480px;
  background-color: #EFEFEF;
  @media (max-width: 960px) {
    margin-top: 330px;
  }
    ::selection {
    background-color: #ED74DA;
    color: white;
  }
`;

export const FooterContentWrapper = styled.div`
  display: flex;
  margin-top: 60px;
`;

export const FooterLogoImg = styled.img`
  width: 208px;
  height: 43px;
  margin-right: 52px;
  pointer-events: none; /* 마우스 이벤트를 차단 */
  user-select: none;
`;

export const FooterTextWrapper = styled.div`
  
`;

export const FooterContentText = styled.div`
  margin-bottom: 25px;
  font-size: 24px;
  color: #46454A;
`;

export const FooterContentText2 = styled.div`
  margin-bottom: 50px;
  font-size: 24px;
  color: #46454A;
`;

export const FooterCopyrightText = styled.div`
  font-size: 18px;
  color: #46454A;
`;