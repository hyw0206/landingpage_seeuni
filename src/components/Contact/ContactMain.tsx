import * as Styled from "elements/Contact/ContactMain"
import { languageProps } from "shared/type/commonType"
import parse from "html-react-parser";

export default function ContactMain({language}: languageProps) {

  const textData = {
    "English": {
      "ContactMainText": "Contact<br />Us"
    },
    "Korean": {
      "ContactMainText": "<br />문의하기"
    }
  }

  return (
    <Styled.ContactMainWrapper id="Contact-us">
        <Styled.ContactMainText>{parse(textData[language].ContactMainText)}</Styled.ContactMainText>
    </Styled.ContactMainWrapper>
  )
}