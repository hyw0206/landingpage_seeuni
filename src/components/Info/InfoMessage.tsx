import * as Styled from "elements/Info/InfoMessage"

export default function InfoMessage() {
  return (
    <Styled.InfoMessageWrapper>
      <Styled.InfoMessageTtile>Message from the CEO.</Styled.InfoMessageTtile>
      <Styled.InfoMessageQuote src="/image/Info/InfoQuotes.png"/>
      <Styled.InfoMessageArticle>
        Seeuni was founded to share the true beauty of Korean cosmetics with consumers around the world. 
        Since entering the cosmetics industry in 2009, 
        I have accumulated extensive experience and gained deep insights into the uniqueness of K-beauty. 
        Now, through Seeuni, I am dedicated to showcasing the exceptional quality of Korean beauty products on a global scale. 
        We promise not only to export products but to deliver the true essence of Korean cosmetics. 
        Join us as we explore new possibilities for K-beauty.
      </Styled.InfoMessageArticle>
      <Styled.InfoMessageArticleLine />
      <Styled.InfoMessageWriter>Jae-Young Park, CEO</Styled.InfoMessageWriter>
    </Styled.InfoMessageWrapper>
  )
}