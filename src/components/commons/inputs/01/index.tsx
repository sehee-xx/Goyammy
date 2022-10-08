import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  height: 50px;
  background-color: white;
  color: black;
  border: 1.5px solid rgba(0, 0, 0, 0.07);
  outline-color: #f39c1f;
  color: #464747;
  ::placeholder {
    color: #a5a5a5;
  }
  border-radius: 15px;
  padding-left: 20px;
`;

export default function Input01(props: any) {
  return (
    <Input
      type={props.type}
      {...props.register}
      placeholder={props.placeholder}
    />
  );
}
