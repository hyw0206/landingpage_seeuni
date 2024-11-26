import * as Styled from "elements/Brand/BrandItem"

export default function BrandItem({ number = NaN, imageUrl = "" }) {
  return (
    <Styled.BrandItemWrapper>
      <img 
        src={imageUrl} 
        alt={`Brand Item ${number}`} 
        style={{ width: "100px", height: "100px" }} 
      />
      <div>
        Brand Item {number + 1}
      </div>
    </Styled.BrandItemWrapper>
  );
}
