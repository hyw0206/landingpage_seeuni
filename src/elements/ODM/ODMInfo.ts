import styled from "styled-components";

export const ODMInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-top: 1100px; */
  padding-bottom: 20px;
  width: 100%;
  height: 538px;
  background-color: #218FAC;
`;

export const ODMInfoDetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 538px; // margin top 삭제, height 추가
`;

export const ODMInfoTitle = styled.div`
  margin-top: 143px;
  font-size: 40px;
  font-weight: 600;
  color: white;
`

export const ODMArticleImage = styled.img`
  width: 433px;
  height: 278px;
  margin-right: 24px; // Line margin left 삭제, 그만큼 추가
`

export const ODMArticleLine = styled.hr`
  width: 1px;
  height: 278px;
  background-color: white;
  margin-right: 16px;
`

export const ODMInfoArticleText = styled.div`
  width: 505px;
  height: 266px;
  font-size: 32px;
  font-weight: 300;
  text-align: left;
  line-height: 38px;
  color: white;
`

export const ODMArticleTextBold = styled.span`
  font-size: 32px;
  font-weight: 500;
  line-height: 38px;
  color: white;
`;