import * as S from "./LayoutSide.styles";
import { v4 as uuidv4 } from "uuid";
import { ILayoutSideProps } from "./LayoutSide.types";

export default function LayoutSideUI(props: ILayoutSideProps) {
  const CheckImageUrl = (index: number) => {
    if (
      props.visited[index]?.images?.length > 0 &&
      props.visited[index]?.images[0]
    ) {
      return `https://storage.googleapis.com/${props.visited[index]?.images[0]}`;
    }
    return "/images/noImage.jpeg";
  };

  return (
    <S.Wrapper>
      <S.Today>최근 본 상품</S.Today>
      {new Array(3).fill(1).map((_, index) => (
        <div key={uuidv4()}>
          <S.TodayItem
            src={CheckImageUrl(index)}
            onClick={() => props.onClickMoveToVisited(props.visited[index])}
          />
        </div>
      ))}
    </S.Wrapper>
  );
}
