import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";

const MapView = () => {
  const position = [24.8607, 67.0011]; // Example: Karachi

  return (
    <div className="w-full h-[400px] sm:h-[500px] lg:h-full">
      <div className="h-full rounded-xl overflow-hidden shadow-lg z-0">
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
            <Popup>Karachi, Pakistan</Popup>
          </Marker>
            <ZoomControl position="topright" />
        </MapContainer>
      </div>
    </div>
  );
};

export default MapView;
