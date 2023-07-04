import LoginUI from "./Login.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "./Login.queries";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { Modal } from "antd";
import { useRouter } from "next/router";

const schema = yup.object({
  email: yup
    .string()
    .required("이메일 아이디를 @까지 정확하게 입력해주세요.")
    .matches(
      /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      "이메일 형식을 맞춰주세요."
    ),
  password: yup
    .string()
    .required("비밀번호는 필수 입력 사항입니다.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{0,8}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내로 만들어주세요."
    ),
});

export default function Login() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [loginUser] = useMutation(LOGIN_USER);
  const router = useRouter();

  const onClickLogin = async (data: any) => {
    try {
      const result = await loginUser({
        variables: { password: data.password, email: data.email },
      });
      const accessToken = result.data.loginUser.accessToken;
      setAccessToken(accessToken);
      router.push("/");
    } catch (error: any) {
      Modal.error({ content: "로그인에 실패했습니다." });
    }
  };

  const onClickMoveToSignup = () => {
    router.push("/signup");
  };

  return (
    <LoginUI
      formState={formState}
      register={register}
      handleSubmit={handleSubmit}
      onClickLogin={onClickLogin}
      onClickMoveToSignup={onClickMoveToSignup}
    />
  );
}
