import styled from "@emotion/styled";

const Input = styled.input`
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
  margin-bottom: 40px;
  font-size: 16px;
`;

export default function Input03(props: any) {
  return (
    <Input
      type={props.type}
      {...props.register}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
    />
  );
}
