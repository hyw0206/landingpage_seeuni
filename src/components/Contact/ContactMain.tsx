import * as Styled from "elements/Contact/ContactMain"
import { languageProps } from "shared/type/commonType"

export default function ContactMain({language}: languageProps) {

  const textData = {
    "English": {
      "ContactMainText": "Contact<br />Us"
    },
    "Korean": {
      "ContactMainText": "문의하기"
    }
  }

  return (
    <Styled.ContactMainWrapper id="Contact-us">
        <Styled.ContactMainText>{textData[language].ContactMainText}</Styled.ContactMainText>
    </Styled.ContactMainWrapper>
  )
}