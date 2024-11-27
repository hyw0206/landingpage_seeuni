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
      <Styled.HeaderItem>
        <Styled.HeaderItemText>Contact us</Styled.HeaderItemText>
      </Styled.HeaderItem>
      <div style={{display: "flex", flexDirection: "column"}}>
        <Styled.HeaderCountryWrapper>
          <Styled.HeaderCountryLogo src="/image/Header/language.png" alt="change language" />
          <Styled.HeaderCountryLogo src="/image/Header/arrow_drop_down.png" alt="view change language" />
        </Styled.HeaderCountryWrapper>
        <Styled.HeaderCountryText>
          English
        </Styled.HeaderCountryText>
      </div>
   
      </Styled.HeaderContentWrapper>
      
    </Styled.HeaderWrapper>
  )
}