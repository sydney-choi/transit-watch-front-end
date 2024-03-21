declare global {
  type StationItem = {
    stationId: string;
    name: string;
    direction: string;
    stationNumber: string[];
    hasBookmark: boolean;
  };

  type BusItem = {
    busNumber: string;
    direction: string;
    firstArrivalTime: string;
    secondArrivalTime: string;
    firstArrivalBusCrowding: string;
    secondArrivalBusCrowding: string;
  };
}

export {};
