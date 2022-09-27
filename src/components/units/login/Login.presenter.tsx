import Button01 from "../../commons/buttons/01";
import Input01 from "../../commons/inputs/01";
import * as S from "./Login.styles";

export default function LoginUI(props: any) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickLogin)}>
      <S.Main>
        <S.Header>
          <S.Logo>🔐 GOYAMMY 🔐</S.Logo>
        </S.Header>
        <S.Body>
          <Input01
            type="text"
            placeholder="이메일을 입력해주세요."
            register={props.register("email")}
          />
          <S.Error>{props.formState.errors.email?.message}</S.Error>
          <Input01
            type="password"
            placeholder="비밀번호를 입력해주세요."
            register={props.register("password")}
          />
          <S.Error>{props.formState.errors.password?.message}</S.Error>
          <Button01 isActive={props.formState.isValid} title="LOGIN"></Button01>
        </S.Body>
        <S.Footer>
          <S.Label>이메일 찾기</S.Label>
          <S.Label> | </S.Label>
          <S.Label>비밀번호 찾기</S.Label>
          <S.Label> | </S.Label>
          <S.Label>회원가입</S.Label>
        </S.Footer>
      </S.Main>
    </form>
  );
}
