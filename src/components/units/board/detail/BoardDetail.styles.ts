import styled from "@emotion/styled";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import { breakPoints } from "../../../commons/breakPoints/breakPoints";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

export const Main = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 102px;
  border-radius: 10px;

  @media ${breakPoints.tablet} {
    padding: 40px 50px;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  border-bottom: 2px solid #f39c1f;
  padding-bottom: 10px;
`;

export const ProfileImage = styled.img`
  width: 40px;
`;

export const HeaderText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
`;

export const Writer = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: #464747;

  @media ${breakPoints.tablet} {
    font-size: 18px;
  }
`;

export const Date = styled.div`
  font-size: 12px;
  color: #464747;

  @media ${breakPoints.tablet} {
    font-size: 10px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media ${breakPoints.tablet} {
    gap: 5px;
  }
`;

export const LinkLocation = styled.img`
  height: 30px;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    height: 25px;
  }
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;

  @media ${breakPoints.tablet} {
    padding-top: 40px;
  }
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  padding-bottom: 50px;
  color: #464747;

  @media ${breakPoints.tablet} {
    font-size: 30px;
    padding-bottom: 40px;
  }
`;

export const Contents = styled.div`
  font-size: 16px;
  padding-bottom: 50px;
  color: #464747;

  @media ${breakPoints.tablet} {
    font-size: 14px;
    padding-bottom: 40px;
  }
`;

export const StyledSlider = styled(Slider)`
  width: 100%;
  max-width: 1043px;
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

export const Image = styled.img`
  width: 100%;
  height: 1000px;

  @media ${breakPoints.tablet} {
    height: 600px;
  }
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
`;

export const VideoWrapper = styled.div`
  width: 100%;
  height: 600px;

  @media ${breakPoints.tablet} {
    height: 400px;
  }
`;

export const Video = styled(ReactPlayer)`
  padding-top: 66px;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    padding-top: 40px;
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 80px;

  @media ${breakPoints.tablet} {
    padding-top: 60px;
  }
`;

export const LikeDisLike = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding-bottom: 66px;

  @media ${breakPoints.tablet} {
    gap: 20px;
    padding-bottom: 50px;
  }
`;

export const LikeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Like = styled.img`
  width: 34px;
  height: 32px;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 30px;
    height: 30px;
  }
`;

export const LikeText = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #ffd600;

  @media ${breakPoints.tablet} {
    font-size: 15px;
  }
`;

export const DislikeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Dislike = styled.img`
  width: 34px;
  height: 32px;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 30px;
    height: 30px;
  }
`;

export const DislikeText = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #464747;

  @media ${breakPoints.tablet} {
    font-size: 15px;
  }
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const Button = styled.button`
  width: 100%;
  max-width: 160px;
  height: 50px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  background-color: #a5a5a5;
  color: #464747;
  cursor: pointer;
  :hover {
    background-color: #f39c1f;
    color: white;
  }

  @media ${breakPoints.tablet} {
    max-width: 120px;
  }
`;

export const PageAdd = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
