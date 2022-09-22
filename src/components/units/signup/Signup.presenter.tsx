import Button01 from "../../commons/buttons/01"
import Input01 from "../../commons/inputs/01"
import * as S from "./Signup.styles"

export default function SignupUI(props: any) {
  return(
    <form onSubmit={props.handleSubmit(props.onClickSignup)}>
      <S.Main>
        <S.Header>
          <S.Logo>🙇🏻‍♀️ 회원가입 🙇🏻‍♀️</S.Logo>
        </S.Header>
        <S.Body>
          <S.Label>이메일</S.Label>
          <Input01 type="text" placeholder="이메일을 입력해주세요." register={props.register("email")} />
          <S.Error>{props.formState.errors.email?.message}</S.Error>

          <S.Label>이름</S.Label>
          <Input01 type="text" placeholder="이름을 입력해주세요." register={props.register("name")} />
          <S.Error>{props.formState.errors.name?.message}</S.Error>

          <S.Label>비밀번호</S.Label>
          <Input01 type="password" placeholder="비밀번호를 입력해주세요." register={props.register("password")} />
          <S.Error>{props.formState.errors.password?.message}</S.Error>
          
          <S.Label>비밀번호 확인</S.Label>
          <Input01 type="password" placeholder="비밀번호를 확인해주세요." register={props.register("passwordCheck")} />
          <S.Error>{props.formState.errors.passwordCheck?.message}</S.Error>
        </S.Body>
        <S.Footer>
          <Button01 isActive={props.formState.isValid} title="회원가입"></Button01>
        </S.Footer>
      </S.Main>
    </form>
  )
}