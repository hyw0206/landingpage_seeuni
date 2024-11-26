import * as Styled from "elements/Contact/ContactRequest"

export default function Request() {

    return (
        <Styled.ContactRequestWrapper>
        <Styled.ContactRequestTitleText>Please leave your request!</Styled.ContactRequestTitleText>
          <Styled.ContactInputWrapper>
            <Styled.ContactRequestTextWrapper>
                <p>*</p><Styled.ContactRequestText>Company name</Styled.ContactRequestText>
            </Styled.ContactRequestTextWrapper>
            <Styled.ContactRequestInput
              type="text"
              name="companyName"
              placeholder="Type your company name here"
            />

            <Styled.ContactRequestTextWrapper>
                <p>*</p><Styled.ContactRequestText>E-mail</Styled.ContactRequestText>
            </Styled.ContactRequestTextWrapper>
            <Styled.ContactRequestInput
              type="email"
              name="email"
              placeholder="Type email address here"
            />

            <Styled.ContactRequestTextWrapper>
                <Styled.ContactRequestText>Subject</Styled.ContactRequestText>
            </Styled.ContactRequestTextWrapper>
            <Styled.ContactRequestInput
              type="text"
              name="subject"
              placeholder="Type subject text here"
            />

            <Styled.ContactRequestTextWrapper>
                <Styled.ContactRequestText>Message</Styled.ContactRequestText>
            </Styled.ContactRequestTextWrapper>
            <Styled.ContactRequestTextArea
              name="message"
              placeholder="Type text here"
            />
          </Styled.ContactInputWrapper>
          <Styled.SubmitButton type="submit">SEND</Styled.SubmitButton>
      </Styled.ContactRequestWrapper>
    )
  }