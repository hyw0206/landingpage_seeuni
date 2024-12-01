import styled from "styled-components";

export const ODMInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding-bottom: 20px;
  width: 100%;
  height: 443px;
  background-color: #FFFFFF;
`;

export const ODMInfoDetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ODMInfoTitleWrapper = styled.div`
  width: 291px;
  height: 38px;
  margin: 55px 815px 42px 814px;
  display: flex;
  justify-content: center;
  ::selection {
    background-color: #ED74DA;
    color: white;
  }
`;

export const ODMInfoTitle = styled.p`
  font-size: 40px;
  line-height: 47px;
  font-weight: 600;
  color: #46454A;
`;

export const ODMInfoArticleTextWrapper = styled.div`
  display: block;
  width: 472px;
  height: 183px;
  margin-left: 17px;
  ::selection {
    background-color: #ED74DA;
    color: white;
  }
`;

export const ODMInfoArticleText = styled.p`
  font-size: 24px;
  font-weight: 300;
  text-align: left;
  line-height: 28px;
`

export const ODMArticleTextBold = styled.span`
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
`;

export const ODMArticleLine = styled.hr`
  width: 1px;
  height: 254px;
  background-color: black;
`

export const ODMArticleImage = styled.img`
  width: 396px;
  height: 254px;
  margin-right: 17px;
`