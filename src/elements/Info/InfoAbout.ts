import styled from "styled-components";


export const InfoAboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 538px;
`

export const InfoAboutTitle = styled.div`
  margin-top: 84px;
  font-size: 40px;
  font-weight: 500;
`

export const InfoAboutSummaryWrapper = styled.div`
  display: flex;
  margin-top: 66px;
  > div {
    margin-right: 90px;
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
  font-weight: 300;
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
  margin-top: 46px;
  font-size: 22px;
  font-weight: 300;
  letter-spacing: 0.1em; // 2.2px
  text-align: center;
  line-height: 26px;
`