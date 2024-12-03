import styled from "styled-components";


export const InfoAboutWrapper = styled.div`
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

export const InfoAboutTitle = styled.div`
  margin-top: 61px;
  font-size: 40px;
  font-weight: 500;
`

export const InfoAboutSummaryWrapper = styled.div`
  display: flex;
  margin-top: 56px;
  > div {
    margin-right: 95px;
      &:last-child {
      margin-right: 0;
    }
  }  
`

export const InfoAboutSummaryItem = styled.div`
  display: flex;
  flex-direction: column;
`
export const InfoAboutSummaryItemTitle = styled.div`
  font-size: 24px;
  font-family: "Roboto";
  font-weight: 500;
`
export const InfoAboutSummaryItemLine = styled.hr`
  margin-top: 12px;
  width: 250px;
  height: 2px;
`
export const InfoAboutSummaryItemArticle = styled.div`
  margin-top: 26px;
  font-size: 20px;
  font-weight: 200;
  line-height: 24px;
`

export const InfoAboutArticle = styled.div`
  width: 940px;
  margin-top: 40px;
  font-size: 18px;
  font-family: "Roboto";
  font-weight: 300;
  letter-spacing: 0.1em; // 2.2px
  text-align: left;
  line-height: 26px;
`
export const InfoAboutArticleBoldText = styled.span`
  font-weight: 500;
  color: #ED74DA;
`