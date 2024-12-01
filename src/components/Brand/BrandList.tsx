import BrandItem from "./BrandItem";
import { Link } from "react-router-dom";
import * as Styled from "elements/Brand/BrandList";

export default function BrandList() {
  const brandNumber = 9;

  const items = [
    {
      "fileName": "daymellowLogo.png",
      "width": "292",
      "height": "91",
      "label": `daymellow’
      (데이멜로우)`,
      "route": "/daymellow"
    },

    {
      "fileName": "dintoLogo.png",
      "width": "196",
      "height": "91",
      "label": `Dinto 
      (딘토)`,
      "route": "/dinto"
    },

    {
      "fileName": "medipeelLogo.png",
      "width": "289",
      "height": "68",
      "label": `MEDIPEEL+
      (메디필)`,
    },

    {
      "fileName": "aplbLogo.png",
      "width": "240",
      "height": "91",
      "label": `APLB
      (에이필엘비)`,
    },

    {
      "fileName": "lebelageLogo.png",
      "width": "315",
      "height": "91",
      "label": `LEBELAGE
      (르베라쥬)`,
    },

    {
      "fileName": "uiqLogo.png",
      "width": "162",
      "height": "91",
      "label": `UIQ
      (유이크)`,
    },

    {
      "fileName": "herbloom.png",
      "width": "277",
      "height": "70",
      "label": `Herbloom
      (허블룸)`,
    },

    {
      "fileName": "vtcosmeticsLogo.png",
      "width": "272",
      "height": "80",
      "label": `VT COSMETICS
      (VT 코스메틱스)`,
    },

    {
      "fileName": "heavymakeupLogo.png",
      "width": "282",
      "height": "50",
      "label": `HEAVY MAKEUP
      (헤비 메이크업)`,
    },

    {
      "fileName": "herbloom.png",
      "width": "277",
      "height": "81",
      "label": `Dinto 
      (딘토)`,
    },

    {
      "fileName": "vtcosmeticsLogo.png",
      "width": "272",
      "height": "80",
      "label": `Dinto 
      (딘토)`,
    },

    {
      "fileName": "heavymakeupLogo.png",
      "width": "282",
      "height": "50",
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
                height={item.height} />
            </Styled.BrandListItem>
            <Styled.BrandListLabel style={{
              height: "75px",
              fontSize: "32px",
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

