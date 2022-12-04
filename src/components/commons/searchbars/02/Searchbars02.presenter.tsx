import { Search, SearchBar, SearchIcon } from "./Searchbars02.styles";
import { ISearchbars02UIProps } from "./Searchbars02.types";

export default function Searchbars02UI(props: ISearchbars02UIProps) {
  return (
    <SearchBar>
      <Search
        placeholder="상품명을 검색해 주세요."
        onChange={props.onChangeName}
      />
      <SearchIcon src="images/click.png" onClick={props.onClickSearch} />
    </SearchBar>
  );
}
