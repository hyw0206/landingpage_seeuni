import * as Styled from 'elements/ODM/ODMInfo';

export default function ODMInfo() {
  return (
    <Styled.ODMInfoWrapper>
      <Styled.ODMInfoTitle>ODM Services.</Styled.ODMInfoTitle>
      <Styled.ODMInfoDetailWrapper>
        <Styled.ODMArticleImage src="/image/ODM/ODMImage.png"/>
        <Styled.ODMArticleLine />
        <Styled.ODMInfoArticleText>
          We provide custom <Styled.ODMArticleTextBold>ODM</Styled.ODMArticleTextBold>
          <Styled.ODMArticleTextBold>services</Styled.ODMArticleTextBold> to <br /> meet the unique  
          demands of each market. <br /> By collaborating with clients,
          SEEUNI creates <Styled.ODMArticleTextBold>high-quality</Styled.ODMArticleTextBold>, affordable
          <Styled.ODMArticleTextBold> beauty products </Styled.ODMArticleTextBold>
          that achieve 
          success across diverse markets.
        </Styled.ODMInfoArticleText>
      </Styled.ODMInfoDetailWrapper>
    </Styled.ODMInfoWrapper>
  )
}