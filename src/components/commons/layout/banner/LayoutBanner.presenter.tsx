import {
  Arrow,
  Left,
  Right,
  SliderItem,
  StyledSlider,
  Wrapper,
} from "./LayoutBanner.styles";

export default function LayoutBannerUI() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2200,
    prevArrow: (
      <Left>
        <Arrow src="/images/leftArrow.png" />
      </Left>
    ),
    nextArrow: (
      <Right>
        <Arrow src="/images/rightArrow.png" />
      </Right>
    ),
  };

  return (
    <Wrapper>
      <StyledSlider {...settings}>
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
      </StyledSlider>
    </Wrapper>
  );
}
