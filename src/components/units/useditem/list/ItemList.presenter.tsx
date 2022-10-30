import * as S from "./ItemList.styles";
import { v4 as uuidv4 } from "uuid";
import { IItemsListUIProps } from "./ItemList.types";
import InfiniteScroll from "react-infinite-scroller";

export default function ItemListUI(props: IItemsListUIProps) {
  return (
    <S.Wrapper>
      <S.Main>
        <S.Header>
          <S.Title>오늘 본 상품</S.Title>
          <div>
            {props.visitedItems.length ? (
              <S.TodayList>
                {new Array(4).fill(1).map((_, index) => (
                  <S.TodayItem key={uuidv4()}>
                    <S.TodayImg
                      src={
                        props.visitedItems[index]?.images[0]
                          ? `https://storage.googleapis.com/${props.visitedItems[index]?.images[0]}`
                          : `/images/noImage.jpeg`
                      }
                    />
                    <S.Column>
                      <S.TodayName>
                        {props.visitedItems[index]?.name}
                      </S.TodayName>
                      <S.TodayRemarks>
                        {props.visitedItems[index]?.remarks}
                      </S.TodayRemarks>
                      <S.TodayPrice>
                        ₩ {props.visitedItems[index]?.price}
                      </S.TodayPrice>
                    </S.Column>
                  </S.TodayItem>
                ))}
              </S.TodayList>
            ) : (
              <S.TodayList></S.TodayList>
            )}
          </div>
        </S.Header>
        <S.Body>
          <S.BestAlign>
            <S.SellStatus>판매중 상품</S.SellStatus>
            <S.SellStatus>판매된 상품</S.SellStatus>
            <S.Search placeholder="상품을 검색해주세요 😸"></S.Search>
            <S.SearchDate>2022.06.19 ~ 2022.06.19</S.SearchDate>
            <S.SearchButton>검색</S.SearchButton>
          </S.BestAlign>
          <div style={{ height: 1000, overflow: "auto" }}>
            <InfiniteScroll
              pageStart={0}
              loadMore={props.loadFunc}
              hasMore={true}
              useWindow={false}
            >
              {props.data?.fetchUseditems ? (
                props.data?.fetchUseditems.map((el: any) => (
                  <S.Item
                    key={uuidv4()}
                    id={el._id}
                    onClick={props.onClickMoveToDetail(el)}
                  >
                    <S.Row>
                      <S.ItemImg
                        src={
                          el.images[0]
                            ? `https://storage.googleapis.com/${el.images[0]}`
                            : "/images/noImage.jpeg"
                        }
                      />
                      <S.ItemInfo>
                        <S.Name>{el.name}</S.Name>
                        <S.Remarks>{el.remarks}</S.Remarks>
                        <S.Tags>#최애간식 #판매율 1위 #유기농</S.Tags>
                        <S.Row>
                          <S.ProfileImg src="/images/profile.png" />
                          <S.Seller>{el.seller.name}</S.Seller>
                          <S.Pick src="/images/pick.png" />
                          <S.PickCount>{el.pickedCount}</S.PickCount>
                        </S.Row>
                      </S.ItemInfo>
                      <S.Price>₩ {el.price}</S.Price>
                    </S.Row>
                  </S.Item>
                ))
              ) : (
                <></>
              )}
            </InfiniteScroll>
          </div>
        </S.Body>
        <S.Footer>
          <S.Button onClick={props.onClickMoveToNew}>등록하기</S.Button>
        </S.Footer>
      </S.Main>
    </S.Wrapper>
  );
}
