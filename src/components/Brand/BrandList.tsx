// import BrandItem from "./BrandItem";
// import { Link } from "react-router-dom";
import * as Styled from "elements/Brand/BrandList";

export default function BrandList() {
  const items = [
    {
      "fileName": "Brand1_Dinto.png",
      "width": "180",
      "height": "90",
      "label": `Dinto 
      (딘토)`,
      "route": "/Dinto"
    },
    {
      "fileName": "Brand2_VTCosmetics.png",
      "width": "150",
      "height": "90",
      "label": `VT COSMETICS
      (브이티 코스메틱)`,
      "route": "/VTCosmetics"
    },
    {
      "fileName": "Brand3_BeautyOfJoseon.webp",
      "width": "500",
      "height": "80",
      "label": `Beauty of Joseon
      (조선미녀)`,
    },
    {
      "fileName": "Brand4_Demar3.png",
      "width": "120",
      "height": "90",
      "label": `DEMAR3
      (디마르)`,
    },
    {
      "fileName": "Brand14_Acwell.png",
      "width": "100",
      "height": "80",
      "label": `acwell
      (아크웰)`,
    },
    {
      "fileName": "Brand15_AMOS.png",
      "width": "120",
      "height": "70",
      "label": `AMOS
      (아모스)`,
    },
    {
      "fileName": "Brand5_APLB.png",
      "width": "120",
      "height": "90",
      "label": `APLB
      (에이피엘비)`,
    },

    {
      "fileName": "Brand12_Coralhaze.png",
      "width": "140",
      "height": "80",
      "label": `Coralhaze 
      (코랄헤이즈)`,
    },
    {
      "fileName": "Brand13_Giverny.png",
      "width": "150",
      "height": "80",
      "label": `GIVERNY
      (지베르니)`,
    },
    {
      "fileName": "Brand9_Haruharu.png",
      "width": "120",
      "height": "80",
      "label": `haruharu wonder
      (하루하루원더)`,
    },
    {
      "fileName": "Brand8_Hwasa.png",
      "width": "110",
      "height": "80",
      "label": `HWASA
      (화사)`,
    },
    {
      "fileName": "Brand10_Koy.png",
      "width": "120",
      "height": "70",
      "label": `Koy 
      (코이)`,
    },
    {
      "fileName": "Brand16_LEBELAGE.png",
      "width": "200",
      "height": "80",
      "label": `LEBELAGE
      (르베라쥬)`,
    },
    {
      "fileName": "Brand7_Midha.png",
      "width": "120",
      "height": "70",
      "label": `MIDHA
      (미다)`,
    },
    {
      "fileName": "Brand11_persent.png",
      "width": "60",
      "height": "80",
      "label": `Persent Science
      (퍼센트사이언스)`,
    },
    {
      "fileName": "Brand6_Sudee.png",
      "width": "140",
      "height": "90",
      "label": `Sudee
      (수다이)`,
    },

  ]

  return (
    <Styled.BrandListContainer>
      <Styled.BrandListInner>
        {items.map((item) => (
          <Styled.BrandListBox>
            <Styled.BrandListItem>
              <Styled.BrandListImage src={"/image/Brand/" + item.fileName}
                width={item.width}
                height={item.height} 
                draggable={false} 
                onDragStart={(e) => e.preventDefault()}/>
            </Styled.BrandListItem>
            <Styled.BrandListLabel style={{
              textAlign: "center",
              height: "75px",
              fontSize: "23px",
              fontWeight: "600",
              marginTop: "15px",
              lineHeight: "38px",
              border: "none"
            }}>
              {item.label}
            </Styled.BrandListLabel>
          </Styled.BrandListBox>
        ))}
      </Styled.BrandListInner>
    </Styled.BrandListContainer>
  );
};

