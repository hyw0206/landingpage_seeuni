import styled from "styled-components";

export const InfoMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 430px;
    ::selection {
    background-color: #ED74DA;
    color: white;
  }
`

export const InfoMessageTtile = styled.div`
  margin-top: 32px;
  font-size: 40px;
  font-weight: 500;
`

export const InfoMessageQuote = styled.img`
  margin-left: -28px;
  margin-top: 20px;
`

export const InfoMessageArticle = styled.div`
  width: 850px;
  margin-top: 20px;
  margin-left:70px;
  font-size: 18px;
  font-weight: 300;
  font-family: "Roboto";
  font-style: italic;
  letter-spacing: 0.1em; // 2.2px
  text-align: left;
  line-height: 26px;
  &.korean {
    font-family: "S-CoreDream";
  }
`
export const InfoMessageArticleLine = styled.hr`
  margin-top: 12px;
  width: 250px;
  height: 1px;
`

export const InfoMessageWriter = styled.div`
  margin-top: 12px;
  font-size: 20px;
  font-family: "Roboto";
  &.korean {
    font-family: "S-CoreDream";
  }
`

export const InfoMessageRank = styled.span`
  color: #ED74DA;
`