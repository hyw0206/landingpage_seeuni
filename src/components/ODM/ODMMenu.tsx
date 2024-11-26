import * as Styled from 'elements/ODM/ODMMenu';

export default function ODMMenu() {
  return (
    <Styled.ODMMenuWrapper>
      <Styled.ODMMenuTitle>PARTNER MANUFACTURER</Styled.ODMMenuTitle>
      <Styled.ODMMenuPartnerBox>
        <Styled.ODMMenuPartnerBoxImage style={{width: '169px', height: '82px'}} src="/image/ODM/manufacturer01.png"/>
        <Styled.ODMMenuPartnerBoxImage style={{width: '290px', height: '82px'}} src="/image/ODM/manufacturer03.png"/>
        <Styled.ODMMenuPartnerBoxImage style={{width: '266px', height: '82px'}} src="/image/ODM/manufacturer02.png"/>
        <Styled.ODMMenuPartnerBoxImage style={{width: '104px', height: '82px'}} src="/image/ODM/manufacturer04.png"/>
      </Styled.ODMMenuPartnerBox>
      <Styled.ODMMenuText>We collaborate with leading companies in K-beauty manufacturing to deliver products of the highest quality. Together with top experts across various fields, we ensure innovation and excellence. Our partnerships bring exceptional beauty solutions to the global market.</Styled.ODMMenuText>
    </Styled.ODMMenuWrapper>
  )
}