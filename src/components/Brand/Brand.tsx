import BrandInfo from "./BrandInfo";
import BrandList from "./BrandList";

import * as Styled from "elements/Brand/Brand"

export default function Brand() {
  return (
    <Styled.BrandWrapper>
      <BrandInfo />
      <BrandList />
    </Styled.BrandWrapper>
  )
}