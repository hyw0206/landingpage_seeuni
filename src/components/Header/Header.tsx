import * as Styled from 'elements/Header/Header';


export default function Header() {

  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderContentWrapper>

      <Styled.HeaderLogo src="/image/SEEUNI_Logo.png" alt="SEEUNI Logo"/>
      <Styled.HeaderItem>
        <Styled.HeaderItemText>About us</Styled.HeaderItemText>
      </Styled.HeaderItem>
      <Styled.HeaderItem>
        <Styled.HeaderItemText>K-Beauty Export</Styled.HeaderItemText>
      </Styled.HeaderItem>
      <Styled.HeaderItem>
        <Styled.HeaderItemText>ODM Service</Styled.HeaderItemText>
      </Styled.HeaderItem>
      <Styled.HeaderItem>
        <Styled.HeaderItemText>Our Brands</Styled.HeaderItemText>
      </Styled.HeaderItem>
      <Styled.HeaderCountryItem>
        <img src="/image/Header/Korean.png" alt="Change Korean"/>
      </Styled.HeaderCountryItem>
      <Styled.HeaderCountryItem>
        <img src="/image/Header/English.png" alt="Change English"/>
      </Styled.HeaderCountryItem>
   
      </Styled.HeaderContentWrapper>
      
    </Styled.HeaderWrapper>
  )
}