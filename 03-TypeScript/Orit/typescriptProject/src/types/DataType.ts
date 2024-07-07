import { NetworkInformation } from "../interfaces/ICollector";

export type DataType = string | number | boolean | null | object | string[] | number[] | object[] | null;
export type CollectedData = Record<string, string | number | boolean | null | object | string[] | number[] | object[] | null>;
