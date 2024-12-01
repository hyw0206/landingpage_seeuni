import { languageProps } from "shared/type/commonType";
import * as Styled from 'elements/ODM/ODM';
import ODMInfo from "./ODMInfo";
import ODMMenu from "./ODMMenu";

export default function ODM({language}: languageProps) {
  return (
    <Styled.ODMWrapper>
      <ODMInfo language={language}/>
      <ODMMenu language={language}/>
    </Styled.ODMWrapper>
  )
}