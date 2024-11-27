import BrandInfo from "./BrandInfo";
import BrandList from "./BrandList";

import * as Styled from "elements/Brand/Brand"

export default function Brand() {
  return (
    <Styled.BrandWrapper>
      <BrandInfo />
      <Styled.BrandListWrapper>
        <BrandList />
      </Styled.BrandListWrapper>
    </Styled.BrandWrapper>
  )
}