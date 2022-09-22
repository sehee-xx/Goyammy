import styled from "@emotion/styled";

export const SearchBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
`;
export const Search = styled.input`
  width: 776px;
  height: 52px;
  background-color: #faf0e6;
  color: black;
  border: none;
  outline-color: #cd863f;
  color: #8b4513;
  ::placeholder {
    color: #8b4513;
  }
  border-radius: 10px;
  padding: 0px 30px;
`;