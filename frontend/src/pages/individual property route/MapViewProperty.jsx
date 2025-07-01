import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapViewProperty = () => {
  const position = [24.817038, 67.064940]; // DHA phase 7

  return (
    <div className="w-full h-full">
      <div className="h-full rounded-xl overflow-hidden z-0">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={true}
          zoomControl={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://carto.com/">CARTO</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          <Marker position={position}>
            <Popup>DHA, phase 7</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapViewProperty;
