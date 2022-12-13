import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import Router, { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { visitedState } from "../../../commons/store";
import ItemMypageUI from "./ItemMypage.presenter";
import {
  CREATE_POINTTRANSACTION_OF_LOADING,
  FETCH_USEDITEMS_IPICKED,
  FETCH_USER_LOGGED_IN,
} from "./ItemMypage.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function ItemMyPage() {
  const router = useRouter();
  const [price, setPrice] = useState("100");
  const [buySell, setBuySell] = useState("구매");
  const [visitedItems, setVisitedItems] = useRecoilState(visitedState);
  const { data: userData, refetch } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: pickedData, fetchMore } = useQuery(FETCH_USEDITEMS_IPICKED, {
    variables: {
      search: "",
    },
  });

  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINTTRANSACTION_OF_LOADING
  );

  const onChangePrice = (event: any) => {
    setPrice(event.target.value);
  };

  const onChangeBuySell = (event: any) => {
    setBuySell(event.target.value);
  };

  const requestPay = () => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "포인트 충전하기",
        amount: price,
        buyer_email: userData?.fetchUserLoggedIn.email,
        buyer_name: userData?.fetchUserLoggedIn.name,
        buyer_tel: "010-1234-5678",
        buyer_addr: "패스트파이브 구로점",
        buyer_postcode: "01181",
      },
      function (rsp: any) {
        if (rsp.success) {
          createPointTransactionOfLoading({
            variables: { impUid: rsp.imp_uid },
          });
          Modal.success({
            content: "포인트가 충전되었습니다.",
            onOk() {
              refetch();
            },
          });
        } else {
          Modal.error({ content: "포인트 충전에 실패했습니다." });
        }
      }
    );
  };

  const loadFunc = () => {
    if (!pickedData) return;

    fetchMore({
      variables: {
        page: Math.ceil(pickedData.fetchUseditemsIPicked.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditemsIPicked)
          return {
            fetchUseditemsIPicked: [...prev.fetchUseditemsIPicked],
          };
        return {
          fetchUseditemsIPicked: [
            ...prev.fetchUseditemsIPicked,
            ...fetchMoreResult.fetchUseditemsIPicked,
          ],
        };
      },
    });
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

  return (
    <ItemMypageUI
      onChangePrice={onChangePrice}
      onChangeBuySell={onChangeBuySell}
      requestPay={requestPay}
      loadFunc={loadFunc}
      onClickMoveToDetail={onClickMoveToDetail}
      userData={userData}
      pickedData={pickedData}
      buySell={buySell}
    />
  );
}
