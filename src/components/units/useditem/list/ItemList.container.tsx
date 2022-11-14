import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { visitedState } from "../../../../commons/store";
import ItemListUI from "./ItemList.presenter";
import {
  FETCH_USEDITEMS,
  FETCH_USEDITEMS_OF_THE_BEST,
} from "./ItemList.queries";

export default function ItemList() {
  const router = useRouter();
  const [isSoldout, setIsSoldout] = useState("판매중");
  const { data, fetchMore } = useQuery(FETCH_USEDITEMS, {
    variables: { isSoldout: isSoldout === "판매중" ? false : true },
  });
  const [visitedItems, setVisitedItems] = useRecoilState(visitedState);
  const { data: dataUseditemsBest, refetch: refetchUseditemsBest } = useQuery(
    FETCH_USEDITEMS_OF_THE_BEST
  );

  useEffect(() => {
    const visited = JSON.parse(sessionStorage.getItem("visited") || "[]");
    setVisitedItems(visited);
  }, []);

  const loadFunc = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems)
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onClickMoveToNew = () => {
    router.push("/markets/new/");
  };

  const onClickMoveToDetail = (el: any) => () => {
    const visited = JSON.parse(sessionStorage.getItem("visited") || "[]");
    const { __typename, ...newEl } = el;
    const result = visited.filter((visited: any) => visited._id !== newEl._id);
    result.unshift(newEl);
    if (result.length > 3) {
      result.pop();
    }
    setVisitedItems(result);
    sessionStorage.setItem("visited", JSON.stringify(result));
    router.push(`/markets/${el._id}`);
  };

  const onChangeIsSoldout = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIsSoldout(event.target.value);
  };

  return (
    <ItemListUI
      data={data}
      visitedItems={visitedItems}
      dataUseditemsBest={dataUseditemsBest}
      isSoldout={isSoldout}
      onClickMoveToNew={onClickMoveToNew}
      onClickMoveToDetail={onClickMoveToDetail}
      refetchUseditemsBest={refetchUseditemsBest}
      loadFunc={loadFunc}
      onChangeIsSoldout={onChangeIsSoldout}
    />
  );
}
