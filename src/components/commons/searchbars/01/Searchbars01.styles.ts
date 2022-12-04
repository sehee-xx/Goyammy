import styled from "@emotion/styled";
import { breakPoints } from "../../breakPoints/breakPoints";

export const SearchBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  gap: 10px;

  @media ${breakPoints.tablet} {
    padding-bottom: 15px;
  }
`;

export const SearchIcon = styled.img`
  width: 30px;

  @media ${breakPoints.tablet} {
    width: 25px;
  }

  @media ${breakPoints.mobile} {
    width: 20px;
    gap: 8px;
  }
`;

export const Search = styled.input`
  width: 100%;
  max-width: 250px;
  height: 40px;
  background-color: #f7f8f9;
  border: none;
  outline-color: #f39c1f;
  color: #f39c1f;
  ::placeholder {
    color: #464747;
  }
  border-radius: 10px;
  padding-left: 20px;
  font-size: 13px;

  @media ${breakPoints.tablet} {
    max-width: 200px;
    height: 40px;
    padding-left: 18px;
    ::placeholder {
      font-size: 14px;
    }
  }

  @media ${breakPoints.mobile} {
    width: 120px;
    height: 30px;
    padding-left: 16px;
    font-size: 11px;
    ::placeholder {
      font-size: 10px;
    }
  }
`;
