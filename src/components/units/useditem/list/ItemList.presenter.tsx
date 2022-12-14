import * as S from "./ItemList.styles";
import { v4 as uuidv4 } from "uuid";
import { IItemsListUIProps } from "./ItemList.types";
import InfiniteScroll from "react-infinite-scroller";
import Searchbars02 from "../../../commons/searchbars/02/Searchbars02.container";

export default function ItemListUI(props: IItemsListUIProps) {
  return (
    <S.Wrapper>
      <S.HeaderText>베스트 상품</S.HeaderText>
      <S.BestList>
        {new Array(4).fill(1).map((_, index) => (
          <S.BestItem
            key={uuidv4()}
            id={props.dataUseditemsBest?.fetchUseditemsOfTheBest[index]._id}
            onClick={props.onClickMoveToDetail(
              props.dataUseditemsBest?.fetchUseditemsOfTheBest[index]
            )}
          >
            <S.BestImg
              src={
                props.dataUseditemsBest?.fetchUseditemsOfTheBest[index]
                  ?.images[0]
                  ? `https://storage.googleapis.com/${props.dataUseditemsBest?.fetchUseditemsOfTheBest[index].images[0]}`
                  : `/images/noImage.jpeg`
              }
            />
            <S.BestInfo>
              <S.BestName>
                {props.dataUseditemsBest?.fetchUseditemsOfTheBest[index]?.name}
              </S.BestName>
              <S.BestRemarks>
                {
                  props.dataUseditemsBest?.fetchUseditemsOfTheBest[index]
                    ?.remarks
                }
              </S.BestRemarks>
              <S.BestPriceBox>
                <S.BestPrice>
                  {props.dataUseditemsBest?.fetchUseditemsOfTheBest[
                    index
                  ]?.price
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                </S.BestPrice>
                <S.BestWon>원</S.BestWon>
              </S.BestPriceBox>
            </S.BestInfo>
          </S.BestItem>
        ))}
      </S.BestList>
      <S.MiddleBox>
        <S.IsSoldoutSelect onChange={props.onChangeIsSoldout}>
          <option key="판매중" value="판매중">
            판매중
          </option>
          <option key="판매완료" value="판매완료">
            판매완료
          </option>
        </S.IsSoldoutSelect>
        <Searchbars02 refetch={props.refetch} />
      </S.MiddleBox>
      <S.Body>
        <S.ItemScroll>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.loadFunc}
            hasMore={true}
            useWindow={false}
          >
            {props.data?.fetchUseditems[0] ? (
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
                        <S.SellerBox>
                          <S.SellerProfileImg src="/images/profile.png" />
                          <S.Seller>{el.seller.name}</S.Seller>
                        </S.SellerBox>
                        <S.PickBox>
                          <S.Pick src="/images/pick.png" />
                          <S.PickCount>{el.pickedCount}</S.PickCount>
                        </S.PickBox>
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
              <S.SearchFail>검색 결과가 없습니다.</S.SearchFail>
            )}
          </InfiniteScroll>
        </S.ItemScroll>
      </S.Body>
      <S.Footer>
        <S.Button onClick={props.onClickMoveToNew}>등록</S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
