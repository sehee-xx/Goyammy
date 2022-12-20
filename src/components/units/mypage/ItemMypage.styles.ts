import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1247px;
  background-color: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  padding: 80px 102px 0px 102px;
  border-radius: 10px;
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
`;

export const UserName = styled.div`
  font-size: 50px;
  font-weight: 600;
  color: #464747;
  padding-left: 10px;
`;

export const Body = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

export const PointBox = styled.div`
  border: 2px solid #f39c1f;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 30px;
  margin-bottom: 50px;
`;

export const UserPointBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PointImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const UserPoint = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: #464747;
  padding-left: 5px;
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
`;

export const PickBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  font-size: 30px;
  padding: 30px 30px;
`;

export const PickHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PickImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 5px;
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: #464747;
  padding-right: 20px;
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
`;

export const PickItemImg = styled.img`
  width: 100%;
  max-width: 150px;
  aspect-ratio: 1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const PickItemInfo = styled.div`
  padding: 10px 10px;
`;

export const PickItemName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #464747;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const PickItemPrice = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #f39c1f;
`;

export const PickEmpty = styled.div`
  color: #a5a5a5;
  font-size: 16px;
`;

export const Footer = styled.div`
  margin-bottom: 80px;
`;

export const BuySellBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  padding: 30px 40px;
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
`;

export const NoItems = styled.div`
  color: #a5a5a5;
  font-size: 16px;
  padding: 10px 0px 20px 10px;
`;

export const Table = styled.div`
  width: 100%;
  color: #464747;
  font-size: 16px;
`;

export const TableTop = styled.div`
  margin-top: 20px;
`;

export const RowTop = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1.5px solid #a5a5a5;
`;

export const ColumnHeader = styled.div`
  width: 25%;
  text-align: center;
  background-color: #f7f8f9;
`;

export const Row = styled(RowTop)`
  :hover {
    color: #f39c1f;
    font-weight: 900;
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
`;
