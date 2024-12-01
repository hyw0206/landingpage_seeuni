import { languageProps } from "shared/type/commonType";
import ContactArticle from "./ContactArticle";
import ContactRequset from "./ContactRequest";
import ContactMain from "./ContactMain";

import * as Styled from 'elements/Contact/Contact';

export default function Contact({ language }: languageProps) {

  return (
    <Styled.ContactWrapper>
      <ContactMain
        language={language}
      />
      <ContactRequset
        language={language}
      />
      <ContactArticle
        language={language}
      />
    </Styled.ContactWrapper>
  )
}
