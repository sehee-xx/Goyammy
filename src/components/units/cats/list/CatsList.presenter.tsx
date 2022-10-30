import { CatBox, CatImg, Wrapper } from "./CatsList.styles";
import { ICatsUIProps } from "./CatsList.types";
import { v4 as uuidv4 } from "uuid";

export default function CatsUI(props: ICatsUIProps) {
  return (
    <Wrapper>
      <CatBox>
        {props.imgUrls.map((el, index) => (
          <CatImg key={uuidv4()} src={el} />
        ))}
      </CatBox>
    </Wrapper>
  );
}
