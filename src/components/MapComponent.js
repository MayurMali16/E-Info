import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MapComponent.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});


const ResetMapView = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    console.log("Address or Position Changed:", position); 
    if (position) {
      map.setView(position, 13);
      map.invalidateSize();  
    }
  }, [position, map]);

  return null;
};

const MapComponent = ({ address }) => {
  if (!address || !address.lat || !address.lng) {
    return <p>No valid location data available.</p>;
  }

  return (
    <div className="map-container">
      <MapContainer
        center={[address.lat, address.lng]}
        zoom={13}
        className="leaflet-container"
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

       
        <Marker position={[address.lat, address.lng]}>
          <Popup>{address.label}</Popup>
        </Marker>

   
        <ResetMapView position={[address.lat, address.lng]} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;