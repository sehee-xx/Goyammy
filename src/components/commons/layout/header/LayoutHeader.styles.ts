import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 80px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export const InnerLogo = styled.img`
  height: 60px;
  cursor: pointer;
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const ProfileImg = styled.img`
  width: 30px;
`;

export const UserName = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #464747;
  :hover {
    color: #eaa945;
  }
  cursor: pointer;
`;

export const Authentication = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #464747;
  :hover {
    color: #eaa945;
  }
  cursor: pointer;
`;
