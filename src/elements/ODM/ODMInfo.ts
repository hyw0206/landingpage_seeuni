import styled from "styled-components";

export const ODMInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-top: 1100px; */
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
  margin-top: 44px;
`;

export const ODMInfoTitle = styled.div`
  margin-top: 55px;
  font-size: 40px;
  line-height: 47px;
  font-weight: 600;
`


export const ODMInfoArticleText = styled.div`
  width: 472px;
  height: 183px;
  font-size: 24px;
  font-weight: 300;
  text-align: left;
  line-height: 28px;
  margin-left: 17px;
`

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

export const ODMArticleTextBold = styled.span`
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
`;