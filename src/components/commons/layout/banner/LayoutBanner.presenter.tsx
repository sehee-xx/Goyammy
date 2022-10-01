import { SliderItem, Wrapper } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2200,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem src="/images/banner1.png" />
        </div>
        <div>
          <SliderItem src="/images/banner2.png" />
        </div>
        <div>
          <SliderItem src="/images/banner3.png" />
        </div>
        <div>
          <SliderItem src="/images/banner4.png" />
        </div>
        <div>
          <SliderItem src="/images/banner5.png" />
        </div>
        <div>
          <SliderItem src="/images/banner6.png" />
        </div>
      </Slider>
    </Wrapper>
  );
}
