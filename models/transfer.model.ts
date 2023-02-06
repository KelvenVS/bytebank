  export interface Transferencia {
      id?: number | string;
      value: number;
      destiny: number | string;
      date?: Date;
  }

  export interface RootObject {
      transferencias: Transferencia[];
  }
