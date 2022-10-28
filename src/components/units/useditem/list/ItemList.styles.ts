import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1247px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

export const Main = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  padding: 80px 102px 0px 102px;
  border-radius: 10px;
`;

export const Header = styled.div``;

export const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  padding-bottom: 40px;
  text-align: center;
  color: #8b4513;
`;

export const TodayList = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 80px;
`;

export const TodayItem = styled.div`
  width: 284px;
  height: 280px;
  background-color: linen;
  border-radius: 30px;
  margin: 0px 12px;
`;

export const TodayImg = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 30px;
`;

export const TodayName = styled.label`
  font-size: 18px;
  font-weight: 700;
  color: #8b4513;
`;

export const TodayRemarks = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: #cd863f;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const TodayPrice = styled.label`
  font-size: 15px;
  font-weight: 700;
  color: tomato;
  text-align: right;
  align-items: flex-end;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
`;
export const Body = styled.div``;

export const BestAlign = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 3px solid #cd863f;
`;
export const SellStatus = styled.label`
  font-size: 18px;
  padding-right: 15px;
  color: #8b4513;
`;
export const Search = styled.input`
  font-size: 17px;
  background-color: linen;
  padding: 8px 20px;
  border: none;
  border-radius: 30px;
  ::placeholder {
    color: #8b4513;
  }
  margin-left: 217px;
  outline-color: #cd863f;
`;
export const SearchDate = styled.div`
  font-size: 17px;
  padding: 8px 20px;
  color: #8b4513;
  background-color: gold;
  border: none;
  margin-left: 30px;
`;
export const SearchButton = styled.button`
  font-size: 17px;
  border: none;
  padding: 8px 20px;
  background-color: black;
  color: white;
`;
export const Item = styled.div`
  background-color: #faebd7;
  width: 100%;
  height: 240px;
  border-bottom: 3px solid #cd863f;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
`;
export const ItemImg = styled.img`
  min-width: 200px;
  height: 200px;
  margin-left: 20px;
`;
export const ItemInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
`;
export const Name = styled.label`
  font-size: 25px;
  font-weight: 700;
  color: #8b4513;
`;
export const Remarks = styled.label`
  font-size: 16px;
  font-weight: 500;
  padding-top: 10px;
  color: #cd863f;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const Tags = styled.label`
  font-size: 15px;
  font-weight: 500;
  padding-top: 10px;
  color: gray;
`;
export const ProfileImg = styled.img`
  width: 30px;
`;

export const Seller = styled.label`
  font-size: 15px;
  color: gray;
  padding-left: 7px;
`;
export const Pick = styled.img`
  margin-left: 20px;
  width: 28px;
`;
export const PickCount = styled.label`
  font-size: 15px;
  color: gray;
  padding-left: 7px;
`;
export const Price = styled.label`
  width: 100%;
  font-size: 28px;
  font-weight: 700;
  color: tomato;
  text-align: right;
  padding-right: 30px;
`;
export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
`;

export const Button = styled.button`
  width: 179px;
  height: 52px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 30px;
  background-color: #ffdab9;
  margin-right: 24px;
  text-align: center;
  color: #8b4513;
  cursor: pointer;
  :hover {
    background-color: orange;
    color: white;
  }
  margin: 60px 0px;
`;
