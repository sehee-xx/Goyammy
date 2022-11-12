import styled from "@emotion/styled";
import { breakPoints } from "../../breakPoints/breakPoints";

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

  @media ${breakPoints.tablet} {
    width: 25px;
  }

  @media ${breakPoints.mobile} {
    width: 20px;
  }
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

  @media ${breakPoints.tablet} {
    max-width: 200px;
    height: 40px;
    padding-left: 18px;
    ::placeholder {
      font-size: 14px;
    }
  }

  @media ${breakPoints.mobile} {
    width: 160px;
    height: 30px;
    padding-left: 16px;
    ::placeholder {
      font-size: 12px;
    }
  }
`;
