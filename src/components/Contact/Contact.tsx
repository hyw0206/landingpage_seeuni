import * as Styled from 'elements/Contact/Contact';

import ContactArticle from "./ContactArticle";
import ContactMain from "./ContactMain";

export default function Contact() {

  return (
    <Styled.ContactWrapper>
      <ContactMain />
      <div style={{width: "100%", height: "690px", backgroundColor: 'gray'}}>
        ContactInput
      </div>
      <ContactArticle />
    </Styled.ContactWrapper>
  )
}