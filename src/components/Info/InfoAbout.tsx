import * as Styled from "elements/Info/InfoAbout"

export default function InfoAbout() {
  return (
    <Styled.InfoAboutWrapper>
      <Styled.InfoAboutTitle>About us.</Styled.InfoAboutTitle>
      <Styled.InfoAboutSummaryWrapper>
        <Styled.InfoAboutSummaryItem>
          <Styled.InfoAboutSummaryItemTitle>Company Name</Styled.InfoAboutSummaryItemTitle>
          <Styled.InfoAboutSummaryItemLine />
          <Styled.InfoAboutSummaryItemArticle>SEEUNI</Styled.InfoAboutSummaryItemArticle>
        </Styled.InfoAboutSummaryItem>
        <Styled.InfoAboutSummaryItem>
          <Styled.InfoAboutSummaryItemTitle>Established</Styled.InfoAboutSummaryItemTitle>
          <Styled.InfoAboutSummaryItemLine />
          <Styled.InfoAboutSummaryItemArticle>May 2023</Styled.InfoAboutSummaryItemArticle>
        </Styled.InfoAboutSummaryItem>
        <Styled.InfoAboutSummaryItem>
          <Styled.InfoAboutSummaryItemTitle>CEO</Styled.InfoAboutSummaryItemTitle>
          <Styled.InfoAboutSummaryItemLine />
          <Styled.InfoAboutSummaryItemArticle>Jae-Young Park, <br />South Korea</Styled.InfoAboutSummaryItemArticle>
        </Styled.InfoAboutSummaryItem>
      </Styled.InfoAboutSummaryWrapper>
      <Styled.InfoAboutArticle>
        The name "Seeuni" is inspired by "See You and I," symbolizing the company's commitment to sharing the unique value of Korean beauty with consumers worldwide. Seeuni's mission is to bring Korean beauty to the global stage and invite customers to experience the essence and authenticity of K-beauty.
      </Styled.InfoAboutArticle>
    </Styled.InfoAboutWrapper>
  )
}