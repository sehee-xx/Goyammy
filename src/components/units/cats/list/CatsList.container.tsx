import axios from "axios";
import { useEffect, useState } from "react";
import CatsUI from "./CatsList.presenter";

export default function Cats() {
  const [imgUrls, setImgUrls] = useState<string[]>([]);

  useEffect(() => {
    const getImg = async () => {
      new Array(9).fill(1).map(async (_) => {
        const result: any = await axios.get(
          "https://api.thecatapi.com/v1/images/search"
        );
        setImgUrls((prev) => [...prev, result.data[0].url]);
      });
    };
    getImg();
  }, []);

  return <CatsUI imgUrls={imgUrls} />;
}
