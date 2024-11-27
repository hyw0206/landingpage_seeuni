import * as Styled from 'elements/Contact/Contact';

import ContactArticle from "./ContactArticle";
import ContactRequset from "./ContactRequest";
import ContactMain from "./ContactMain";

export default function Contact() {

  return (
    <Styled.ContactWrapper>
      <ContactMain />
      <div style={{width: "100%", height: "690px", backgroundColor: 'gray'}}>
        ContactInput
      </div>
      <ContactRequset/>
      <ContactArticle />
    </Styled.ContactWrapper>
  )
}