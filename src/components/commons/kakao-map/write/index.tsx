import styled from "@emotion/styled";
import { useEffect } from "react";
import { breakPoints } from "../../breakPoints/breakPoints";

declare const window: typeof globalThis & {
  kakao: any;
};

const KakaoMap = styled.div`
  width: 100%;
  height: 227px;

  @media ${breakPoints.tablet} {
    height: 220px;
  }

  @media ${breakPoints.mobile} {
    height: 182px;
  }
`;

export default function KakaoMapWrite(props: any) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=bf1abfa34e8657abbd85bce3a25b1c4d&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(
            37.5213527337159,
            126.937326091368
          ),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          props.address || "서울 영등포구 63로 45",
          function (result: any, status: any) {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );
              props.setLatLng([result[0].y, result[0].x]);
              const imageSrc = "/images/mapLocation.png";
              const imageSize = new window.kakao.maps.Size(55, 59);
              const imageOption = {
                offset: new window.kakao.maps.Point(27, 69),
              };

              const markerImage = new window.kakao.maps.MarkerImage(
                imageSrc,
                imageSize,
                imageOption
              );

              const marker = new window.kakao.maps.Marker({
                map,
                position: coords,
                image: markerImage,
              });

              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.address]);
  return <KakaoMap id="map"></KakaoMap>;
}
