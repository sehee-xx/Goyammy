import { useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { FETCH_USER_LOGGED_IN } from "./LayoutHeader.queries";

export default function LayoutHeader() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const onClickLogo = () => {
    router.push("/boards");
  };

  const onClickMoveToLogin = () => {
    router.push("/login");
  };

  const onClickMoveToSignup = () => {
    router.push("/signup");
  };

  const onClickLogout = () => {
    Modal.confirm({
      content: "정말로 로그아웃 하시겠습니까?",
      onOk() {
        setAccessToken("");
        localStorage.clear();
      },
    });
  };

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickMoveToLogin={onClickMoveToLogin}
      onClickMoveToSignup={onClickMoveToSignup}
      data={data}
      accessToken={accessToken}
      onClickLogout={onClickLogout}
    />
  );
}
