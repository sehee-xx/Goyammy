import styled from "@emotion/styled";

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
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  padding-bottom: 40px;
  text-align: center;
  color: #464747;
`;

export const BestList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 60px;
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
`;

export const BestName = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: #464747;
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
`;

export const BestPriceBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const BestPrice = styled.label`
  font-size: 16px;
  font-weight: 700;
  text-align: right;
  padding-top: 20px;
  color: #f39c1f;
`;

export const BestWon = styled.div`
  font-size: 12px;
  font-weight: 700;
  text-align: right;
  padding-top: 20px;
  color: #f39c1f;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
`;

export const MiddleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
`;

export const Body = styled.div`
  width: 100%;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
`;

export const Item = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 1007px;
  height: 240px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  padding: 20px 20px;
  cursor: pointer;
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
`;

export const ItemInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  gap: 20px;
`;

export const ItemTopInfo = styled.div``;

export const Name = styled.label`
  font-size: 25px;
  font-weight: 700;
  color: #464747;
`;

export const Remarks = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #a5a5a5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
`;

export const ItemBottomInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 30px;
`;

export const Seller = styled.label`
  font-size: 15px;
  color: #464747;
  padding-left: 7px;
`;

export const Pick = styled.img`
  margin-left: 20px;
  width: 28px;
`;

export const PickCount = styled.label`
  font-size: 15px;
  color: #464747;
  padding-left: 7px;
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
`;

export const Won = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #f39c1f;
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
`;
