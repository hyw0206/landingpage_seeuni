import styled from "styled-components";

export const ODMMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #FFFFFF;
`;

export const ODMMenuTitle = styled.div`
  width: 472px;
  height: 27px;
  margin: 55px 815px 42px 814px;
  font-size: 36px;
  font-weight: 600;
  line-height: 42px;
  color: #46454A;
`;

export const ODMMenuText = styled.div`
  width: 911px;
  height: 128px;
  margin: 39px 502px 74px 507px;
  line-height: 27px;
  font-size: 23px;
  font-weight: 200;
  text-align: left;
  color: #46454A;
`;

export const ODMMenuPartnerBox = styled.div`
  display: flex;
  /* justify-content: center; */
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