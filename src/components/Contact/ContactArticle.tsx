import * as Styled from 'elements/Contact/ContactArticle';
import ContactMap from "./ContactMap";

export default function ContactArticle() {

  // 초기 중심 위치 설정
  const position = [36.17, 127.83]

  return (
    <Styled.ContactArticleWrapper>
      <Styled.ContactArticleTitleWrapper>
        <Styled.ContactArticleTitle>To Contact Us.</Styled.ContactArticleTitle>
      </Styled.ContactArticleTitleWrapper>

      <Styled.ContactArticleContentWrapper>
        <Styled.ContactArticleContentInfoWrapper>
          <Styled.ContactArticleContentInfo style={{ marginTop: '32px' }}>CEO</Styled.ContactArticleContentInfo>
          <Styled.ContactArticleContentInfo style={{ marginTop: '25px' }}>Established</Styled.ContactArticleContentInfo>
          <Styled.ContactArticleContentInfo style={{ marginTop: '25px' }}>Address</Styled.ContactArticleContentInfo>
          <Styled.ContactArticleContentInfo style={{ marginTop: '80px' }}>Mobile</Styled.ContactArticleContentInfo>
          <Styled.ContactArticleContentInfo style={{ marginTop: '34px' }}>Tel.</Styled.ContactArticleContentInfo>
          <Styled.ContactArticleContentInfo style={{ marginTop: '34px' }}>Email</Styled.ContactArticleContentInfo>
        </Styled.ContactArticleContentInfoWrapper>

        <Styled.ContactArticleContentInfoTextWrapper>
          <Styled.ContactArticleContentInfoText style={{ marginTop: '32px' }}>Jae-Young Park</Styled.ContactArticleContentInfoText>
          <Styled.ContactArticleContentInfoText style={{ marginTop: '25px' }}>2023. 05</Styled.ContactArticleContentInfoText>
          <Styled.ContactArticleContentInfoText style={{ marginTop: '25px' }}>Winners Building, Suite 502, 67 Baekjegobun-ro, Songpa-gu, Seoul, South Korea</Styled.ContactArticleContentInfoText>
          <Styled.ContactArticleContentInfoText style={{ marginTop: '32px' }}>+82 10-3187-3203</Styled.ContactArticleContentInfoText>
          <Styled.ContactArticleContentInfoText style={{ marginTop: '34px' }}>+82 70-7602-7150</Styled.ContactArticleContentInfoText>
          <Styled.ContactArticleContentInfoText style={{ marginTop: '34px' }}>SEEUNI@SEEUNI.CO</Styled.ContactArticleContentInfoText>
        </Styled.ContactArticleContentInfoTextWrapper>

        <Styled.ContactArticleContentMapWrapper>
          <ContactMap />
        </Styled.ContactArticleContentMapWrapper>
      </Styled.ContactArticleContentWrapper>
    </Styled.ContactArticleWrapper>
  )
}