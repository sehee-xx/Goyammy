export interface IProps {
  onClickLogo: () => void;
  onClickMoveToLogin: () => void;
  onClickMoveToSignup: () => void;
  data: any;
  accessToken: string;
  onClickLogout: () => void;
}