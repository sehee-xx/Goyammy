export interface IItemDetailProps {
  data?: any;
  createDate: string;
  userData?: any;
  isPicked: boolean;
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
  onClickGoToList: () => void;
  onClickDeleteButton: () => void;
  onClickUpdateButton: () => void;
  onClickPick: () => void;
  onClickBuy: () => void;
}
