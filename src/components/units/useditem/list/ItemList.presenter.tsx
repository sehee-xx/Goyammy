import * as S from "./ItemList.styles";
import { v4 as uuidv4 } from "uuid";
import { IItemsListUIProps } from "./ItemList.types";
import InfiniteScroll from "react-infinite-scroller";

export default function ItemListUI(props: IItemsListUIProps) {
  return (
    <S.Wrapper>
      <S.Title>베스트 상품</S.Title>
      <div>
        {props.visitedItems.length ? (
          <S.BestList>
            {new Array(4).fill(1).map((_, index) => (
              <S.BestItem key={uuidv4()}>
                <S.BestImg
                  src={
                    props.visitedItems[index]?.images[0]
                      ? `https://storage.googleapis.com/${props.visitedItems[index]?.images[0]}`
                      : `/images/noImage.jpeg`
                  }
                />
                <S.Column>
                  <S.BestName>{props.visitedItems[index]?.name}</S.BestName>
                  <S.BestRemarks>
                    {props.visitedItems[index]?.remarks}
                  </S.BestRemarks>
                  <S.BestPriceBox>
                    <S.BestPrice>
                      {props.visitedItems[index]?.price
                        .toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                    </S.BestPrice>
                    <S.BestWon>원</S.BestWon>
                  </S.BestPriceBox>
                </S.Column>
              </S.BestItem>
            ))}
          </S.BestList>
        ) : (
          <S.BestList></S.BestList>
        )}
      </div>
      <S.Body>
        <div style={{ height: 1000, overflowY: "auto", overflowX: "hidden" }}>
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
                      <S.ItemTopInfo>
                        <S.Name>{el.name}</S.Name>
                        <S.Remarks>{el.remarks}</S.Remarks>
                      </S.ItemTopInfo>
                      <S.TagBox>
                        {el.tags.map((tag: string, index: number) => {
                          if (index < 3) {
                            return <S.Tags key={uuidv4()}>#{tag}</S.Tags>;
                          }
                        })}
                      </S.TagBox>
                      <S.ItemBottomInfo>
                        <S.ProfileImg src="/images/profile.png" />
                        <S.Seller>{el.seller.name}</S.Seller>
                        <S.Pick src="/images/pick.png" />
                        <S.PickCount>{el.pickedCount}</S.PickCount>
                      </S.ItemBottomInfo>
                    </S.ItemInfo>
                    <S.PriceBox>
                      <S.Price>
                        {el.price
                          .toString()
                          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                      </S.Price>
                      <S.Won>원</S.Won>
                    </S.PriceBox>
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
        <S.Button onClick={props.onClickMoveToNew}>등록</S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
