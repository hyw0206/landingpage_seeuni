import BusinessChannels from "./BusinessChannels";
import BusinessExport from "./BusinessExport";
import BusinessMain from "./BusinessMain";
import BusinessPreview from "./BusinessPreview";

import * as Styled from "elements/Business/Business"


export default function Business() {

  return (
    <Styled.BusinessWrapper>
      <BusinessMain />
      <BusinessPreview />
      <BusinessExport />
      <BusinessChannels />
    </Styled.BusinessWrapper>
  )
}