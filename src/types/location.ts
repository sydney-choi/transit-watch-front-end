export interface Location {
  loaded: boolean;
  coordinates?: Coordinates;
  error?: { code: number; message: string };
}

export interface Coordinates {
  lat: number;
  lng: number;
}
