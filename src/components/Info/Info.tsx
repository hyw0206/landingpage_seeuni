import { languageProps } from "shared/type/commonType";
import InfoAbout from "./InfoAbout";
import InfoMain from "./InfoMain";
import InfoMessage from "./InfoMessage";

import * as Styled from "elements/Info/Info";

export default function Info({language}: languageProps) {
  return (
    <Styled.InfoWrapper>
      <InfoMain 
        language={language}
      />
      <InfoAbout />
      <InfoMessage />
    </Styled.InfoWrapper>
  )
}