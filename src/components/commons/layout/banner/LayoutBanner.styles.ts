import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { breakPoints } from "../../breakPoints/breakPoints";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1247px;
  margin: auto;
`;

export const SliderItem = styled.img`
  width: 100%;
`;

export const Left = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  left: 15px;
  z-index: 99;
  text-align: left;
  line-height: 30px;
`;

export const Right = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  right: 15px;
  z-index: 99;
  text-align: right;
  line-height: 30px;
`;

export const Arrow = styled.img`
  height: 25px;

  @media ${breakPoints.tablet} {
    height: 20px;
  }

  @media ${breakPoints.mobile} {
    height: 15px;
  }
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
