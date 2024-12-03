import * as Styled from 'elements/ODM/ODMInfo';
import { languageProps } from "shared/type/commonType"
import parse from "html-react-parser";

export default function ODMInfo({ language }: languageProps) {

  const titleData = {
    "English": {
      "ODMInfoTitle": "ODM Services."
    },
    "Korean": {
      "ODMInfoTitle": "ODM 사업"
    }
  }

  const textData = {
    "English": {
      "ODMInfoText": `We provide custom <span style="font-weight: 500;">ODM</span>
        <span style="font-weight: 500;"> services</span> to<br />meet the unique
        demands of each market.<br />By collaborating with clients,
        SEEUNI creates <span style="font-weight: 500;">high-quality</span>, affordable
       <span style="font-weight: 500;"> beauty products </span>
        that achieve
        success across diverse markets.`
    },
    "Korean": {
      "ODMInfoText": `<br/>각국의 소비자 요구에 맞춰 맞춤형 화장품을 제작하는 <span style="font-weight: 500;">ODM 서비스</span>를 제공합니다. <br /> Seeuni는 <span style="font-weight: 500;">고품질</span>의 제품을 합리적인 가격에 제공하며, 고객사와 협력하여 성공적인 <br /> 브랜드를 만들어 나가고 있습니다.`
    }
  }

  return (
    <Styled.ODMInfoWrapper id='ODM-Service'>
      <Styled.ODMInfoTitleWrapper>
        <Styled.ODMInfoTitle>{parse(titleData[language].ODMInfoTitle)}</Styled.ODMInfoTitle>
      </Styled.ODMInfoTitleWrapper>
      <Styled.ODMInfoDetailWrapper>
        <Styled.ODMArticleImage src="/image/ODM/ODMImage.png" />
        {/* <Styled.ODMArticleLine /> */}
        <Styled.ODMInfoArticleTextWrapper>
          <Styled.ODMInfoArticleText>{parse(textData[language].ODMInfoText)}
          </Styled.ODMInfoArticleText>
        </Styled.ODMInfoArticleTextWrapper>
      </Styled.ODMInfoDetailWrapper>
    </Styled.ODMInfoWrapper>
  )
}