// import { useEffect, useRef } from "react";
// import { loadMap } from "../../utils/apiMaps";

// const Maps = () => {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     loadMap(mapRef.current.id, { lat: -20.55719, lng: -48.571048 });
//   }, []);

//   return (
//     <div
//       id="map"
//       className="z-0 w-full h-72 mb-32 border-t border-b border-color-light-secondary"
//       ref={mapRef}
//     ></div>
//   );
// };

// export default Maps;
// // -20.55719, -48.571048;

import { useMemo } from "react";
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";

export default function Maps() {
  const mapCenter = useMemo(() => ({ lat: -20.542484, lng: -48.571843 }), []);
  // -20.542484, -48.571843

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBq3zGXt5n2XTMcTYaqGr0Ge-kLK_HtdkQ",
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <GoogleMap
      options={mapOptions}
      zoom={18}
      center={mapCenter}
      mapTypeId={google.maps.MapTypeId.ROADMAP}
      mapContainerStyle={{
        width: "100%",
        height: "350px",
        zIndex: "0",
        position: "relative",
      }}
    >
      <MarkerF
        position={mapCenter}
        onLoad={() => console.log("Marker Loaded")}
      />
    </GoogleMap>
  );
}
