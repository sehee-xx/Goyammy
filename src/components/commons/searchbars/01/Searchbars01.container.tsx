import _ from "lodash"
import { ChangeEvent } from "react";
import Searchbars01UI from "./Searchbars01.presenter";
import { ISearchbars01Props } from "./Searchbars01.types"

export default function Searchbars01(props: ISearchbars01Props) {
  const getDebounce = _.debounce((data: string) => {
    props.refetch({ search: data, page: 1});
    props.refetchBoardsCount({ search: data });
    props.onChangeKeyword(data);
  }, 200)

  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.currentTarget.value);
  }

  return <Searchbars01UI onChangeSearchbar={onChangeSearchbar} />
}