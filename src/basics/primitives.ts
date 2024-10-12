type Primitives = {
  number: number;
  string: string;
  boolean: boolean;
  null: null;
  undefined: undefined;
  symbol: symbol;
}


type ObjectTypes = {
  object: object;
  array: any[];
  tuple: [number, string];
  function: Function;
  class: Date;
  classInstance: Date;
}

type CustomTypes = {
  enum: Role;
  literal: "demo";
  union: number | string;
  alias: ConfigurationAliases;
}

type OtherTypes = {
  any: any;
  unknown: unknown;
  never: never;
  void: void;
  literal: "warm" | "cold" | "red";
}
