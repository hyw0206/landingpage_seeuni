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
      "BusinessExportText": `Seeuni is committed to sharing the excellence of Korean beauty worldwide. 
      By leading the K-beauty trends in markets such as Russia, the United States, Indonesia, Japan, Vietnam, South Africa, and Brazil, 
      Seeuni helps global consumers discover the uniqueness of Korean beauty.`
    },
    "Korean": {
      "BusinessExportText": `Seeuni는 한국 뷰티의 우수성을 전 세계에 알리는 데 전념하고 있습니다. <br />
      러시아, 미국, 인도네시아, 일본, 베트남, 남아프리카공화국, 브라질 등 다양한 <br /> 시장에서 K-뷰티 트렌드를 선도하며, 
      전 세계 소비자들이 한국 뷰티의 독창성을 발견할 수 있도록 돕고 있습니다.`
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