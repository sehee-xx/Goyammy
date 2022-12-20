import { Page } from "./Paginations02.styles";
import { IPaginations02UIProps } from "./Paginations02.types";
import { v4 as uuidv4 } from "uuid";

export default function Paginations02UI(props: IPaginations02UIProps) {
  return (
    <div>
      <Page onClick={props.onClickPrevPage}>{`<`}</Page>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <Page
              key={uuidv4()}
              onClick={props.onClickPage}
              id={String(props.startPage + index)}
              isActive={props.startPage + index === props.activedPage}
            >
              {props.startPage + index}
            </Page>
          )
      )}
      <Page onClick={props.onClickNextPage}>{`>`}</Page>
    </div>
  );
}
