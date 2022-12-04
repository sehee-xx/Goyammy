import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/breakPoints/breakPoints";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1247px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 80px 120px;

  @media ${breakPoints.tablet} {
    padding: 40px 50px;
  }

  @media ${breakPoints.mobile} {
    padding: 20px 30px;
  }
`;

export const HeaderText = styled.div`
  font-size: 40px;
  font-weight: 700;
  padding-bottom: 40px;
  text-align: center;
  color: #464747;

  @media ${breakPoints.tablet} {
    font-size: 30px;
  }

  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
`;

export const BestList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 60px;

  @media ${breakPoints.tablet} {
    padding-bottom: 40px;
  }

  @media ${breakPoints.mobile} {
    padding-bottom: 30px;
  }
`;

export const BestItem = styled.div`
  width: 23.5%;
  aspect-ratio: 1;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  cursor: pointer;
`;

export const BestImg = styled.img`
  width: 100%;
  height: 180px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media ${breakPoints.tablet} {
    height: 140px;
  }

  @media ${breakPoints.mobile} {
    height: 80px;
  }
`;

export const BestInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 15px;

  @media ${breakPoints.tablet} {
    height: 120px;
    justify-content: space-between;
  }

  @media ${breakPoints.mobile} {
    height: 70px;
    padding: 5px 10px;
  }
`;

export const BestName = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: #464747;

  @media ${breakPoints.tablet} {
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const BestRemarks = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: #a5a5a5;
  padding-top: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media ${breakPoints.tablet} {
    display: none;
  }
`;

export const BestPriceBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-top: 20px;

  @media ${breakPoints.mobile} {
    padding-top: 0px;
  }
`;

export const BestPrice = styled.label`
  font-size: 16px;
  font-weight: 700;
  text-align: right;
  color: #f39c1f;

  @media ${breakPoints.tablet} {
    font-size: 14px;
  }

  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const BestWon = styled.div`
  font-size: 12px;
  font-weight: 700;
  text-align: right;
  color: #f39c1f;

  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const MiddleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
`;

export const IsSoldoutSelect = styled.select`
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background-color: #464747;
  text-align: center;

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 30px;
    font-size: 10px;
  }
`;

export const Body = styled.div`
  width: 100%;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  background-color: #f7f8f9;
`;

export const ItemScroll = styled.div`
  height: 1000px;
  overflow-y: auto;
  overflow-x: hidden;

  @media ${breakPoints.tablet} {
    height: 800px;
  }

  @media ${breakPoints.mobile} {
    height: 600px;
  }
`;

export const SearchFail = styled.div`
  text-align: center;
  padding-top: 100px;
  color: #a5a5a5;
  font-size: 20px;

  @media ${breakPoints.tablet} {
    font-size: 18px;
  }

  @media ${breakPoints.mobile} {
    padding-top: 50px;
    font-size: 12px;
  }
`;

export const Item = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 1007px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  padding: 25px 25px;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    padding: 20px 20px;
  }

  @media ${breakPoints.mobile} {
    padding: 15px 15px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ItemImg = styled.img`
  max-width: 200px;
  aspect-ratio: 1;
  border-radius: 10px;

  @media ${breakPoints.tablet} {
    max-width: 160px;
  }

  @media ${breakPoints.mobile} {
    max-width: 100px;
  }
`;

export const ItemInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  gap: 20px;

  @media ${breakPoints.mobile} {
    padding: 0px 15px;
    gap: 10px;
  }
`;

export const ItemTopInfo = styled.div``;

export const Name = styled.label`
  font-size: 25px;
  font-weight: 700;
  color: #464747;

  @media ${breakPoints.tablet} {
    font-size: 20px;
  }

  @media ${breakPoints.mobile} {
    font-size: 14px;
  }
`;

export const Remarks = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #a5a5a5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media ${breakPoints.tablet} {
    font-size: 14px;
  }

  @media ${breakPoints.mobile} {
    font-size: 8px;
  }
`;

export const TagBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 5px;
`;

export const Tags = styled.div`
  font-size: 12px;
  font-weight: 500;
  padding-top: 10px;
  background-color: #f39c1f;
  color: #fff;
  padding: 2px 10px;
  border-radius: 30px;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const ItemBottomInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SellerBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SellerProfileImg = styled.img`
  width: 30px;

  @media ${breakPoints.tablet} {
    width: 25px;
  }

  @media ${breakPoints.mobile} {
    width: 20px;
  }
`;

export const Seller = styled.label`
  font-size: 15px;
  color: #464747;
  padding-left: 7px;

  @media ${breakPoints.tablet} {
    font-size: 12px;
  }

  @media ${breakPoints.mobile} {
    font-size: 8px;
  }
`;

export const PickBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Pick = styled.img`
  margin-left: 20px;
  width: 30px;

  @media ${breakPoints.tablet} {
    width: 25px;
    margin-left: 15px;
  }

  @media ${breakPoints.mobile} {
    width: 20px;
    margin-left: 10px;
  }
`;

export const PickCount = styled.label`
  font-size: 15px;
  color: #464747;
  padding-left: 7px;

  @media ${breakPoints.tablet} {
    font-size: 12px;
    padding-left: 5px;
  }

  @media ${breakPoints.mobile} {
    font-size: 8px;
    padding-left: 4px;
  }
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Price = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #f39c1f;

  @media ${breakPoints.tablet} {
    font-size: 26px;
  }

  @media ${breakPoints.mobile} {
    font-size: 16px;
  }
`;

export const Won = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #f39c1f;

  @media ${breakPoints.tablet} {
    font-size: 18px;
    padding-left: 4px;
  }

  @media ${breakPoints.mobile} {
    font-size: 12px;
    padding-left: 2px;
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 180px;
  height: 60px;
  border: none;
  font-size: 18px;
  font-weight: 500px;
  background-color: #a5a5a5;
  border-radius: 10px;
  margin-top: 100px;
  color: #fff;
  cursor: pointer;
  :hover {
    background-color: #f39c1f;
    color: white;
  }

  @media ${breakPoints.tablet} {
    width: 140px;
    height: 55px;
    font-size: 16px;
    margin-top: 80px;
  }

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 40px;
    font-size: 12px;
    margin-top: 50px;
  }
`;
