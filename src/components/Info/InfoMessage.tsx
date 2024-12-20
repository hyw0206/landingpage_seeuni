import * as Styled from "elements/Info/InfoMessage"
import { languageProps } from "shared/type/commonType"
import parse from "html-react-parser";

export default function InfoMessage({ language }: languageProps) {
  const titleData = {
    "English": {
      "InfoMessageTitle": "Korean Beauty to the World."
    },
    "Korean": {
      "InfoMessageTitle": "한국의 아름다움을 세계에 알리다."
    },
  }
  const textData = {
    "English": {
      "InfoMessageText": `SEEUNI was founded to bring the essence of Korean cosmetics to the world.<br />
      With experience accumulated in the beauty industry since 2009,<br /> we are dedicated to showcasing the excellence of Korean cosmetics.<br />
      Invest in the limitless potential of K-beauty. We are seeking partners to grow together.
      `
    },
    "Korean": {
      "InfoMessageText": `씨유니는 한국 화장품의 본질을 세계에 전하기 위해 시작되었습니다.<br />
      2009년부터 뷰티 산업에서 쌓아온 경험을 바탕으로,<br /> 한국 화장품의 우수성을 알리는 데 집중하고 있습니다.<br />
      K-뷰티의 무한한 가능성에 투자하세요. 함께 성장할 파트너를 찾고 있습니다.`
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
      <Styled.InfoMessageArticle
        className={language === "Korean" ? "korean" : ""}
      >
        {parse(textData[language].InfoMessageText)}
      </Styled.InfoMessageArticle>
      <Styled.InfoMessageArticleLine />
      <Styled.InfoMessageWriter
        className={language === "Korean" ? "korean" : ""}
      >{parse(ceoData[language].InfoMessageCEO)}</Styled.InfoMessageWriter>
    </Styled.InfoMessageWrapper>
  )
}