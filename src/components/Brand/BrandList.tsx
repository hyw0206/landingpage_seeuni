// import BrandItem from "./BrandItem";
// import { Link } from "react-router-dom";
import * as Styled from "elements/Brand/BrandList";

export default function BrandList() {
  // const brandNumber = 16;

  const items = [
    {
      "fileName": "daymellowLogo.png",
      "width": "190",
      "height": "90",
      "label": `daymellow’
      (데이멜로우)`,
      "route": "/daymellow"
    },

    {
      "fileName": "dintoLogo.png",
      "width": "150",
      "height": "90",
      "label": `Dinto 
      (딘토)`,
      "route": "/dinto"
    },

    {
      "fileName": "medipeelLogo.png",
      "width": "190",
      "height": "80",
      "label": `MEDIPEEL+
      (메디필)`,
    },

    {
      "fileName": "aplbLogo.png",
      "width": "160",
      "height": "90",
      "label": `APLB
      (에이필엘비)`,
    },

    {
      "fileName": "lebelageLogo.png",
      "width": "180",
      "height": "90",
      "label": `LEBELAGE
      (르베라쥬)`,
    },

    {
      "fileName": "uiqLogo.png",
      "width": "130",
      "height": "90",
      "label": `UIQ
      (유이크)`,
    },

    {
      "fileName": "herbloom.png",
      "width": "180",
      "height": "70",
      "label": `Herbloom
      (허블룸)`,
    },

    {
      "fileName": "vtcosmeticsLogo.png",
      "width": "180",
      "height": "80",
      "label": `VT COSMETICS
      (VT 코스메틱스)`,
    },

    {
      "fileName": "heavymakeupLogo.png",
      "width": "200",
      "height": "80",
      "label": `HEAVY MAKEUP
      (헤비 메이크업)`,
    },

    {
      "fileName": "herbloom.png",
      "width": "180",
      "height": "70",
      "label": `Dinto 
      (딘토)`,
    },

    {
      "fileName": "vtcosmeticsLogo.png",
      "width": "180",
      "height": "80",
      "label": `Dinto 
      (딘토)`,
    },

    {
      "fileName": "heavymakeupLogo.png",
      "width": "200",
      "height": "80",
      "label": `Dinto 
      (딘토)`,
    },

    {
      "fileName": "heavymakeupLogo.png",
      "width": "200",
      "height": "80",
      "label": `Dinto 
      (딘토)`,
    },

    {
      "fileName": "heavymakeupLogo.png",
      "width": "200",
      "height": "80",
      "label": `Dinto 
      (딘토)`,
    },

    {
      "fileName": "heavymakeupLogo.png",
      "width": "200",
      "height": "80",
      "label": `Dinto 
      (딘토)`,
    },

    {
      "fileName": "heavymakeupLogo.png",
      "width": "200",
      "height": "80",
      "label": `Dinto 
      (딘토)`,
    }
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
              height: "75px",
              fontSize: "24px",
              fontWeight: "500",
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

