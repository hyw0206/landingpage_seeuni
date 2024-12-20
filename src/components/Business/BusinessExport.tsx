import * as Styled from "elements/Business/BusinessExport"
import { languageProps } from "shared/type/commonType"
import parse from "html-react-parser";

export default function BusinessExport({language}: languageProps) {
  const titleData = {
    "English": {
      "BusinessExportTitle": "K-Beauty Export"
    },
    "Korean": {
      "BusinessExportTitle": "K-뷰티 화장품 수출"
    }
  }

  const textData = {
    "English": {
      "BusinessExportText": `SEEUNI shares the beauty of Korea<br />  
      with the world, leading K-beauty trends<br />  
      in global markets such as Russia,<br />  
      the United States, Indonesia, Japan,<br />  
      Vietnam, South Africa, and Brazil.`
    },
    "Korean": {
      "BusinessExportText": `씨유니는 한국의 아름다움을<br /> 
      전 세계에 전하며,<br />   
      러시아, 미국, 인도네시아, 일본,<br />   
      베트남, 남아공, 브라질 등<br />   
      글로벌 시장에서<br />   
      K-뷰티 트렌드를 이끌고 있습니다.`
    }
  }

  return (
    <Styled.BusinessExportWrapper id="K-BeautyExport">
      <Styled.BusinessExportTitle>{parse(titleData[language].BusinessExportTitle)}</Styled.BusinessExportTitle>
      <Styled.BusinessExportArticleWrapper>
        <Styled.BusinessExportArticleText
          className={language === "Korean" ? "korean" : ""}
        >
          {parse(textData[language].BusinessExportText)}
        </Styled.BusinessExportArticleText>
        <Styled.BusinessExportArticleLine />
        <Styled.BusinessExportArticleImage src="/image/Business/BusinessExport.png"/>
      </Styled.BusinessExportArticleWrapper>
    </Styled.BusinessExportWrapper>
  )
}