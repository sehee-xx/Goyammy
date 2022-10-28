import styled from "@emotion/styled";
import Slider from "react-slick";

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
`;

export const Date = styled.div`
  font-size: 12px;
  color: #464747;
`;

export const PickBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const Pick = styled.img`
  cursor: pointer;
  height: 40px;
`;

export const PickCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 500;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 50px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  background-color: white;
`;

export const StyledSlider = styled(Slider)`
  width: 100%;
  max-width: 500px;
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
  height: 500px;
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

export const ItemInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RightTopBox = styled.div``;

export const RightBottomBox = styled.div``;

export const Remark = styled.div`
  font-size: 16px;
  color: #a5a5a5;
`;

export const Name = styled.div`
  font-size: 34px;
  font-weight: 700;
  padding-bottom: 30px;
  color: #464747;
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;

export const Price = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #f39c1f;
  /* padding-bottom: 40px; */
`;

export const Won = styled.label`
  font-size: 28px;
  font-weight: 500;
  color: #f39c1f;
  /* padding-bottom: 40px; */
`;

export const TagBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 50px;
`;

export const Tag = styled.div`
  font-size: 14px;
  color: white;
  background-color: #f39c1f;
  padding: 5px 15px;
  border-radius: 20px;
`;

export const LocationBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const LocationIcon = styled.img`
  height: 30px;
  cursor: pointer;
`;

export const Location = styled.div`
  font-size: 18px;
  color: #464747;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 50px;
  gap: 10px;
`;

export const BuyButton = styled.button`
  width: 100%;
  height: 70px;
  font-size: 20px;
  font-weight: 400;
  border: none;
  border-radius: 10px;
  background-color: #f39c1f;
  color: #f7f8f9;
  cursor: pointer;
  :hover {
    background-color: #f48c1f;
    color: #f7f8f9;
  }
`;

export const Contents = styled.div`
  font-size: 16px;
  padding-top: 50px;
  padding-bottom: 50px;
  color: #464747;
`;

export const BottomButton = styled.button`
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
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  gap: 30px;
`;
