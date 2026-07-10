import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix for default marker icons in react-leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  // Gafsa coordinates
  const position = [34.425, 8.7842];

  return (
    <div style={{ height: '400px', width: '100%', borderRadius: '4px', overflow: 'hidden', zIndex: 1 }}>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <strong>BARRANI Bâtiment</strong><br />
            Rue Abou kacem Echebi<br />
            Immeuble Lobna 2éme étage<br />
            2100 Gafsa, Tunisie
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
