import styled from "@emotion/styled";
import { Modal } from "antd";
import Head from "next/head";

const Button = styled.button`
  width: 179px;
  height: 52px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 30px;
  background-color: #ffdab9;
  margin-right: 24px;
  text-align: center;
  color: #8b4513;
  cursor: pointer;
  :hover {
    background-color: orange;
    color: white;
  }
`;
declare const window: typeof globalThis & {
  IMP: any;
};

export default function Payment(props: any) {
  const requestPay = () => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: props.data?.fetchUseditem.name,
        amount: props.data?.fetchUseditem.price,
        buyer_email: props.userData?.fetchUserLoggedIn.email,
        buyer_name: props.userData?.fetchUserLoggedIn.name,
      },
      function (rsp: any) {
        if (rsp.success) {
          Modal.success({ content: "😻 결제 성공! 😻" });
        } else {
          Modal.error({ content: "😹 결제 실패 😹" });
        }
      }
    );
  };
  return (
    <div>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <Button onClick={props.onClickGoToList}>목록으로</Button>
      <Button onClick={requestPay}>구매하기</Button>
    </div>
  );
}
