import BrandItem from "./BrandItem";
import * as Styled from "elements/Brand/BrandList";

export default function BrandList() {
  const brandNumber = 9;

  const items2 = [
    {
      "fileName": "daymellowLogo.png",
      "width": "292",
      "height": "91",
      "label": `daymellow’
      (데이멜로우)`,
    },

    {
      "fileName": "dintoLogo.png",
      "width": "196",
      "height": "91",
      "label": `Dinto 
      (딘토)`,
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

  // const items = [
  //   { id: 1, src: '/image/Brand/daymellowLogo.png', label: 'daymellow', path: '/daymellow' },
  //   { id: 2, src: '/image/Brand/dintoLogo.png', label: 'Dinto', path: '/dinto' },
  //   { id: 3, src: '/image/Brand/medipeelLogo.png', label: 'MEDIPEEL+', path: '/medipeel' },
  //   { id: 4, src: '/image/Brand/aplbLogo.png', label: 'APLB', path: '/aplb' },
  //   { id: 5, src: '/image/Brand/lebelageLogo.png', label: 'LEBELAGE', path: '/lebelage' },
  //   { id: 6, src: '/image/Brand/uiqLogo.png', label: 'UIQ', path: '/uiq' },
  //   { id: 7, src: '/image/Brand/herbloom.png', label: 'Herbloom', path: '/herbloom' },
  //   { id: 8, src: '/image/Brand/vtcosmeticsLogo.png', label: 'VT Cosmetics', path: '/vtcosmetics' },
  //   { id: 9, src: '/image/Brand/heavymakeupLogo.png', label: 'HEVVY MAKEUP', path: '/hevvy' },
  //   { id: 10, src: '/image/Brand/heavymakeupLogo.png', label: 'HEVVY MAKEUP', path: '/hevvy' },
  //   { id: 11, src: '/image/Brand/heavymakeupLogo.png', label: 'HEVVY MAKEUP', path: '/hevvy' },
  //   { id: 12, src: '/image/Brand/heavymakeupLogo.png', label: 'HEVVY MAKEUP', path: '/hevvy' },
  // ];

  return (
    <Styled.BrandListContainer>
      {items2.map((item) => (
        <Styled.BrandListBox>
          <Styled.BrandListItem>
            <Styled.BrandListImage src={"/image/Brand/" + item.fileName}
              width={item.width}
              height={item.height} />
          </Styled.BrandListItem>
          <Styled.BrandListLabel style={{ 
            height: "75px" ,
            fontSize: "32px", 
            fontWeight: "500",
            marginTop: "15px", 
            lineHeight: "38px"}}>
              {item.label}
          </Styled.BrandListLabel>
        </Styled.BrandListBox>
      ))}
    </Styled.BrandListContainer>
  );
};

