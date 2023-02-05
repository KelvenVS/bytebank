  export interface Transferencia {
      id: string;
      value: number;
      destiny: string;
      date: Date;
  }

  export interface RootObject {
      transferencias: Transferencia[];
  }
