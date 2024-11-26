import BrandItem from "./BrandItem";
import * as Styled from "elements/Brand/BrandList";

export default function BrandList() {
  const brandNumber = 9;
  
  // 이미지 URL 배열
  const imageUrls = [
    "/image/Brand/aplbLogo.png",
    "/image/Brand/daymellowLogo.png",
    "/image/Brand/dingoLogo.png",
    "/image/Brand/heavymakeupLogo.png",
    "/image/Brand/lebelageLogo.png",
    "/image/Brand/medipeelLogo.png",
    "/image/Brand/uiqLogo.png",
    "/image/Brand/vtcosmeticsLogo.png",
    "/image/Brand/herbloomLogo.png",
  ];

  return (
    <Styled.BrandListWrapper>
      {
        Array(brandNumber).fill(0).map((_, idx) => {
          return (
            <BrandItem 
              number={idx} 
              key={idx} 
              imageUrl={imageUrls[idx % imageUrls.length]} // 이미지 URL을 순환해서 전달
            />
          )
        })
      }
    </Styled.BrandListWrapper>
  );
}
