import styled from "styled-components";

export const InfoMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 538px;
`

export const InfoMessageTtile = styled.div`
  margin-top: 32px;
  font-size: 40px;
  font-weight: 500;
`

export const InfoMessageQuote = styled.img`
  margin-left: -28px;
  margin-top: 32px;
`

export const InfoMessageArticle = styled.div`
  width: 920px;
  margin-top: 20px;
  font-size: 22px;
  font-weight: 300;
  letter-spacing: 0.1em; // 2.2px
  text-align: center;
  line-height: 26px;
`
export const InfoMessageArticleLine = styled.hr`
  margin-top: 24px;
  width: 250px;
  height: 1px;
`

export const InfoMessageWriter = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 500;
`