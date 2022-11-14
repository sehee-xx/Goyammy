import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { visitedState } from "../../../../commons/store";
import LayoutSideUI from "./LayoutSide.presenter";

export default function LayoutSide() {
  const router = useRouter();
  const [visited, setVisited] = useRecoilState(visitedState);

  const onClickMoveToVisited = (el: any) => {
    router.push(`/markets/${el._id}`);
  };

  useEffect(() => {
    setVisited(JSON.parse(sessionStorage.getItem("visited") || "[]"));
  }, []);

  return (
    <LayoutSideUI
      visited={visited}
      onClickMoveToVisited={onClickMoveToVisited}
    />
  );
}
