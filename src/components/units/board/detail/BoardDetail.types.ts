export interface IBoardDetailUIProps {
  data?: any;
  createDate: string;
  setting: {
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    autoplay: boolean;
    autoplaySpeed: number;
    prevArrow: JSX.Element;
    nextArrow: JSX.Element;
  };
  onClickListButton: () => void;
  onClickDeleteButton: () => void;
  onClickUpdateButton: () => void;
  onClickLike: () => void;
  onClickDislike: () => void;
  onClickLocation: () => void;
}
