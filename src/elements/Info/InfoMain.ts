import styled from "styled-components";


export const InfoMainWrapper = styled.div`
  width: 100%;
  height: 458px;
  background: url("/image/Info/InfoMain.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const InfoMainText = styled.div`
  margin: 234px 0 0 488px;
  width: 766px;
  margin: 234px 0 0 calc((100vw - 1920px) / 2 + 484px);
  font-size: 72px;
  font-weight: 900;
  line-height: 86px;
  color: rgba(255, 255, 255, 0.7); 
  @media (max-width: 940px) {
    margin-left: 0;
  }
`

