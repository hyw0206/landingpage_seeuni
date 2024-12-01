import { languageProps } from "shared/type/commonType";
import BrandInfo from "./BrandInfo";
import BrandList from "./BrandList";

import * as Styled from "elements/Brand/Brand"

export default function Brand({language}: languageProps) {
  return (
    <Styled.BrandWrapper>
      <BrandInfo language={language}/>
      <BrandList />
    </Styled.BrandWrapper>
  )
}