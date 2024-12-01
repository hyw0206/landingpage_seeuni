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
        The name 
        <Styled.InfoAboutArticleBoldText> "Seeuni"</Styled.InfoAboutArticleBoldText> is inspired by 
        <Styled.InfoAboutArticleBoldText> "See You and I,"</Styled.InfoAboutArticleBoldText> symbolizing the company's commitment to sharing the unique value of Korean beauty with consumers worldwide.<br /> Seeuni's mission is to bring Korean beauty to the global stage and invite customers to experience the essence and 
        <Styled.InfoAboutArticleBoldText> authenticity of K-beauty.</Styled.InfoAboutArticleBoldText>
        
      </Styled.InfoAboutArticle>
    </Styled.InfoAboutWrapper>
  )
}