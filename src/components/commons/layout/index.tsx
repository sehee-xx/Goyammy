import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const HIDDEN_HEADERS = ["/login", "/signup"];

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
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  return (
    <>
      <LayoutHeader />
      {!isHiddenHeader && <LayoutBanner />}
      <LayoutNavigation />
      <Body>{props.children}</Body>
    </>
  );
}
