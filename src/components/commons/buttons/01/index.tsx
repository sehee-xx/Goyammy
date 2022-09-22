import styled from "@emotion/styled"

interface IProps {
  isActive: boolean;
  title: string;
}

const Button = styled.button`
  width: 100px;
  height: 40px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 20px;
  border: none;
  color: #8b4513;
  cursor: pointer;
  background-color: ${(props: any) => (props.isActive ? "orange" : "#ffdab9")};
  color: ${(props: any) => (props.isActive ? "white" : "#8b4513")};
`

export default function Button01(props: IProps){
  return <Button isActive={props.isActive}>{props.title}</Button>
}