import * as Styled from 'elements/Contact/Contact';

import ContactArticle from "./ContactArticle";
import ContactRequset from "./ContactRequest";
import ContactMain from "./ContactMain";

export default function Contact() {

  return (
    <Styled.ContactWrapper>
      <ContactMain />
      <ContactRequset/>
      <ContactArticle />
    </Styled.ContactWrapper>
  )
}
