import * as Styled from 'elements/Footer/Footer';

export default function Footer() {
  return (
    <Styled.FooterWrapper>
      <Styled.FooterContentWrapper>
        <Styled.FooterLogoImg src='/image/Footer/SEEUNI_Logo.png' />
        <Styled.FooterTextWrapper>
          <Styled.FooterContentText>(주)씨유니 (SEEUNI CO., LTD)</Styled.FooterContentText>
          <Styled.FooterContentText>대표 | 박재영</Styled.FooterContentText>
          <Styled.FooterContentText>사업 영역 | 화장품 기획 및 개발, 브랜드 런칭, 해외 수출, 국내 유통</Styled.FooterContentText>
          <Styled.FooterContentText>설립일 | 2023. 05</Styled.FooterContentText>
          <Styled.FooterContentText>주소지 | 서울시 송파구 백제고분로 67 위너스 502호</Styled.FooterContentText>
          <Styled.FooterContentText>Tel. | +82. 70-7602-7150</Styled.FooterContentText>
          <Styled.FooterContentText2>Mobile | +82. 10-3187-3203</Styled.FooterContentText2>
        </Styled.FooterTextWrapper>
      </Styled.FooterContentWrapper>
      <Styled.FooterCopyrightText>©️2023 SEEUNI CO. All rights reserved.</Styled.FooterCopyrightText>
    </Styled.FooterWrapper>
  )
}