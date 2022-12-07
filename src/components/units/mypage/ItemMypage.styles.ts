import styled from "@emotion/styled";

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
  width: 100%;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  font-size: 30px;
  padding: 20px 30px;
`;

export const PickHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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

export const Footer = styled.div`
  margin-bottom: 80px;
`;

export const BuySellBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  padding: 20px 30px;
`;

export const BuySellHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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

export const ItemScroll = styled.div`
  height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
`;
