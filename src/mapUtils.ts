import {ObjectedMap} from "./objectedMap"

export const createMapFromArrayOfObjects = <T, K extends keyof T>(arrayOfObjects: T[], identifierKey: K): Map<K, T> =>
arrayOfObjects.reduce((mapOfObjects, object) => mapOfObjects.set(object[String(identifierKey)], object), new Map<K, T>())

export const createSinglePropertyMapFromArrayOfObjects = <T, K extends keyof T>(arrayOfObjects: T[], identifierKey: K, propertyKey: K): Map<string, unknown> =>
arrayOfObjects.reduce((mapOfObjects, object) => mapOfObjects.set(object[String(identifierKey)], object[String(propertyKey)]), new Map<string, unknown>())

export const createObjectedMap = <T, K extends keyof T>(arrayOfObjects: T[], identifierKeys: K []): ObjectedMap<Pick<T, K>, T> =>
arrayOfObjects.reduce((objectedMap, object) => objectedMap.set(object), new ObjectedMap<Pick<T, K>, T>(identifierKeys as string[]))

export const createdGroupedObjectedMap = <T, K extends keyof T>(arrayOfObjects: T[], identifierKeys: K[]): ObjectedMap<Pick<T, K>, T[]> =>
arrayOfObjects.reduce((objectedMap, object) =>
    (objectedMap.has(object) ?
        objectedMap.set(object, [...objectedMap.get(object), object]) :
        objectedMap.set(object, [object])
    ), new ObjectedMap<Pick<T, K>, T[]>(identifierKeys as string[]))

export const getValuesFromMap = <K, V>(map: Map<K, V>): V[] => Array.from(map.values())
export const getKeysFromMap = <K, V>(map: Map<K, V>): K[] => Array.from(map.keys())
