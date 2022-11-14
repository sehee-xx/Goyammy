import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { visitedState } from "../../../../commons/store";
import LayoutSideUI from "./LayoutSide.presenter";

export default function LayoutSide() {
  const [visited, setVisited] = useRecoilState(visitedState);

  useEffect(() => {
    setVisited(JSON.parse(sessionStorage.getItem("visited") || "[]"));
  }, []);
  return <LayoutSideUI visited={visited} />;
}
