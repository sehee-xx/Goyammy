import styled from "@emotion/styled";

export const SearchBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  gap: 10px;
`;

export const SearchIcon = styled.img`
  width: 30px;
`;

export const Search = styled.input`
  width: 100%;
  max-width: 250px;
  height: 50px;
  background-color: #f7f8f9;
  border: none;
  outline-color: #f39c1f;
  color: #f39c1f;
  ::placeholder {
    color: #464747;
  }
  border-radius: 10px;
  padding-left: 20px;
  font-size: 14px;
`;
