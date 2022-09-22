import axios from "axios";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapWrite(props: any) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=bf1abfa34e8657abbd85bce3a25b1c4d&autoload=false";
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

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map);

        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: any) {
            const latlng = mouseEvent.latLng;
            marker.setPosition(latlng);
            axios
              .get(
                `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${latlng.La}&y=${latlng.Ma}`,
                {
                  headers: {
                    Authorization: "KakaoAK 16927a3a7308d690fd1868a394bee796",
                  },
                }
              )
              .then((res) => {
                props.onChangeLocation(
                  latlng.Ma,
                  latlng.La,
                  res.data.documents[0].address.address_name
                );
              });
          }
        );
      });
    };
  }, []);
  return <div id="map" style={{ width: "384px", height: "252px" }}></div>;
}
