import { ObjectedMap } from "./objectedMap";
export declare const createMapFromArrayOfObjects: <T, K extends keyof T>(arrayOfObjects: T[], identifierKey: K) => Map<K, T>;
export declare const createSinglePropertyMapFromArrayOfObjects: <T, K extends keyof T>(arrayOfObjects: T[], identifierKey: K, propertyKey: K) => Map<string, unknown>;
export declare const createObjectedMap: <T, K extends keyof T>(arrayOfObjects: T[], identifierKeys: K[]) => ObjectedMap<Pick<T, K>, T>;
export declare const createdGroupedObjectedMap: <T, K extends keyof T>(arrayOfObjects: T[], identifierKeys: K[]) => ObjectedMap<Pick<T, K>, T[]>;
export declare const getValuesFromMap: <K, V>(map: Map<K, V>) => V[];
export declare const getKeysFromMap: <K, V>(map: Map<K, V>) => K[];
