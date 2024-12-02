import { languageProps } from "shared/type/commonType";
import BusinessChannels from "./BusinessChannels";
import BusinessExport from "./BusinessExport";
import BusinessMain from "./BusinessMain";
import BusinessPreview from "./BusinessPreview";

import * as Styled from "elements/Business/Business"


export default function Business({language}: languageProps) {
  return (
    <>
    <Styled.BusinessWrapper>
      <BusinessMain language={language}/>
      <BusinessPreview language={language}/>
      <BusinessExport language={language}/>
      <BusinessChannels language={language}/>
    </Styled.BusinessWrapper>
    </>
  )
}