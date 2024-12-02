import * as Styled from "elements/Info/InfoMessage"
import { languageProps } from "shared/type/commonType"
import parse from "html-react-parser";

export default function InfoMessage({ language }: languageProps) {
  const titleData = {
    "English": {
      "InfoMessageTitle": "Korean Beauty to the World."
    },
    "Korean": {
      "InfoMessageTitle": "대표 인사말"
    },
  }
  const textData = {
    "English": {
      "InfoMessageText": `Seeuni was founded to share the true beauty of Korean cosmetics with consumers around the world. 
        Since entering the cosmetics industry in 2009, 
        I have accumulated extensive experience and gained deep insights into the uniqueness of K-beauty.<br />
        Now, through Seeuni, I am dedicated to showcasing the exceptional quality of Korean beauty<br />
        products on a global scale.<br />
        We promise not only to export products but to deliver the true essence of Korean cosmetics.<br />
        Join us as we explore new possibilities for K-beauty.`
    },
    "Korean": {
      "InfoMessageText": `“Seeuni는 한국 화장품의 진정한 아름다움을 세계 각국의 소비자들과 함께 나누기 위해 시작한 회사입니다. 
      저는 2009년부터 화장품 업계에서 쌓아온 경험을 바탕으로, <br /> K뷰티의 특별함을 전 세계에 전달하고자 Seeuni를 설립했습니다. 
      Seeuni는 단순한 수출을 넘어, <br /> 한국 화장품의 진가와 가치를 글로벌 무대에 선보이겠다는 약속을 지키겠습니다. 
      <br />고객 여러분과 함께 한국 화장품의 새로운 가능성을 열어가고 싶습니다.”`
    },
  }
  const ceoData = {
    "English": {
      "InfoMessageCEO": `Jae-Young Park, <span style="font-weight: 400; font-size: 20px; color: #ED74DA";>CEO</span>`
    },
    "Korean": {
      "InfoMessageCEO": `박재영 <span style="font-weight: 400; font-size: 20px; color: #ED74DA";>대표</span>`
    },
  }

  return (
    <Styled.InfoMessageWrapper>
      <Styled.InfoMessageTtile>{parse(titleData[language].InfoMessageTitle)}</Styled.InfoMessageTtile>
      <Styled.InfoMessageQuote src="/image/Info/InfoQuotes.png"/>
      <Styled.InfoMessageArticle>
      {parse(textData[language].InfoMessageText)}
      </Styled.InfoMessageArticle>
      <Styled.InfoMessageArticleLine />
      <Styled.InfoMessageWriter>{parse(ceoData[language].InfoMessageCEO)}</Styled.InfoMessageWriter>
    </Styled.InfoMessageWrapper>
  )
}