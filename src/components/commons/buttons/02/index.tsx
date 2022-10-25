import styled from "@emotion/styled";
import { breakPoints } from "../../breakPoints/breakPoints";

interface IProps {
  isActive: boolean;
  title: string;
}

const Button = styled.button`
  width: 180px;
  height: 60px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 500;
  margin-top: 100px;
  cursor: pointer;
  background-color: #f39c1f;
  :disabled {
    background-color: #a5a5a5;
    color: #fff;
  }
  color: white;

  @media ${breakPoints.mobile} {
    width: 120px;
    height: 50px;
    font-size: 14px;
    margin-top: 50px;
  }
`;

export default function Button02(props: IProps) {
  return <Button disabled={!props.isActive}>{props.title}</Button>;
}
