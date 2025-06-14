import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapView = () => {
  const position = [24.8607, 67.0011]; // Example: Karachi

  return (
    <div className="w-full h-full">
      <div className="h-[90vh] rounded-xl overflow-hidden shadow-lg">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://carto.com/">CARTO</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          <Marker position={position}>
            <Popup>Karachi, Pakistan</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapView;
