import * as Styled from "elements/Business/BusinessExport"

export default function BusinessExport() {

  return (
    <Styled.BusinessExportWrapper>
      <Styled.BusinessExportTitle>K- Beauty Export.</Styled.BusinessExportTitle>
      <Styled.BusinessExportArticleWrapper>
        <Styled.BusinessExportArticleText>
        Seeuni is committed to sharing the excellence of Korean beauty worldwide. By leading the K-beauty trends in markets such as Russia, the United States, Indonesia, Japan, Vietnam, South Africa, and Brazil, Seeuni helps global consumers discover the uniqueness of Korean beauty.
        </Styled.BusinessExportArticleText>
        <Styled.BusinessExportArticleLine />
        <Styled.BusinessExportArticleImage src="/image/Business/BusinessExport.png"/>
      </Styled.BusinessExportArticleWrapper>
    </Styled.BusinessExportWrapper>
  )
}