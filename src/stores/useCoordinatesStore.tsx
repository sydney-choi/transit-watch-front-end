import { create } from 'zustand';
import { Coordinates } from '@/types/location';

interface CoordinatesStore {
  coordinates: Coordinates;
  setCoordinates: (coordinates: Coordinates) => void;
}

export const useCoordinatesStore = create<CoordinatesStore>((set) => ({
  coordinates: {
    lng: 0,
    lat: 0,
  },
  setCoordinates: (coordinates: Coordinates) => set({ coordinates }),
}));
