import * as Styled from 'elements/Contact/Contact';

import ContactArticle from "./ContactArticlet";
import ContactMain from "./ContactMain";

export default function Contact() {

  return (
    <Styled.ContactWrapper>
      <ContactMain />
      <ContactArticle />
    </Styled.ContactWrapper>
  )
}