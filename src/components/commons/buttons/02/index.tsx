import styled from "@emotion/styled";

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
`;

export default function Button02(props: IProps) {
  return <Button disabled={!props.isActive}>{props.title}</Button>;
}
