import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { visitedState } from "../../../../commons/store";
import LayoutSideUI from "./LayoutSide.presenter";

export default function LayoutSide() {
  const router = useRouter();
  const [visited, setVisited] = useRecoilState(visitedState);

  const onClickMoveToVisited = (el: any) => {
    const visited = JSON.parse(sessionStorage.getItem("visited") || "[]");
    const { __typename, ...newEl } = el;
    const result = visited.filter((visited: any) => visited._id !== newEl._id);
    result.unshift(newEl);
    if (result.length > 3) {
      result.pop();
    }
    setVisited(result);
    sessionStorage.setItem("visited", JSON.stringify(result));
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
