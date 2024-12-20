import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 350px;
  background-color: #EFEFEF;
  @media (max-width: 960px) {
    margin-top: 330px;
  }
    ::selection {
    background-color: #ED74DA;
    color: white;
  }
`;

export const leftSideFooterDiv = styled.div`
  margin-right: 140px;
`;

export const FooterContentWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const FooterLogoImg = styled.img`
  width: 185px;
  height: 38px;
  margin-top: 20px;
  pointer-events: none; /* 마우스 이벤트를 차단 */
  user-select: none;
`;

export const FooterTextWrapper = styled.div`
  
`;

export const FooterTextWrapper2 = styled.div`
  margin-left: 30px;
  margin-top: 40px;
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

export const FooterContentText3 = styled.div`
  margin-top: 10px;
  font-size: 22px;
  color: #46454A;
  font-weight: 300;
`;

export const FooterContentText4 = styled.div`
  margin-top: 80px;
  font-size: 14px;
  color: #46454A;
  font-weight: 300;
`;

export const FooterContentText5 = styled.div`
  margin-top: 26px;
  font-size: 14px;
  color: #46454A;
  font-weight: 300;
`;

export const FooterContentText6 = styled.div`
  margin-top: 26px;
  font-size: 14px;
  color: #46454A;
  font-weight: 500;
`;

export const FooterContentText7 = styled.div`
  margin-top: 26px;
  font-size: 14px;
  color: #46454A;
  font-weight: 300;
`;

export const FooterCopyrightText = styled.div`
  font-size: 12px;
  color: #46454A;
  margin-top: 40px;
`;