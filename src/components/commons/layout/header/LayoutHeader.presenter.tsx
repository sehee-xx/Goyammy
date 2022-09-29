import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./LayoutHeader.styles";
import { IProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: IProps) {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo
          onClick={props.onClickLogo}
          src="/images/logo.png"
        ></InnerLogo>
        {props.accessToken && (
          <div>
            <InnerButton>{props.data?.fetchUserLoggedIn.name}</InnerButton>
            <InnerButton onClick={props.onClickLogout}>LOGOUT</InnerButton>
          </div>
        )}
        {!props.accessToken && (
          <div>
            <InnerButton onClick={props.onClickMoveToLogin}>LOGIN</InnerButton>
            <InnerButton onClick={props.onClickMoveToSignup}>
              SIGN-UP
            </InnerButton>
          </div>
        )}
      </InnerWrapper>
    </Wrapper>
  );
}
