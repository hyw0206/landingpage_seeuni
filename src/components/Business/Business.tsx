import BusinessChannels from "./BusinessChannels";
import BusinessExport from "./BusinessExport";
import BusinessMain from "./BusinessMain";

import * as Styled from "elements/Business/Business"


export default function Business() {

  return (
    <Styled.BusinessWrapper>
      <BusinessMain />
      <BusinessExport />
      <BusinessChannels />
    </Styled.BusinessWrapper>
  )
}