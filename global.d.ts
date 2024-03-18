declare global {
  type StationItem = {
    stationId: string;
    name: string;
    direction: string;
    stationNumber: Array<string>;
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
