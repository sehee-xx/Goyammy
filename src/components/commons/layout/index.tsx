import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import { breakPoints } from "../breakPoints/breakPoints";
import LayoutSide from "./side/LayoutSide.container";

const HIDDEN_BANNERS = ["login", "signup"];
const HIDDEN_SIDES = ["", "login", "signup", "boards", "cats", "mypages"];

const Body = styled.div`
  width: 100%;
  max-width: 1247px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px 150px 0px;

  @media ${breakPoints.tablet} {
    padding: 20px 20px 20px 20px;
  }
`;

const StartPoint = styled.div`
  position: absolute;
`;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenBanner = HIDDEN_BANNERS.includes(router.asPath.split("/")[1]);
  const isHiddenSide = HIDDEN_SIDES.includes(router.asPath.split("/")[1]);
  return (
    <>
      <LayoutHeader />
      {!isHiddenBanner && <LayoutBanner />}
      <LayoutNavigation />
      <Body>
        {props.children}
        <StartPoint>{!isHiddenSide && <LayoutSide />}</StartPoint>
      </Body>
    </>
  );
}
