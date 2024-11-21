import InfoAbout from "./InfoAbout";
import InfoMain from "./InfoMain";
import InfoMessage from "./InfoMessage";

import * as Styled from "elements/Info/Info";

export default function Info() {
  return (
    <Styled.InfoWrapper>
      <InfoMain />
      <InfoAbout />
      <InfoMessage />
    </Styled.InfoWrapper>
  )
}