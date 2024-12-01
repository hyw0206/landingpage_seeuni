import styled from "styled-components";

export const ODMMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #FFFFFF;
`;

export const ODMMenuTitleWrapper = styled.div`
  width: 472px;
  height: 27px;
  margin: 55px 815px 42px 814px;
  display: flex;
  justify-content: center;
  ::selection {
    background-color: #ED74DA;
    color: white;
  }
`;

export const ODMMenuTitle = styled.p`
  font-size: 36px;
  font-weight: 600;
  line-height: 42px;
  color: #46454A;
`;

export const ODMMenuTextWrapper = styled.div`
  width: 836px;
  height: 128px;
  margin: 39px 539px 74px 545px;
  ::selection {
    background-color: #ED74DA;
    color: white;
  }
`;

export const ODMMenuText = styled.p`
  font-size: 23px;
  font-weight: 300;
  text-align: left;
  line-height: 27px;
  color: #46454A;
`;

export const ODMMenuPartnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 110px;
  background-color: #F9B9FF;
`;

export const ODMMenuPartnerBoxImage = styled.img`
  width: 169px;
  height: 82px;
  margin-right: 40px;
  width: ${(props) => props.width + 'px'};
  height: ${(props) => props.height + 'px'};
`