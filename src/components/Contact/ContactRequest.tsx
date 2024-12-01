import * as Styled from "elements/Contact/ContactRequest"
import { languageProps } from "shared/type/commonType"

export default function Request({ language }: languageProps) {

  const textData = {
    "English": {
      "ContactRequestTitle": "Please leave your request!",

      "ContactRequestCompanyTitle": "Company name",
      "ContactRequestCompanyPlaceholder": "Type your company name here",

      "ContactRequestEmailTitle": "E-mail",
      "ContactRequestEmailPlaceholder": "Type email address here",

      "ContactRequestSubjcetTitle": "Subject",
      "ContactRequestSubjcetPlaceholder": "Type subject text here",

      "ContactRequestMessageTitle": "Message",
      "ContactRequestMessagePlaceholder": "Type text here",

      "ContactRequestSendBtn": "Send",
    },
    "Korean": {
      "ContactRequestTitle": "요청란",

      "ContactRequestCompanyTitle": "회사명",
      "ContactRequestCompanyPlaceholder": "여기에 회사명을 입력해 주세요",

      "ContactRequestEmailTitle": "이메일",
      "ContactRequestEmailPlaceholder": "여기에 이메일을 입력해 주세요",

      "ContactRequestSubjcetTitle": "제목",
      "ContactRequestSubjcetPlaceholder": "여기에 제목을 입력해 주세요",

      "ContactRequestMessageTitle": "내용",
      "ContactRequestMessagePlaceholder": "여기에 내용을 입력해 주세요",

      "ContactRequestSendBtn": "전송",
    }
  }

  return (
    <Styled.ContactRequestWrapper>
      <Styled.ContactRequestTitleText>{textData[language].ContactRequestTitle}</Styled.ContactRequestTitleText>
      <Styled.ContactInputWrapper>
        <Styled.ContactRequestTextWrapper>
          <p>*</p><Styled.ContactRequestText>{textData[language].ContactRequestCompanyTitle}</Styled.ContactRequestText>
        </Styled.ContactRequestTextWrapper>
        <Styled.ContactRequestInput
          type="text"
          name="companyName"
          placeholder={textData[language].ContactRequestCompanyPlaceholder}
        />

        <Styled.ContactRequestTextWrapper>
          <p>*</p><Styled.ContactRequestText>{textData[language].ContactRequestEmailTitle}</Styled.ContactRequestText>
        </Styled.ContactRequestTextWrapper>
        <Styled.ContactRequestInput
          type="email"
          name="email"
          placeholder={textData[language].ContactRequestEmailPlaceholder}
        />

        <Styled.ContactRequestTextWrapper>
          <Styled.ContactRequestText>{textData[language].ContactRequestSubjcetTitle}</Styled.ContactRequestText>
        </Styled.ContactRequestTextWrapper>
        <Styled.ContactRequestInput
          type="text"
          name="subject"
          placeholder={textData[language].ContactRequestSubjcetPlaceholder}
        />

        <Styled.ContactRequestTextWrapper>
          <Styled.ContactRequestText>{textData[language].ContactRequestMessageTitle}</Styled.ContactRequestText>
        </Styled.ContactRequestTextWrapper>
        <Styled.ContactRequestTextArea
          name="message"
          placeholder={textData[language].ContactRequestMessagePlaceholder}
        />
      </Styled.ContactInputWrapper>
      <Styled.SubmitButton type="submit">{textData[language].ContactRequestSendBtn}</Styled.SubmitButton>
    </Styled.ContactRequestWrapper>
  )
}
