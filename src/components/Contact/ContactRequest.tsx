import * as Styled from "elements/Contact/ContactRequest"
import { languageProps } from "shared/type/commonType"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

 
export default function Request({ language }: languageProps) {

    const form = useRef<HTMLFormElement>(null); // 폼 참조에 제네릭 타입 추가

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      if (form.current) {
        emailjs
          .sendForm(
            'service_zqqbgcy', 
            'template_2ykjpv8', 
            form.current, 
            'QYqGcq8VSAe7V4VP9'
          )
          .then(
            (result) => {
                alert("Email sent successfully!");
              console.log('SUCCESS!', result.text);
            },
            (error) => {
                alert("Failed to send email.");
              console.log('FAILED...', error.text);
            }
          );
      }
    };    
    
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
        <form ref={form} onSubmit={sendEmail}>
      <Styled.ContactRequestTitleText>{textData[language].ContactRequestTitle}</Styled.ContactRequestTitleText>
      <Styled.ContactInputWrapper>
        <Styled.ContactRequestTextWrapper>
          <p>*</p><Styled.ContactRequestText>{textData[language].ContactRequestCompanyTitle}</Styled.ContactRequestText>
        </Styled.ContactRequestTextWrapper>
        <Styled.ContactRequestInput
          type="text"
          name="company_name"
          placeholder={textData[language].ContactRequestCompanyPlaceholder}
        />

        <Styled.ContactRequestTextWrapper>
          <p>*</p><Styled.ContactRequestText>{textData[language].ContactRequestEmailTitle}</Styled.ContactRequestText>
        </Styled.ContactRequestTextWrapper>
        <Styled.ContactRequestInput
          type="email"
          name="company_email"
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
      </form>
    </Styled.ContactRequestWrapper>
  )
}

