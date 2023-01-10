import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";
import { breakPoints } from "../../commons/breakPoints/breakPoints";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1247px;
  background-color: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  padding: 80px 102px 80px 102px;
  border-radius: 10px;

  @media ${breakPoints.tablet} {
    padding: 40px 50px;
  }

  @media ${breakPoints.mobile} {
    padding: 20px 30px;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 20px;
`;

export const UserProfile = styled.img`
  width: 50px;
  height: 50px;

  @media ${breakPoints.tablet} {
    width: 40px;
    height: 40px;
  }

  @media ${breakPoints.mobile} {
    width: 30px;
    height: 30px;
  }
`;

export const UserName = styled.div`
  font-size: 50px;
  font-weight: 600;
  color: #464747;
  padding-left: 10px;

  @media ${breakPoints.tablet} {
    font-size: 30px;
  }

  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
`;

export const Body = styled.div`
  width: 100%;
  margin-bottom: 50px;

  @media ${breakPoints.tablet} {
    margin-bottom: 30px;
  }

  @media ${breakPoints.mobile} {
    margin-bottom: 20px;
  }
`;

export const PointBox = styled.div`
  border: 2px solid #f39c1f;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 30px;
  margin-bottom: 50px;

  @media ${breakPoints.tablet} {
    padding: 10px 20px;
    margin-bottom: 30px;
  }

  @media ${breakPoints.mobile} {
    padding: 4px 10px;
    margin-bottom: 20px;
  }
`;

export const UserPointBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PointImg = styled.img`
  width: 40px;
  height: 40px;

  @media ${breakPoints.tablet} {
    width: 30px;
    height: 30px;
  }

  @media ${breakPoints.mobile} {
    width: 20px;
    height: 20px;
  }
`;

export const UserPoint = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: #464747;
  padding-left: 5px;

  @media ${breakPoints.tablet} {
    font-size: 25px;
    padding-left: 7px;
  }

  @media ${breakPoints.mobile} {
    font-size: 18px;
    padding-left: 7px;
  }
`;

export const PointChargeBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PointSelect = styled.select`
  text-align: center;
  width: 120px;
  height: 50px;
  font-size: 18px;
  border: none;
  border-radius: 10px;

  @media ${breakPoints.tablet} {
    font-size: 14px;
    width: 100px;
  }

  @media ${breakPoints.mobile} {
    font-size: 12px;
    width: 80px;
  }
`;

export const Button = styled.button`
  width: 120px;
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  background-color: #f39c1f;
  color: white;
  text-align: center;
  margin-left: 20px;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 100px;
    height: 40px;
    font-size: 14px;
  }

  @media ${breakPoints.mobile} {
    width: 80px;
    height: 35px;
    font-size: 12px;
    margin-left: 10px;
  }
`;

export const PickBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  padding: 30px 30px;

  @media ${breakPoints.tablet} {
    padding: 20px 20px;
  }

  @media ${breakPoints.mobile} {
    padding: 15px 15px;
  }
`;

export const PickHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PickImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 5px;

  @media ${breakPoints.tablet} {
    width: 25px;
    height: 25px;
  }

  @media ${breakPoints.mobile} {
    width: 20px;
    height: 20px;
  }
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: #464747;

  @media ${breakPoints.tablet} {
    font-size: 18px;
  }

  @media ${breakPoints.mobile} {
    font-size: 14px;
  }
`;

export const ItemScroll = styled(InfiniteScroll)`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1000px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 20px 20px;
  gap: 50px;

  @media ${breakPoints.tablet} {
    padding: 15px 15px;
    max-width: 588px;
    gap: 30px;
  }

  @media ${breakPoints.mobile} {
    padding: 10px 10px;
    max-width: 350px;
    gap: 15px;
  }
`;

export const PickItemBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  min-width: 150px;
  height: 220px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  @media ${breakPoints.tablet} {
    min-width: 120px;
    height: 180px;
  }

  @media ${breakPoints.mobile} {
    min-width: 90px;
    height: 136px;
  }
`;

export const PickItemImg = styled.img`
  width: 100%;
  max-width: 150px;
  aspect-ratio: 1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media ${breakPoints.tablet} {
    max-width: 120px;
  }

  @media ${breakPoints.mobile} {
    max-width: 90px;
  }
`;

export const PickItemInfo = styled.div`
  padding: 10px 10px;

  @media ${breakPoints.mobile} {
    padding: 8px 8px;
  }
`;

export const PickItemName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #464747;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media ${breakPoints.tablet} {
    font-size: 14px;
  }

  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const PickItemPrice = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #f39c1f;

  @media ${breakPoints.tablet} {
    font-size: 12px;
  }

  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const PickEmpty = styled.div`
  color: #a5a5a5;
  font-size: 16px;

  @media ${breakPoints.tablet} {
    font-size: 14px;
  }

  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
`;

export const BuySellBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  padding: 30px 40px;

  @media ${breakPoints.tablet} {
    padding: 20px 30px;
  }

  @media ${breakPoints.mobile} {
    padding: 15px 25px;
  }
`;

export const BuySellHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 10px;
`;

export const ItemImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;

  @media ${breakPoints.tablet} {
    width: 25px;
    height: 25px;
    margin-right: 7px;
  }

  @media ${breakPoints.mobile} {
    width: 20px;
    height: 20px;
  }
`;

export const BuySellSelect = styled.select`
  text-align: center;
  width: 100px;
  height: 40px;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  background-color: black;
  color: white;
  margin-left: 20px;

  @media ${breakPoints.tablet} {
    width: 80px;
    height: 35px;
    font-size: 14px;
  }

  @media ${breakPoints.mobile} {
    width: 60px;
    height: 25px;
    font-size: 10px;
  }
`;

export const NoItems = styled.div`
  color: #a5a5a5;
  font-size: 16px;
  padding: 10px 0px 20px 10px;

  @media ${breakPoints.tablet} {
    font-size: 14px;
  }

  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
`;

export const Table = styled.div`
  width: 100%;
  color: #464747;
  font-size: 16px;

  @media ${breakPoints.tablet} {
    font-size: 14px;
  }

  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const TableTop = styled.div`
  margin-top: 20px;

  @media ${breakPoints.tablet} {
    margin-top: 10px;
  }

  @media ${breakPoints.mobile} {
    margin-top: 0px;
  }
`;

export const RowTop = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1.5px solid #a5a5a5;

  @media ${breakPoints.tablet} {
    height: 40px;
    line-height: 40px;
  }

  @media ${breakPoints.mobile} {
    height: 30px;
    line-height: 30px;
  }
`;

export const ColumnHeader = styled.div`
  width: 25%;
  text-align: center;
  background-color: #f7f8f9;
  font-weight: 600;
`;

export const Row = styled(RowTop)`
  :hover {
    color: #f39c1f;
    font-weight: 900;
  }

  @media ${breakPoints.tablet} {
    :hover {
      font-weight: 800;
    }
  }

  @media ${breakPoints.mobile} {
    :hover {
      font-weight: 700;
    }
  }
`;

export const ColumnContents = styled.div`
  width: 25%;
  text-align: center;
  :hover {
    color: #f39c1f;
  }
`;

export const TableBottom = styled.div``;

export const PaginationBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20px;

  @media ${breakPoints.tablet} {
    padding-top: 10px;
  }
`;
