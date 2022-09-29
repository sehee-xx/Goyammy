import * as S from "./LayoutHeader.styles";
import { ILayoutHeaderProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderProps) {
  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.InnerLogo
          onClick={props.onClickLogo}
          src="/images/logo.png"
        ></S.InnerLogo>
        {props.accessToken && (
          <S.RowBox>
            <S.Profile onClick={props.onClickUser}>
              <S.ProfileImg src="/images/profile.png"></S.ProfileImg>
              <S.UserName>{props.data?.fetchUserLoggedIn.name}</S.UserName>
            </S.Profile>
            <S.Authentication onClick={props.onClickLogout}>
              LOGOUT
            </S.Authentication>
          </S.RowBox>
        )}
        {!props.accessToken && (
          <S.RowBox>
            <S.Authentication onClick={props.onClickMoveToLogin}>
              LOGIN
            </S.Authentication>
            <S.Authentication onClick={props.onClickMoveToSignup}>
              SIGN-UP
            </S.Authentication>
          </S.RowBox>
        )}
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
