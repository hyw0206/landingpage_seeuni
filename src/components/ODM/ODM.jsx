import * as Styled from 'elements/ODM/ODM';
import ODMInfo from "./ODMInfo";
import ODMMenu from "./ODMMenu";

export default function ODM() {
  return (
    <Styled.ODMWrapper>
      <ODMInfo />
      <ODMMenu />
    </Styled.ODMWrapper>
  )
}