export interface DataObject<T> {
    [key: string]: T | T[] | null;
}