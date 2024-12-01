import styled from "styled-components";

export const BrandInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 350px;
`

export const BrandInfoTitleWrapper = styled.div`
  /* width: 234px; */
  height: 38px;
  display: flex;
  text-align: center;
  margin: 77px 4px 62px 0px;
  ::selection {
    background-color: #ED74DA;
    color: white;
  }
`

export const BrandInfoTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
  line-height: 47px;
`

export const BrandInfoTextWrapper = styled.div`
  width: 962px;
  height: 96px;
  ::selection {
    background-color: #ED74DA;
    color: white;
  }
`

export const BrandInfoText = styled.p`
  font-size: 24px;
  font-weight: 200;
  text-align: center;
  line-height: 28px;

`