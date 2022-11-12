import styled from "@emotion/styled";
import { breakPoints } from "../../breakPoints/breakPoints";
import { IPageProps } from "./Paginations01.types";

export const Column = styled.span`
  margin: 0px 50px;

  @media ${breakPoints.tablet} {
    margin: 0px 40x;
  }

  @media ${breakPoints.mobile} {
    margin: 0px 30px;
  }
`;

export const Page = styled.span`
  margin: 0px 10px;
  color: ${(props: IPageProps) => (props.isActive ? "#f39c1f" : "#464747")};
  font-size: ${(props: IPageProps) => (props.isActive ? "18px" : "16px")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};

  @media ${breakPoints.tablet} {
    font-size: ${(props: IPageProps) => (props.isActive ? "14px" : "12px")};
    margin: 0px 8px;
  }

  @media ${breakPoints.mobile} {
    font-size: ${(props: IPageProps) => (props.isActive ? "8px" : "6px")};
    margin: 0px 6px;
  }
`;
