import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import React, { useRef } from "react";

const mapContainerStyle = {
  width: "100%",
  height: "600px",
};

const defaultCenter = { lat: 43.7615, lng: -79.4111 }; // North York center

export interface ServiceLocation {
  name: string;
  lat: number;
  lng: number;
}

interface InteractiveMapProps {
  locations: ServiceLocation[];
  selectedLocation?: ServiceLocation | null;
  onMarkerClick?: (location: ServiceLocation) => void;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ locations, selectedLocation, onMarkerClick }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
  });
  const mapRef = useRef<google.maps.Map | null>(null);

  React.useEffect(() => {
    if (selectedLocation && mapRef.current) {
      mapRef.current.panTo({ lat: selectedLocation.lat, lng: selectedLocation.lng });
      mapRef.current.setZoom(13);
    }
  }, [selectedLocation]);

  if (loadError) return <div className="flex items-center justify-center h-[600px] text-red-500">Error loading map. Please check your API key.</div>;
  if (!isLoaded) return <div className="flex items-center justify-center h-[600px]">Loading map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={selectedLocation ? { lat: selectedLocation.lat, lng: selectedLocation.lng } : defaultCenter}
      zoom={11}
      onLoad={map => {
        mapRef.current = map;
        return undefined;
      }}
      options={{
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ]
      }}
    >
      {locations.map((loc, idx) => (
        <Marker
          key={loc.name}
          position={{ lat: loc.lat, lng: loc.lng }}
          icon={{
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: "#3b82f6", // Primary color - will be visible in both themes
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 3,
          }}
          label={{
            text: loc.name,
            color: "#000000",
            fontSize: "12px",
            fontWeight: "bold",
            className: "map-marker-label"
          }}
          onClick={() => onMarkerClick?.(loc)}
          animation={selectedLocation?.name === loc.name ? window.google.maps.Animation.BOUNCE : undefined}
        />
      ))}
    </GoogleMap>
  );
};

export default InteractiveMap;
