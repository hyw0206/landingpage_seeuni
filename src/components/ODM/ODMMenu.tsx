import * as Styled from 'elements/ODM/ODMMenu';
import { languageProps } from "shared/type/commonType"
import parse from "html-react-parser";

export default function ODMMenu({ language }: languageProps) {
  const titleData = {
    "English": {
      "ODMMenuTitle": "PARTNER MANUFACTURER"
    },
    "Korean": {
      "ODMMenuTitle": "협력 제조업체"
    }
  }

  const textData = {
    "English": {
      "ODMMenuText": `We collaborate with leading companies in K-beauty manufacturing to deliver
          products of the highest quality. <br />
          Together with top experts across various fields, we ensure innovation and <br />excellence.
          <br /> Our partnerships bring exceptional beauty solutions to the global market.`
    },
    "Korean": {
      "ODMMenuText": `우리는 K-뷰티 제조 분야의 선도 기업들과 협력하여 최고 품질의 제품을 제공합니다.
      다양한 분야의 최고 전문가들과 함께 혁신과 탁월함을 보장합니다. <br />
      이러한 파트너십을 통해 세계 시장에 뛰어난 뷰티 솔루션을 선보이고 있습니다.`
    }
  }

  const items = [
    {
      "fileName": "kolmarLogo.png",
      "width": "169",
      "height": "82",
      "margin": "14px 48px 14px 45px"
    },

    {
      "fileName": "cosmeccaLogo.png",
      "width": "290",
      "height": "82",
      "margin": "14px 48px 14px 0px"
    },

    {
      "fileName": "cosmaxLogo.png",
      "width": "263",
      "height": "82",
      "margin": "15px 48px 14px 0px"
    },

    {
      "fileName": "encLogo.png",
      "width": "104",
      "height": "82",
      "margin": "14px 48px 14px 0px"
    }
  ]


  return (
    <Styled.ODMMenuWrapper>
      <Styled.ODMMenuTitleWrapper>
        <Styled.ODMMenuTitle>{parse(titleData[language].ODMMenuTitle)}</Styled.ODMMenuTitle>
      </Styled.ODMMenuTitleWrapper>
      <Styled.ODMMenuPartnerBox>
        {items.map((item) => (
          <Styled.ODMMenuPartnerBoxImage src={"/image/ODM/" + item.fileName}
            width={item.width} height={item.height}
            style={{ margin: item.margin }} />
        ))}
      </Styled.ODMMenuPartnerBox>
      <Styled.ODMMenuTextWrapper>
        <Styled.ODMMenuText>{parse(textData[language].ODMMenuText)}
        </Styled.ODMMenuText>
      </Styled.ODMMenuTextWrapper>
    </Styled.ODMMenuWrapper>
  )
}