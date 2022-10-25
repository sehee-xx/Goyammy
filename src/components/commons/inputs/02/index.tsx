import styled from "@emotion/styled";
import { breakPoints } from "../../breakPoints/breakPoints";

const Input = styled.input`
  width: 100%;
  height: 50px;
  padding-left: 16px;
  border-radius: 10px;
  background-color: #f7f8f9;
  border: none;
  color: #464747;
  outline-color: #f39c1f;
  ::placeholder {
    color: #a5a5a5;
  }

  @media ${breakPoints.mobile} {
    height: 40px;
    padding-left: 12px;
    ::placeholder {
      font-size: 11px;
    }
  }
`;

export default function Input02(props: any) {
  return (
    <Input
      type={props.type}
      {...props.register}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
    />
  );
}
