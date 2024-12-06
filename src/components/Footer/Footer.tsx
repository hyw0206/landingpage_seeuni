import * as Styled from 'elements/Footer/Footer';

export default function Footer() {
  return (
    <Styled.FooterWrapper>
      <Styled.FooterContentWrapper>
        <Styled.leftSideFooterDiv>
          <Styled.FooterLogoImg src='/image/Footer/SEEUNI_Logo.png' />
          <Styled.FooterContentText3>서울시 송파구 백제고분로 67 위너스 502호</Styled.FooterContentText3>
          <Styled.FooterContentText4>(070) 7602-7150</Styled.FooterContentText4>
          <Styled.FooterContentText5>kgy12@seeuni.co.kr</Styled.FooterContentText5>
        </Styled.leftSideFooterDiv>
        <Styled.FooterTextWrapper>
          <Styled.FooterContentText6>사업 영역</Styled.FooterContentText6>
          <Styled.FooterContentText7>화장품 기획 및 개발</Styled.FooterContentText7>
          <Styled.FooterContentText7>브랜드 런칭</Styled.FooterContentText7>
          <Styled.FooterContentText7>해외 수출</Styled.FooterContentText7>
          <Styled.FooterContentText7>국내 유통</Styled.FooterContentText7>
        </Styled.FooterTextWrapper>
        <Styled.FooterTextWrapper2>
          <Styled.FooterContentText7>대표 | 박재영</Styled.FooterContentText7>
          <Styled.FooterContentText7>설립일 | 2023.05</Styled.FooterContentText7>
          <Styled.FooterContentText7>Mobile | 010-3187-3203</Styled.FooterContentText7>
        </Styled.FooterTextWrapper2>
      </Styled.FooterContentWrapper>
      <Styled.FooterCopyrightText>©️2023 SEEUNI CO. All rights reserved.</Styled.FooterCopyrightText>
    </Styled.FooterWrapper>
  )
}