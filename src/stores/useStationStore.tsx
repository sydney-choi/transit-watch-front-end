import { create } from 'zustand';
import { Station } from '@/types/common';

interface StationStore {
  station: Station;
  setStation: (station: Station) => void;
}

export const useStationStore = create<StationStore>((set) => ({
  station: {
    stationId: '',
    stationName: '',
    nextStationName: '',
    arsId: '',
    crowding: '',
    xlatitude: 0,
    ylongitude: 0,
  },
  setStation: (station: Station) => set({ station }),
}));
