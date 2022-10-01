import { CatImg, Wrapper } from "./CatsList.styles";
import { ICatsUIProps } from "./CatsList.types";

export default function CatsUI(props: ICatsUIProps) {
  return (
    <Wrapper>
      <div>
        {props.imgUrls.map((el, index) => (
          <>
            <CatImg key={el} src={el} />
            {(index + 1) % 3 === 0 && <br />}
          </>
        ))}
      </div>
    </Wrapper>
  );
}
