import * as Styled from "elements/Contact/ContactMain"
import { languageProps } from "shared/type/commonType"
import parse from "html-react-parser";

export default function ContactMain({language}: languageProps) {

  const textData = {
    "English": {
      "ContactMainText": "Contact<br />Us"
    },
    "Korean": {
      "ContactMainText": "우리와 함께<br />하세요"
    }
  }

  return (
    <Styled.ContactMainWrapper>
        <Styled.ContactMainText>{parse(textData[language].ContactMainText)}</Styled.ContactMainText>
    </Styled.ContactMainWrapper>
  )
}