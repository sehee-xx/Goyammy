import * as S from "./ItemMypage.styles";
import Head from "next/head";
import { IItemMypageUIProps } from "./ItemMypage.types";
import { v4 as uuidv4 } from "uuid";
import Paginations02 from "../../commons/paginations/02/Paginations02.container";
import Paginations03 from "../../commons/paginations/03/Paginations03.container";

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
          <S.ItemScroll
            pageStart={0}
            loadMore={props.loadFunc}
            hasMore={true}
            useWindow={false}
          >
            {props.pickedData?.fetchUseditemsIPicked[0] ? (
              props.pickedData?.fetchUseditemsIPicked.map((el: any) => (
                <S.PickItemBox
                  key={uuidv4()}
                  id={el._id}
                  onClick={props.onClickMoveToDetail(el)}
                >
                  <S.PickItemImg
                    src={
                      el.images[0]
                        ? `https://storage.googleapis.com/${el.images[0]}`
                        : "/images/noImage.jpeg"
                    }
                  />
                  <S.PickItemInfo>
                    <S.PickItemName>{el.name}</S.PickItemName>
                    <S.PickItemPrice>
                      {el.price
                        .toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                      원
                    </S.PickItemPrice>
                  </S.PickItemInfo>
                </S.PickItemBox>
              ))
            ) : (
              <S.PickEmpty>찜한 상품이 없습니다.</S.PickEmpty>
            )}
          </S.ItemScroll>
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
          {(props.buySell === "구매" && !props.boughtCount) ||
          (props.buySell === "판매" && !props.soldCount) ? (
            <S.NoItems>{props.buySell}한 상품이 없습니다.</S.NoItems>
          ) : (
            <S.Table>
              <S.TableTop>
                <S.RowTop>
                  <S.ColumnHeader>상품명</S.ColumnHeader>
                  <S.ColumnHeader>가격</S.ColumnHeader>
                  {props.buySell === "구매" ? (
                    <S.ColumnHeader>판매자</S.ColumnHeader>
                  ) : (
                    <S.ColumnHeader>구매자</S.ColumnHeader>
                  )}
                  <S.ColumnHeader>{props.buySell}한 날짜</S.ColumnHeader>
                </S.RowTop>
                {props.buySell === "구매"
                  ? props.boughtData?.fetchUseditemsIBought.map((el: any) => (
                      <S.Row key={uuidv4()}>
                        <S.ColumnContents>{el.name}</S.ColumnContents>
                        <S.ColumnContents>
                          {el.price
                            .toString()
                            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                          원
                        </S.ColumnContents>
                        <S.ColumnContents>{el.seller.name}</S.ColumnContents>
                        <S.ColumnContents>
                          {el.soldAt.slice(0, 10).replace(/-/gi, ".")}
                        </S.ColumnContents>
                      </S.Row>
                    ))
                  : props.soldData?.fetchUseditemsISold.map((el: any) => (
                      <S.Row key={uuidv4()}>
                        <S.ColumnContents>{el.name}</S.ColumnContents>
                        <S.ColumnContents>
                          {el.price
                            .toString()
                            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                          원
                        </S.ColumnContents>
                        <S.ColumnContents>
                          {!el.buyer ? "판매중" : el.buyer.name}
                        </S.ColumnContents>
                        <S.ColumnContents>
                          {!el.soldAt
                            ? "판매중"
                            : el.soldAt.slice(0, 10).replace(/-/gi, ".")}
                        </S.ColumnContents>
                      </S.Row>
                    ))}
              </S.TableTop>
              <S.TableBottom></S.TableBottom>
              <S.PaginationBox>
                {props.buySell === "구매" ? (
                  <Paginations02
                    refetch={props.refetchUseditemsIBought}
                    count={props.boughtCount}
                  />
                ) : (
                  <Paginations03
                    refetch={props.refetchUseditemsISold}
                    count={props.soldCount}
                  />
                )}
              </S.PaginationBox>
            </S.Table>
          )}
        </S.BuySellBox>
      </S.Footer>
    </S.Wrapper>
  );
}
