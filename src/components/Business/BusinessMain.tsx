import * as Styled from "elements/Business/BusinessMain"
import { languageProps } from "shared/type/commonType"
import parse from "html-react-parser";

export default function BusinessMain({language}: languageProps) {

  const textData = {
    "English": {
      "BusinessMainText": "Business Area"
    },
    "Korean": {
      "BusinessMainText": "<br>사업 영역"
    }
  }
  return (
    <Styled.BusinessMainWrapper>
        <Styled.BusinessMainText>{parse(textData[language].BusinessMainText)}</Styled.BusinessMainText>
    </Styled.BusinessMainWrapper>
  )
}