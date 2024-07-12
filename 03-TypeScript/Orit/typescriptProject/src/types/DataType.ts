import { NetworkInformation } from "../interfaces/ICollector.js";

export type DataType = string | number | boolean | null | object | string[] | number[] | object[] | null;
export type CollectedData = Record<string, string | number | boolean | null | object | NetworkInformation | string[] | number[] | object[] | null>;
