import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: 'AIzaSyA6lR8odqZQuHb9gUBfhoHikNLGhpuinsY',
        version: 'weekly',
      });

      await loader.load();

      const locationInMap = {
        lat: -7.282862,
        lng: 112.785852,
      };

      const options: google.maps.MapOptions = {
        center: locationInMap,
        zoom: 17,
      };

      new google.maps.Map(mapRef.current as HTMLDivElement, options);
    };

    initializeMap();
  }, []);

  return <div className="map" style={{ width: '100%', height: '100vh' }} ref={mapRef}></div>;
};

export default MapComponent;
