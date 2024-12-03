import styled from "styled-components";

export const ContactRequestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 730px;
  background-color: rgba(243, 234, 234, 1);
  ::selection {
    background-color: #ED74DA;
    color: white;
  }
`;

export const ContactRequestTitleText = styled.div`
  text-align: center;
  margin-top: 60px;
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
  color: #656565;
  font-size: 22px; 
  font-family: "Roboto";
`;

export const ContactRequestText = styled.div`
  text-decoration: underline;
`;

export const ContactRequestInput = styled.input`
  width: 908px;
  padding: 10px;
  margin-top: 12px;
  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 15px;
  font-size: 20px;

   &::placeholder {
    color: lightgrey;
   }
`;

export const ContactRequestTextArea = styled.textarea`
  width: 908px;
  height: 141px;
  padding: 10px;
  margin-top: 12px;
  border: 1px solid rgba(0, 0, 0, 1); 
  border-radius: 15px;
  font-size: 20px;
  font-family: "Roboto";

  &::placeholder {
    color: lightgrey;
   }
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
  font-weight: 700;

  &:hover{
    background-color: black;
  }
`;

export const ContactRequestFileInputWrapper = styled.div`
  text-align: left;
  margin-top: 10px;
`;