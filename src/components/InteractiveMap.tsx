import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import React, { useRef } from "react";

const mapContainerStyle = {
  width: "100%",
  height: "600px",
};

const defaultCenter = { lat: 43.8971, lng: -78.8658 };

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
        fullscreenControl: false,
      }}
    >
      {locations.map((loc, idx) => (
        <Marker
          key={loc.name}
          position={{ lat: loc.lat, lng: loc.lng }}
          icon={{
            url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
            scaledSize: new window.google.maps.Size(40, 40),
          }}
          onClick={() => onMarkerClick?.(loc)}
        />
      ))}
    </GoogleMap>
  );
};

export default InteractiveMap;
