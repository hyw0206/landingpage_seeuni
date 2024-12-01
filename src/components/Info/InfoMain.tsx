import * as Styled from "elements/Info/InfoMain"
import { languageProps } from "shared/type/commonType"
import parse from "html-react-parser";

export default function InfoMain({language}: languageProps) {

  const textData = {
    "English": {
      "InfoMainText": "Bringing Korean Beauty to the World"
    },
    "Korean": {
      "InfoMainText": "한국의 아름다움을<br />세계로"
    }
  }

  return (
    <Styled.InfoMainWrapper>
      <Styled.InfoMainText>{parse(textData[language].InfoMainText)}</Styled.InfoMainText>
    </Styled.InfoMainWrapper>
  )
} 