declare global {
  type TStationItem = {
    stationId: string;
    name: string;
    direction: string;
    stationNumber: Array<string>;
    hasBookmark: boolean;
  };

  type TBusItem = {
    busNumber: string;
    direction: string;
    firstArrivalTime: string;
    secondArrivalTime: string;
    firstArrivalBusCrowding: string;
    secondArrivalBusCrowding: string;
  };
}

export {};
