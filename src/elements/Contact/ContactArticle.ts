import styled from "styled-components";

export const ContactArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 604px;
`;

export const ContactArticleTitle = styled.div`
  margin-top: 68px;
  font-size: 40px;
  font-weight: 600;
`;

export const ContactArticleContentWrapper = styled.div`
  display: flex;
  margin-top: 26px;
  flex-wrap: wrap;
  @media (max-width: 960px) {
    width: 960px;
    justify-content: center;
    > div {
      margin-bottom: 20px;
    }
  }
`;

export const ContactArticleContentInfoWrapper = styled.div`
  width: 131px;
`;

export const ContactArticleContentInfo = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #46454A;
  text-decoration: underline;
  text-decoration-color: #ED74DA;

`;

export const ContactArticleContentInfoTextWrapper = styled.div`
  width: 360px;
  margin-left: 22px;
`;

export const ContactArticleContentInfoText = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: #46454A;
`;

export const ContactArticleContentMapWrapper = styled.div`
  margin-left: 76px;
  @media (max-width: 960px) {
    margin-left: 0;
    width: 100%; /* 가로 폭을 전체로 설정 */
    display: flex;
    justify-content: center; /* 가운데 정렬 */
    position: relative;
  }
`;

