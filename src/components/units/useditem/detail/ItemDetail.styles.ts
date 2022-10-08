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
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  padding: 80px 102px 0px 102px;
  border-radius: 10px;
  margin-bottom: 100px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  border-bottom: 4px solid #cd863f;
  padding-bottom: 20px;
`;

export const ProfileImage = styled.img`
  width: 46.67px;
  height: 46.67px;
`;
export const HeaderText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 16.67px;
`;
export const Writer = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: black;
  color: #8b4513;
`;
export const Date = styled.div`
  font-size: 16px;
  color: #8b4513;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  color: #8b4513;
`;
export const Link = styled.img`
  height: 30px;
  cursor: pointer;
`;
export const Location = styled.img`
  height: 30px;
  cursor: pointer;
  padding-left: 10px;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  color: #8b4513;
  border-bottom: 4px solid #cd863f;
`;
export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 20px;
`;
export const Keyword = styled.div`
  font-size: 20px;
  color: darkgray;
`;
export const Name = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: #8b4513;
`;
export const Pick = styled.img``;

export const PickCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 500;
`;
export const Price = styled.div`
  font-size: 50px;
  font-weight: 600;
  color: orange;
  padding-bottom: 20px;
`;
export const ImageWrapper = styled.div`
  background-color: white;
`;

export const Carousel = styled.img`
  width: 100%;
  height: 700px;
  background-color: linen;
  margin: auto;
`;
export const ProductInfo = styled.div`
  padding-top: 30px;
  font-size: 20px;
  padding-bottom: 30px;
`;
export const Tag = styled.div`
  font-size: 18px;
  color: darkgray;
  padding-bottom: 30px;
  border-bottom: 4px solid #cd863f;
`;
export const Map = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 400px;
  background-color: navajowhite;
  margin-bottom: 50px;
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 80px;
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
`;
