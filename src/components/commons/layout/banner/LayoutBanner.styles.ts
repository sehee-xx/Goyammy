import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Wrapper = styled.div`
  height: 378px;
  background-color: white;
`;

export const SliderItem = styled.img`
  margin: auto;
`;

export const Left = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 70px;
  z-index: 99;
  text-align: left;
  line-height: 30px;
`;

export const Right = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 70px;
  z-index: 99;
  text-align: right;
  line-height: 30px;
`;
export const Arrow = styled.img`
  height: 30px;
`;

export const StyledSlider = styled(Slider)`
  position: relative;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-slide div {
    cursor: pointer;
  }
`;
