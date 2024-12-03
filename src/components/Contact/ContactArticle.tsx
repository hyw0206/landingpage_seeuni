import * as Styled from 'elements/Contact/ContactArticle';
import ContactMap from "./ContactMap";
import { languageProps } from "shared/type/commonType"
import parse from "html-react-parser";

export default function ContactArticle({ language }: languageProps) {

  const textData = {
    "English": {
      "ContactArticleTitle": "To Contact Us.",

      "ContactArticleCEO": "CEO",
      "ContactArticleEstablish": "Established",
      "ContactArticleAddress": "Address",
      "ContactArticleMobile": "Mobile",
      "ContactArticleTel": "Tel.",
      "ContactArticleEmail": "Email",

      "ContactArticleCEOText": "Jae-Young Park",
      "ContactArticleAddressText": "Winners Building, Suite 502, 67 Baekjegobun-ro, Songpa-gu, Seoul, South Korea",
    },
    "Korean": {
      "ContactArticleTitle": "회사소개",

      "ContactArticleCEO": "대표",
      "ContactArticleEstablish": "설립일",
      "ContactArticleAddress": "주소",
      "ContactArticleMobile": "휴대전화",
      "ContactArticleTel": "전화번호",
      "ContactArticleEmail": "이메일",

      "ContactArticleCEOText": "박재영",
      "ContactArticleAddressText": "서울특별시 송파구<br/>백제고분로 67<br/>위너스 빌딩 502호",
    }
  }

  return (
    <Styled.ContactArticleWrapper>
        <Styled.ContactArticleTitle>{textData[language].ContactArticleTitle}</Styled.ContactArticleTitle>

      <Styled.ContactArticleContentWrapper>
        <Styled.ContactArticleContentInfoWrapper>
          <Styled.ContactArticleContentInfo style={{ marginTop: '32px' }}>{textData[language].ContactArticleCEO}</Styled.ContactArticleContentInfo>
          <Styled.ContactArticleContentInfo style={{ marginTop: '25px' }}>{textData[language].ContactArticleEstablish}</Styled.ContactArticleContentInfo>
          <Styled.ContactArticleContentInfo style={{ marginTop: '25px'}}>{textData[language].ContactArticleAddress}</Styled.ContactArticleContentInfo>
          <Styled.ContactArticleContentInfo style={{ marginTop: '80px' }}>{textData[language].ContactArticleMobile}</Styled.ContactArticleContentInfo>
          <Styled.ContactArticleContentInfo style={{ marginTop: '34px' }}>{textData[language].ContactArticleTel}</Styled.ContactArticleContentInfo>
          <Styled.ContactArticleContentInfo style={{ marginTop: '34px' }}>{textData[language].ContactArticleEmail}</Styled.ContactArticleContentInfo>
        </Styled.ContactArticleContentInfoWrapper>

        <Styled.ContactArticleContentInfoTextWrapper>
          <Styled.ContactArticleContentInfoText style={{ marginTop: '32px' }}>{textData[language].ContactArticleCEOText}</Styled.ContactArticleContentInfoText>
          <Styled.ContactArticleContentInfoText style={{ marginTop: '25px' }}>2023. 05</Styled.ContactArticleContentInfoText>
          <Styled.ContactArticleContentInfoText style={{ marginTop: '25px' , height: '70px', lineHeight: '28px'}}>{parse(textData[language].ContactArticleAddressText)}</Styled.ContactArticleContentInfoText>
          <Styled.ContactArticleContentInfoText style={{ marginTop: '32px' }}>+82 10-9844-2983</Styled.ContactArticleContentInfoText>
          <Styled.ContactArticleContentInfoText style={{ marginTop: '34px' }}>+82 70-7602-7150</Styled.ContactArticleContentInfoText>
          <Styled.ContactArticleContentInfoText style={{ marginTop: '34px' }}>kgy12@seeuni.co.kr</Styled.ContactArticleContentInfoText>
        </Styled.ContactArticleContentInfoTextWrapper>

        <Styled.ContactArticleContentMapWrapper>
          <ContactMap />
        </Styled.ContactArticleContentMapWrapper>
      </Styled.ContactArticleContentWrapper>
    </Styled.ContactArticleWrapper>
  )
}