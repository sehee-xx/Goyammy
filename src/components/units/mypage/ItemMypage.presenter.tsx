import * as S from "./ItemMypage.styles";
import Head from "next/head";
import { IItemMypageUIProps } from "./ItemMypage.types";
import InfiniteScroll from "react-infinite-scroller";

export default function ItemMypageUI(props: IItemMypageUIProps) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.UserProfile src="images/profile.png" />
        <S.UserName>{props.userData?.fetchUserLoggedIn.name}</S.UserName>
      </S.Header>
      <S.Body>
        <S.PointBox>
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
          <S.UserPointBox>
            <S.PointImg src="images/point.png" />
            <S.UserPoint>
              {props.userData?.fetchUserLoggedIn.userPoint.amount}P
            </S.UserPoint>
          </S.UserPointBox>
          <S.PointChargeBox>
            <S.PointSelect onChange={props.onChangePrice}>
              <option value="none" selected disabled>
                포인트 선택
              </option>
              <option value="100">100P</option>
              <option value="500">500P</option>
              <option value="1000">1000P</option>
              <option value="2000">2000P</option>
              <option value="5000">5000P</option>
            </S.PointSelect>
            <S.Button onClick={props.requestPay}>충전</S.Button>
          </S.PointChargeBox>
        </S.PointBox>
        <S.PickBox>
          <S.PickHeader>
            <S.PickImg src="images/pick.png" />
            <S.Title>찜한 상품</S.Title>
          </S.PickHeader>
        </S.PickBox>
      </S.Body>
      <S.Footer>
        <S.BuySellBox>
          <S.BuySellHeader>
            <S.ItemImg src="images/item.png" />
            <S.Title>{props.buySell}한 상품</S.Title>
            <S.BuySellSelect onChange={props.onChangeBuySell}>
              <option value="구매">구매</option>
              <option value="판매">판매</option>
            </S.BuySellSelect>
          </S.BuySellHeader>
        </S.BuySellBox>
      </S.Footer>
    </S.Wrapper>
  );
}
