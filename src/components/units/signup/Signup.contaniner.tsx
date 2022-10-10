import SignupUI from "./Signup.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { CREATE_USER } from "./Signup.queries";

const schema = yup.object({
  email: yup
    .string()
    .required("이메일은 필수 입력 사항입니다.")
    .matches(
      /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      "이메일 형식을 맞춰주세요."
    ),
  name: yup.string().required("이름은 필수 입력 사항입니다."),
  password: yup
    .string()
    .required("비밀번호는 필수 입력 사항입니다.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{0,8}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내로 만들어주세요."
    ),
  passwordCheck: yup
    .string()
    .required("비밀번호를 확인해주세요.")
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
});

export default function Signup() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [createUser] = useMutation(CREATE_USER);
  const router = useRouter();

  const onClickSignup = async (data: any) => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            name: data.name,
            password: data.password,
          },
        },
      });
      Modal.success({
        content: `${result.data?.createUser.name}님의 회원가입을 축하합니다.`,
        onOk() {
          router.push("/login");
        },
      });
    } catch (error: any) {
      Modal.error({
        title: "회원가입에 실패했습니다.",
        content: error.message,
      });
    }
  };

  const onClickMoveToLogin = () => {
    router.push("/login");
  };

  return (
    <SignupUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSignup={onClickSignup}
      onClickMoveToLogin={onClickMoveToLogin}
    />
  );
}
