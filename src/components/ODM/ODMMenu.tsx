import * as Styled from 'elements/ODM/ODMMenu';

export default function ODMMenu() {
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
      <Styled.ODMMenuTitle>PARTNER MANUFACTURER</Styled.ODMMenuTitle>
      <Styled.ODMMenuPartnerBox>
      {items.map((item) => (
          <Styled.ODMMenuPartnerBoxImage src={"/image/ODM/" + item.fileName} 
          width={item.width} height={item.height} 
          style={{margin: item.margin}}/>
        ))}
      </Styled.ODMMenuPartnerBox>
      <Styled.ODMMenuText>We collaborate with leading companies in K-beauty manufacturing to deliver
        products of the highest quality. <br />
        Together with top experts across various fields, we ensure innovation and <br />excellence. 
        <br /> Our partnerships bring exceptional beauty solutions to the global market.</Styled.ODMMenuText>
    </Styled.ODMMenuWrapper>
  )
}