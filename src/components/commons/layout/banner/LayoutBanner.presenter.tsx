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
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
        <SliderItem src="/images/banner1.png" />
        <SliderItem src="/images/banner2.png" />
        <SliderItem src="/images/banner3.png" />
        <SliderItem src="/images/banner4.png" />
        <SliderItem src="/images/banner5.png" />
        <SliderItem src="/images/banner6.png" />
      </StyledSlider>
    </Wrapper>
  );
}
