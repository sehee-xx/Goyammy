import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  border: 1px solid black;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  border: 3px solid #cd863f;
  background-color: white;
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 40px;
  font-weight: bold;
  color: #8b4513;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
  color: #8b4513;
`;

export const Writer = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border-radius: 30px;
  border: none;
  background-color: #faf0e6;
  color: #8b4513;
  outline-color: #cd863f;
  ::placeholder {
    color: #8b4513;
  }
`;

export const Password = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border-radius: 30px;
  border: none;
  background-color: #faf0e6;
  color: #8b4513;
  outline-color: #cd863f;
  ::placeholder {
    color: #8b4513;
  }
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 20px;
  font-weight: 500;
  color: #8b4513;
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
  color: #8b4513;
`;

export const Subject = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border-radius: 30px;
  border: none;
  background-color: #faf0e6;
  outline-color: #cd863f;
  ::placeholder {
    color: #8b4513;
  }
`;
export const Contents = styled.textarea`
  width: 996px;
  height: 480px;
  padding-left: 16px;
  padding: 14px;
  border-radius: 20px;
  resize: none;
  border: none;
  background-color: #faf0e6;
  outline-color: #cd863f;
  ::placeholder {
    color: #8b4513;
  }
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  padding-left: 16px;
  border-radius: 30px;
  border: none;
  background-color: #faf0e6;
  color: red;
  color: #8b4513;
  outline-color: #cd863f;
`;

export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  background-color: orange;
  border: 1px solid orange;
  border-radius: 20px;
  cursor: pointer;
  color: white;
`;

export const Address = styled.input`
  width: 996px;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  border-radius: 30px;
  border: none;
  background-color: #faf0e6;
  color: #8b4513;
  outline-color: #cd863f;
`;

export const Youtube = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border-radius: 30px;
  border: none;
  background-color: #faf0e6;
  color: #8b4513;
  outline-color: #cd863f;
  ::placeholder {
    color: #8b4513;
  }
`;

export const ImageWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
  color: #8b4513;
  display: flex;
  flex-direction: row;
`;

export const OptionWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
  color: #8b4513;
`;

export const RadioButton = styled.input`
  cursor: pointer;
  color: #8b4513;
  outline-color: #cd863f;
  :checked {
    accent-color: orange;
  }
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const CancelButton = styled.button`
  width: 179px;
  height: 52px;
  border-radius: 20px;
  background-color: #ffdab9;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
  background-color: orange;
  :disabled {
    background-color: #ffdab9;
    color: #8b4513;
  }
  color: white;
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;
