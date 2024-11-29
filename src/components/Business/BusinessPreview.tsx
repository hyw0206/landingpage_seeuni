import * as Styled from "elements/Business/BusinessPreview"


export default function BusinessPreview() {

  return (
    <Styled.BusinessPreviewWrapper>
    	<Styled.BusinessPreviewItem>
				<Styled.BusinessPreviewItemImage src="/image/Business/ShippingIcon.png" />
				<Styled.BusinessPreviewItemTitle>K-Beauty Export</Styled.BusinessPreviewItemTitle>
				<Styled.BusinessPreviewItemArticle>SEEUNI is already exporting Korean cosmetics to various countries, spreading the beauty of Korea far and wide.</Styled.BusinessPreviewItemArticle>
			</Styled.BusinessPreviewItem>
    	<Styled.BusinessPreviewItem>
				<Styled.BusinessPreviewItemImage src="/image/Business/ODMIcon.png" />
				<Styled.BusinessPreviewItemTitle>ODM Service</Styled.BusinessPreviewItemTitle>
				<Styled.BusinessPreviewItemArticle>SEEUNI provides ODM services, offering customized cosmetic solutions that meet the unique needs of clients, from product development to branding.</Styled.BusinessPreviewItemArticle>
			</Styled.BusinessPreviewItem>
    	<Styled.BusinessPreviewItem>
				<Styled.BusinessPreviewItemImage src="/image/Business/BrandIcon.png" />
				<Styled.BusinessPreviewItemTitle>Own Brands</Styled.BusinessPreviewItemTitle>
				<Styled.BusinessPreviewItemArticle>SEEUNI collaborates with various brands to showcase high-quality cosmetics that embody the beauty of Korea.</Styled.BusinessPreviewItemArticle>
			</Styled.BusinessPreviewItem>
    </Styled.BusinessPreviewWrapper>
  )
}