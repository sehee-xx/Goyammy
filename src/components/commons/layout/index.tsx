import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";
import { ReactNode } from "react";

const Body = styled.div`
  width: 100%;
  max-width: 1247px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

interface ILayoutProps {
  children: ReactNode;
}
export default function Layout(props: ILayoutProps) {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Body>{props.children}</Body>
    </>
  );
}
