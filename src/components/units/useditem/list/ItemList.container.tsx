import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ItemListUI from "./ItemList.presenter";
import { FETCH_USEDITEMS } from "./ItemList.queries";

export default function ItemList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USEDITEMS, {
    variables: { useditemId: router.query.useditemId },
  });

  const [visitedItems, setVisitedItems] = useState([]);

  useEffect(() => {
    const visited = JSON.parse(localStorage.getItem("visited") || "[]");
    setVisitedItems(visited);
  }, []);

  // infinite scroll 함수
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

  return (
    <ItemListUI
      data={data}
      visitedItems={visitedItems}
      onClickMoveToNew={onClickMoveToNew}
      onClickMoveToDetail={onClickMoveToDetail}
      loadFunc={loadFunc}
    />
  );
}
