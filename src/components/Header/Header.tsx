import * as Styled from 'elements/Header/Header';


export default function Header() {

  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderContentWrapper>

      <Styled.HeaderLogo src="/image/SEEUNI_Logo.png"/>
      <Styled.HeaderItem>About us</Styled.HeaderItem>
      <Styled.HeaderItem>K-Beauty Export</Styled.HeaderItem>
      <Styled.HeaderItem>ODM Service</Styled.HeaderItem>
      <Styled.HeaderItem>Our Brands</Styled.HeaderItem>
      <Styled.HeaderItem>Contact us</Styled.HeaderItem>
      </Styled.HeaderContentWrapper>
      
    </Styled.HeaderWrapper>
  )
}