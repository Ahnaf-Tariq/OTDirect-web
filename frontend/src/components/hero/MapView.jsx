import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";

const MapView = () => {
  const position = [24.919150, 67.124450]; // Jauhar

  return (
    <div className="w-full h-[400px] sm:h-[500px] lg:h-full">
      <div className="h-full rounded-xl overflow-hidden shadow-md z-0 relative">
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
            <Popup>Gulistan-e-Jauhar, Karachi</Popup>
          </Marker>
          <ZoomControl position="topright" />
        </MapContainer>
      </div>
    </div>
  );
};

export default MapView;
