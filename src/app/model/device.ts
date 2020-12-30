export interface Device {
  id: number;
  label: string;
  os: string;
  memory?: number;
  price?: number;
  madeIn?: MadeIn;
}

export interface MadeIn {
  city: string;
  lat: number;
  lng: number;
}
