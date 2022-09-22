import styled from "@emotion/styled";

interface IProps {
  isActive: boolean;
  title: string;
}

const Button = styled.button`
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
    cursor: default;
  }
  color: white;
`;

export default function Button02(props: IProps) {
  return <Button disabled={!props.isActive}>{props.title}</Button>;
}
