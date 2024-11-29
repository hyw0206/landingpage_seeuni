import styled from "styled-components";


export const ContactMainWrapper = styled.div`
  width: 100%;
  height: 458px; // height 수정
  background: url("/image/Contact/ContactMain.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;


export const ContactMainText = styled.div`
  margin: 226px 0 0 488px;
  width: 467px;
  margin: 234px 0 0 calc((100vw - 1920px) / 2 + 484px);
  font-size: 72px;
  font-weight: 900;
  line-height: 120%;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.7); 
  @media (max-width: 940px) {
    margin-left: 0;
  }
`