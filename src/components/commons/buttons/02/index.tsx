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

  @media ${breakPoints.tablet} {
    width: 140px;
    height: 55px;
    font-size: 16px;
    margin-top: 80px;
  }

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 40px;
    font-size: 12px;
    margin-top: 50px;
  }
`;

export default function Button02(props: IProps) {
  return <Button disabled={!props.isActive}>{props.title}</Button>;
}
