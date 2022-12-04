import * as S from "./ItemMypage.styles";
import Head from "next/head";
import { IItemMypageUIProps } from "./ItemMypage.types";

export default function ItemMypageUI(props: IItemMypageUIProps) {
  return (
    <S.Wrapper>
      <S.Main>
        <S.Box>
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
          <select onChange={props.onChangePrice}>
            <option value="100">100원</option>
            <option value="500">500원</option>
            <option value="1000">1000원</option>
            <option value="2000">2000원</option>
            <option value="5000">5000원</option>
          </select>
          <S.Button onClick={props.requestPay}>충전하기</S.Button>
          <div>
            포인트: {props.userData?.fetchUserLoggedIn.userPoint.amount}
          </div>
        </S.Box>
      </S.Main>
    </S.Wrapper>
  );
}
