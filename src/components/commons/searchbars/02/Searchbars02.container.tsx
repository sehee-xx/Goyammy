import _ from "lodash";
import { ChangeEvent, useState } from "react";
import Searchbars02UI from "./Searchbars02.presenter";
import { ISearchbars02Props } from "./Searchbars02.types";

export default function Searchbars02(props: ISearchbars02Props) {
  const [name, setName] = useState("");

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const onClickSearch = () => {
    props.refetch({ search: name });
  };

  return (
    <Searchbars02UI onClickSearch={onClickSearch} onChangeName={onChangeName} />
  );
}
