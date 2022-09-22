import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import ItemMypageUI from "./ItemMypage.presenter";
import {
  CREATE_POINTTRANSACTION_OF_LOADING,
  FETCH_USER_LOGGED_IN,
} from "./ItemMypage.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function ItemMyPage() {
  const [price, setPrice] = useState("100");
  const { data: userData, refetch } = useQuery(FETCH_USER_LOGGED_IN);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINTTRANSACTION_OF_LOADING
  );

  const onChangePrice = (event: any) => {
    setPrice(event.target.value);
  };

  const requestPay = () => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
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
            content: "😻 포인트 충전 완료! 😻",
            onOk() {
              refetch();
            },
          });
        } else {
          Modal.error({ content: "😹 포인트 충전 실패 😹" });
        }
      }
    );
  };
  return (
    <ItemMypageUI
      onChangePrice={onChangePrice}
      requestPay={requestPay}
      userData={userData}
    />
  );
}
