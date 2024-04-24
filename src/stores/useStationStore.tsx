import { create } from 'zustand';
import { Station } from '@/types/common';

interface StationStore {
  station: Station;
  setStation: (station: Station) => void;
}

export const useStationStore = create<StationStore>((set) => ({
  station: {
    stationId: '',
    arsId: '',
    stationName: '',
    nextStationName: '',
    crowding: '',
    xlongitude: 0,
    ylatitude: 0,
  },
  setStation: (station: Station) => set({ station }),
}));
