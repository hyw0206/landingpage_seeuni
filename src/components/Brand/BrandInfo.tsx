import * as Styled from "elements/Brand/BrandInfo"
import { languageProps } from "shared/type/commonType"
import parse from "html-react-parser";

export default function BrandInfo({language}: languageProps) {
  
  const titleData = {
    "English": {
      "BrandInfoTitle": "Our Brands."
    },
    "Korean": {
      "BrandInfoTitle": "우리의 브랜드."
    }
  }

  const textData = {
    "English": {
      "BrandInfoText": `We proudly own a diverse portfolio of leading K-beauty brands.<br />
          Each brand embodies our commitment to quality, innovation, and excellence.<br />
          Together, they deliver exceptional beauty solutions to customers worldwide.`
    },
    "Korean": {
      "BrandInfoText": `우리는 다양한 선도적인 K-뷰티 브랜드 포트폴리오를 자랑스럽게 보유하고 있습니다. <br />
      각 브랜드는 품질, 혁신, 그리고 탁월함에 대한 우리의 약속을 담고 있습니다. <br />
      이 브랜드들은 전 세계 고객들에게 뛰어난 뷰티 솔루션을 제공합니다.`
    }
  }

  return (
    <Styled.BrandInfoWrapper id="Our-Brands">
      <Styled.BrandInfoTitleWrapper>
        <Styled.BrandInfoTitle>{parse(titleData[language].BrandInfoTitle)}</Styled.BrandInfoTitle>
      </Styled.BrandInfoTitleWrapper>
      <Styled.BrandInfoTextWrapper>
        <Styled.BrandInfoText>{parse(textData[language].BrandInfoText)}
        </Styled.BrandInfoText>
      </Styled.BrandInfoTextWrapper>
    </Styled.BrandInfoWrapper>

  )
}