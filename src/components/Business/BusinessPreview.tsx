import * as Styled from "elements/Business/BusinessPreview"
import { languageProps } from "shared/type/commonType"
import parse from "html-react-parser";

export default function BusinessPreview({language}: languageProps) {
	const titleData1 = {
    "English": {
      "BusinessPreviewTitle": "K-Beauty Export"
    },
    "Korean": {
      "BusinessPreviewTitle": "K뷰티 화장품 수출"
    }
  }

  const textData1 = {
    "English": {
      "BusinessPreviewText": `SEEUNI is already exporting Korean cosmetics to various countries, 
			spreading the beauty of Korea far and wide.`
    },
    "Korean": {
      "BusinessPreviewText": `<span style="font-size: 12px;">Seeuni는 한국 화장품의 우수성을 전 세계에 알리고 있습니다. 
			러시아, 미국, 인도네시아, 일본, 베트남, 남아프리카공화국, 브라질 등 다양한 시장에서 
			한국 화장품의 트렌드를 선도하며, 글로벌 소비자들이 한국의 아름다움을 경험할 수 있도록 지원하고 있습니다.</span>`
    }
  }
	const titleData2 = {
    "English": {
      "BusinessPreviewTitle": "ODM Service"
    },
    "Korean": {
      "BusinessPreviewTitle": "ODM 사업"
    }
  }

  const textData2 = {
    "English": {
      "BusinessPreviewText": `SEEUNI provides ODM services, 
			offering customized cosmetic solutions that meet the unique needs of clients, 
			from product development to branding.`
    },
    "Korean": {
      "BusinessPreviewText": `<span style="font-size: 12px;">각국의 소비자 요구에 맞춰 맞춤형 화장품을 제작하는 ODM 서비스를 제공합니다.
			 Seeuni는 고품질의 제품을 합리적인 가격에 제공하며, 고객사와 협력하여 성공적인 브랜드를 만들어 나가고 있습니다.</span>`
    }
  }
	const titleData3 = {
    "English": {
      "BusinessPreviewTitle": "Own Brands"
    },
    "Korean": {
      "BusinessPreviewTitle": "자체 브랜드 운영"
    }
  }

  const textData3 = {
    "English": {
      "BusinessPreviewText": `SEEUNI collaborates with various brands to 
			showcase high-quality cosmetics that embody the beauty of Korea.`
    },
    "Korean": {
      "BusinessPreviewText": `<span style="font-size: 12px;">SEEUNI는 다양한 브랜드와 협력하여 
			한국의 아름다움을 담은 고품질 화장품을 선보이고 있습니다.</span>`
    }
  }

  return (
    <Styled.BusinessPreviewWrapper>
    	<Styled.BusinessPreviewItem>
				<Styled.BusinessPreviewItemImage src="/image/Business/ShippingIcon.png" />
				<Styled.BusinessPreviewItemTitle>{parse(titleData1[language].BusinessPreviewTitle)}</Styled.BusinessPreviewItemTitle>
				<Styled.BusinessPreviewItemArticle>{parse(textData1[language].BusinessPreviewText)}</Styled.BusinessPreviewItemArticle>
			</Styled.BusinessPreviewItem>
    	<Styled.BusinessPreviewItem>
				<Styled.BusinessPreviewItemImage src="/image/Business/ODMIcon.png" />
				<Styled.BusinessPreviewItemTitle>{parse(titleData2[language].BusinessPreviewTitle)}</Styled.BusinessPreviewItemTitle>
				<Styled.BusinessPreviewItemArticle>{parse(textData2[language].BusinessPreviewText)}</Styled.BusinessPreviewItemArticle>
			</Styled.BusinessPreviewItem>
    	<Styled.BusinessPreviewItem>
				<Styled.BusinessPreviewItemImage src="/image/Business/BrandIcon.png" />
				<Styled.BusinessPreviewItemTitle>{parse(titleData3[language].BusinessPreviewTitle)}</Styled.BusinessPreviewItemTitle>
				<Styled.BusinessPreviewItemArticle>{parse(textData3[language].BusinessPreviewText)}</Styled.BusinessPreviewItemArticle>
			</Styled.BusinessPreviewItem>
    </Styled.BusinessPreviewWrapper>
  )
}