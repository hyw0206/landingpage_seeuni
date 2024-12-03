import * as Styled from "elements/Contact/ContactRequest"
import { languageProps } from "shared/type/commonType"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Request({ language }: languageProps) {

  const form = useRef<HTMLFormElement>(null); // 폼 참조에 제네릭 타입 추가

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
        // 'Company name'과 'Email' 필드가 비어있는지 확인
        const companyName = form.current["company_name"].value;
        const companyEmail = form.current["company_email"].value;
  
        if (!companyName || !companyEmail) {
            if(language === "English"){
                alert("Please fill in both the Company Name and Email fields.");
            } else {
                alert("회사명과 이메일을 모두 입력해주세요.");
            }
          return; // 필드가 비어 있으면 폼 제출을 막음
        }
        if (!form.current) {
            console.error("환경 변수가 설정되지 않았거나 올바르지 않습니다.");
            return;
          }

        emailjs
        .sendForm(process.env.REACT_APP_SERVICE_ID as string, process.env.REACT_APP_TEMPLATE_ID as string, form.current, process.env.REACT_APP_PUBLIC_KEY as string)
        .then(
          (result) => {
            if(language === "English") {
                alert("Email sent successfully!");
            } else {
                alert("이메일이 성공적으로 전송되었습니다.");
            }
          },
          (error) => {
            if(language === "Korean") {
                alert("Failed to send email.");
              console.log('FAILED...', error.text);
            } else {
                alert("이메일 전송에 실패했습니다.");
            }
          }
        );
    
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const maxSize = 2 * 1024 * 1024; // 2MB 제한
    const files = event.target.files;

    if (files) {
      const totalSize = calculateTotalFileSize(files);

      if (totalSize > maxSize) {
        if(language === "English") {
            alert("The total size of the attached file must not exceed 2MB.");
        } else {
            alert("첨부된 파일의 총 크기는 2MB를 초과할 수 없습니다.");
        }
        event.target.value = ""; // 입력된 파일 제거
      }
    }
  };


  const calculateTotalFileSize = (files: FileList): number => {
    let totalSize = 0;
    for (let i = 0; i < files.length; i++) {
      totalSize += files[i].size;
    }
    return totalSize;
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

      "ContactRequestAddFile": "Add file",
      "ContactRequestAddFileBtn": "Select file",

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

      "ContactRequestAddFile": "파일 첨부",
      "ContactRequestAddFileBtn": "파일 선택",

      "ContactRequestSendBtn": "전송",
    }
  }

  return (
    <Styled.ContactRequestWrapper>
      <form ref={form} onSubmit={sendEmail} encType="multipart/form-data">
        <Styled.ContactRequestTitleText>{textData[language].ContactRequestTitle}</Styled.ContactRequestTitleText>
        <Styled.ContactInputWrapper>
          <Styled.ContactRequestTextWrapper>
            <p>*</p><Styled.ContactRequestText>{textData[language].ContactRequestCompanyTitle}</Styled.ContactRequestText>
          </Styled.ContactRequestTextWrapper>
          <Styled.ContactRequestInput
            type="text"
            name="company_name"
            placeholder={textData[language].ContactRequestCompanyPlaceholder}
            required
          />

          <Styled.ContactRequestTextWrapper>
            <p>*</p><Styled.ContactRequestText>{textData[language].ContactRequestEmailTitle}</Styled.ContactRequestText>
          </Styled.ContactRequestTextWrapper>
          <Styled.ContactRequestInput
            type="email"
            name="company_email"
            placeholder={textData[language].ContactRequestEmailPlaceholder}
            required
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
          <Styled.ContactRequestFileInputWrapper>
            <input type="file" accept=".pdf, .doc, .docx, .hwp, .ppt, .pptx, .jpg, .png, .jpeg" name="my_file" multiple onChange={handleFileChange} ></input>
          </Styled.ContactRequestFileInputWrapper>

        </Styled.ContactInputWrapper>
        <Styled.SubmitButton type="submit">{textData[language].ContactRequestSendBtn}</Styled.SubmitButton>
      </form>
    </Styled.ContactRequestWrapper>
  )
}

