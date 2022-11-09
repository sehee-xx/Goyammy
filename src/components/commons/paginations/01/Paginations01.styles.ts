import styled from "@emotion/styled";
import { IPageProps } from "./Paginations01.types";

export const Column = styled.span`
  margin: 0px 50px;
`;

export const Page = styled.span`
  margin: 0px 10px;
  color: ${(props: IPageProps) => (props.isActive ? "#f39c1f" : "#464747")};
  font-size: ${(props: IPageProps) => (props.isActive ? "20" : "15")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
`;
