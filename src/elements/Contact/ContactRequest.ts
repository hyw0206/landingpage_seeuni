import styled from "styled-components";

export const ContactRequestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 682px;
  background-color: rgba(243, 234, 234, 1);
`;

export const ContactRequestTitleText = styled.div`
  display: flex;
  text-align: center;
  margin-top: 35px;
  font-size: 40px;
  font-weight: bolder;
  color: rgba(70, 69, 74, 1);
`;

export const ContactInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 19px; 
  width: 908px;
`;

export const ContactRequestTextWrapper = styled.div`
  display: flex;
  margin-top: 19px;
  color: rgba(130, 130, 130, 1);
  font-size: 22px; 
`;

export const ContactRequestText = styled.div`
  text-decoration: underline;
`;

export const ContactRequestInput = styled.input`
  width: 908px;
  padding: 10px;
  margin-top: 12px;
  color: rgba(0, 0, 0, 0.4); 
  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 15px;
  font-size: 24px;

`;

export const ContactRequestTextArea = styled.textarea`
  width: 908px;
  height: 141px;
  padding: 10px;
  margin-top: 12px;
  color: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(0, 0, 0, 1); 
  border-radius: 15px;
  font-size: 24px;
`;

export const SubmitButton = styled.button`
  width: 173px;
  height: 44px;
  margin-top: 17px;
  border: none;
  border-radius: 30px;
  background-color: rgba(237, 116, 218, 100);
  color: rgba(255, 255, 255, 1);
  font-size: 32px;
`;