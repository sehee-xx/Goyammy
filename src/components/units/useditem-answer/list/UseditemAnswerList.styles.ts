import styled from "@emotion/styled";

export const ItemWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  padding: 30px 60px;
  margin-bottom: 20px;
  margin-top: 30px;
`;

export const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
`;

export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 20px;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Writer = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #464747;
`;

export const Contents = styled.div`
  padding-top: 10px;
  color: #464747;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const EditIcon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const DeleteIcon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const DateString = styled.div`
  color: #464747;
  padding-top: 15px;
  font-size: 12px;
  padding-left: 60px;
`;
