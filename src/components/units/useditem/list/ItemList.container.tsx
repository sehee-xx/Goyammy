import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ItemListUI from "./ItemList.presenter";
import { FETCH_USEDITEMS } from "./ItemList.queries";

export default function ItemList() {
  const router = useRouter();
  const [isSoldout, setIsSoldout] = useState("판매중");
  const { data, fetchMore } = useQuery(FETCH_USEDITEMS, {
    variables: { isSoldout: isSoldout === "판매중" ? false : true },
  });
  const [visitedItems, setVisitedItems] = useState([]);

  useEffect(() => {
    const visited = JSON.parse(localStorage.getItem("visited") || "[]");
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
    const visited = JSON.parse(localStorage.getItem("visited") || "[]");

    const temp = visited.filter((visitedEl: any) => visitedEl._id === el._id);
    if (temp.length !== 1) {
      const { __typename, ...newEl } = el;
      visited.push(newEl);
      localStorage.setItem("visited", JSON.stringify(visited));
    }
    router.push(`/markets/${el._id}`);
  };

  const onChangeIsSoldout = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIsSoldout(event.target.value);
  };

  return (
    <ItemListUI
      data={data}
      visitedItems={visitedItems}
      isSoldout={isSoldout}
      onClickMoveToNew={onClickMoveToNew}
      onClickMoveToDetail={onClickMoveToDetail}
      loadFunc={loadFunc}
      onChangeIsSoldout={onChangeIsSoldout}
    />
  );
}
