import styled from "styled-components";


export const ContactMainWrapper = styled.div`
  width: 100%;
  height: 650px; // height 수정
  background: url("/image/Contact/ContactMain.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ContactMainTextWrapper = styled.div`
  width: 940px;
  margin: 236px auto 0 auto;
`

export const ContactMainText = styled.div`
  width: 929px;
  height: 274px;
  margin: 236px 0 0 490px; // 불필요한 엘리먼트 삭제, 마진 옮김
  font-size: 128px;
  font-weight: 900;
  line-height: 120%;
  letter-spacing: 0.1em; // 누락된 속성 추가
  color: rgba(255, 255, 255, 0.7);
  
`