import { useState, useEffect } from 'react';
import { ILocation } from '@/types/location';

export const useFindMyLocation = () => {
  const [location, setLocation] = useState<ILocation>({
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
  });

  const onSuccess = (position: { coords: { latitude: number; longitude: number } }) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      },
    });
  };

  const onError = (error: { code: number; message: string }) => {
    setLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    // navigator 객체 안에 geolocation이 없다면 위치 정보가 없는 것.
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation not supported',
      });
    }

    navigator.geolocation.watchPosition(onSuccess, onError);
  }, []);

  return location;
};
