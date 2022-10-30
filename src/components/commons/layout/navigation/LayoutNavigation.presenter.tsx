import { useRouter } from "next/router";
import { Fragment } from "react";
import { MenuItem, Wrapper } from "./LayoutNavigation.styles";
import { ILayoutNavigationUIProps } from "./LayoutNavigation.types";
import { v4 as uuidv4 } from "uuid";

const NAVIGATION_MENUS = [
  { name: "CATS", page: "/cats" },
  { name: "CAFE", page: "/boards" },
  { name: "MARKET", page: "/markets" },
  { name: "MYPAGE", page: "/mypages" },
  { name: "EVENT", page: "/boards" },
];

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
  const router = useRouter();
  return (
    <Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={uuidv4()}>
          <MenuItem
            id={el.page}
            onClick={props.onClickMenu}
            isValid={router.asPath.includes(el.page)}
          >
            {el.name}
          </MenuItem>
        </Fragment>
      ))}
    </Wrapper>
  );
}
