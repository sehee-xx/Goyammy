import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

export const Main = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 102px 0px 102px;
  border: 3px solid #cd863f;
  border-radius: 30px;
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
  width: 67px;
  height: 36px;
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
  cursor: pointer;
`;
export const Location = styled.img`
  cursor: pointer;
  padding-left: 29.33px;
`;
export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  color: #8b4513;
`;
export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: black;
  padding-bottom: 40px;
  color: #8b4513;
`;
export const Image = styled.img`
  padding-bottom: 40px;
  cursor: pointer;
`;
export const Contents = styled.div`
  font-size: 16px;
  padding-bottom: 120px;
  color: #8b4513;
`;
export const Video = styled(ReactPlayer)`
  margin: auto;
  cursor: pointer;
  padding: 50px;
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 80px;
`;
export const LikeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
`;
export const Like = styled.img`
  width: 34px;
  height: 32px;
  cursor: pointer;
`;
export const LikeText = styled.div`
  font-size: 18px;
  color: #ffd600;
`;
export const DislikeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 40px;
`;
export const Dislike = styled.img`
  width: 32px;
  height: 30px;
  cursor: pointer;
`;
export const DislikeText = styled.div`
  font-size: 18px;
  color: gray;
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

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 101px;
  padding-bottom: 100px;
`;

export const PageAdd = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
