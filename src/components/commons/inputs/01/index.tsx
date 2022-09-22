import styled from "@emotion/styled"

const Input = styled.input`
  width: 384px;
  height: 50px;
  background-color: #FFE4B5;
  color: black;
  border: none;
  outline-color: orange;
  color: #8b4513;
  ::placeholder {
    color: #8b4513;
  }
  border-radius: 30px;
  padding-left: 20px;
`

export default function Input01(props: any){
  return(
    <Input type={props.type} {...props.register} placeholder={props.placeholder}/>
  )
}