import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapDetail(props: any) {
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
          center: new window.kakao.maps.LatLng(props.lat, props.lng),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        const markerPosition = new window.kakao.maps.LatLng(
          props.lat,
          props.lng
        );

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
          position: markerPosition,
          image: markerImage,
        });

        marker.setMap(map);
      });
    };
  }, [props.lat, props.lng]);
  return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
}
