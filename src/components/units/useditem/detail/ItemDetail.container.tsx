import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { Arrow } from "../../board/detail/BoardDetail.styles";
import ItemDetailUI from "./ItemDetail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USEDITEM,
  FETCH_USEDITEM,
  FETCH_USER_LOGGED_IN,
  TOGGLE_USEDITEM_PICK,
} from "./ItemDetail.queries";
import { Left, Right } from "./ItemDetail.styles";

export default function ItemDetail() {
  const router = useRouter();
  const [isPicked, setIsPicked] = useState(false);
  const [deleteUseditem] = useMutation(DELETE_USEDITEM);
  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: (
      <Left>
        <Arrow src="/images/leftArrow.png" />
      </Left>
    ),
    nextArrow: (
      <Right>
        <Arrow src="/images/rightArrow.png" />
      </Right>
    ),
  };

  const { data, refetch } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.useditemId },
  });

  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);

  const createDate = data?.fetchUseditem.createdAt
    .slice(0, 10)
    .replace(/-/gi, ".");

  const onClickGoToList = () => {
    router.push("/markets");
  };

  const onClickDeleteButton = () => {
    deleteUseditem({
      variables: { useditemId: router.query.useditemId },
    });
    Modal.success({
      content: "😼 상품이 삭제되었습니다 😼",
      onOk() {
        router.push("/markets");
      },
    });
  };

  const onClickUpdateButton = () => {
    router.push(`/markets/${router.query.useditemId}/edit`);
  };

  const onClickPick = async () => {
    try {
      await toggleUseditemPick({
        variables: { useditemId: router.query.useditemId },
      });
      setIsPicked((prev) => !prev);
      refetch();
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickBuy = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: router.query.useditemId },
      });
      Modal.success({
        content: "😻 결제 성공! 😻",
        onOk() {
          refetch();
        },
      });
    } catch (error: any) {
      Modal.error({ content: "😹 결제 실패 😹" });
    }
  };
  return (
    <ItemDetailUI
      data={data}
      createDate={createDate}
      userData={userData}
      isPicked={isPicked}
      setting={settings}
      onClickGoToList={onClickGoToList}
      onClickDeleteButton={onClickDeleteButton}
      onClickUpdateButton={onClickUpdateButton}
      onClickPick={onClickPick}
      onClickBuy={onClickBuy}
    />
  );
}
