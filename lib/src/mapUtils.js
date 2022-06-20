"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKeysFromMap = exports.getValuesFromMap = exports.createdGroupedObjectedMap = exports.createObjectedMap = exports.createSinglePropertyMapFromArrayOfObjects = exports.createMapFromArrayOfObjects = void 0;
const objectedMap_1 = require("./objectedMap");
const createMapFromArrayOfObjects = (arrayOfObjects, identifierKey) => arrayOfObjects.reduce((mapOfObjects, object) => mapOfObjects.set(object[String(identifierKey)], object), new Map());
exports.createMapFromArrayOfObjects = createMapFromArrayOfObjects;
const createSinglePropertyMapFromArrayOfObjects = (arrayOfObjects, identifierKey, propertyKey) => arrayOfObjects.reduce((mapOfObjects, object) => mapOfObjects.set(object[String(identifierKey)], object[String(propertyKey)]), new Map());
exports.createSinglePropertyMapFromArrayOfObjects = createSinglePropertyMapFromArrayOfObjects;
const createObjectedMap = (arrayOfObjects, identifierKeys) => arrayOfObjects.reduce((objectedMap, object) => objectedMap.set(object), new objectedMap_1.ObjectedMap(identifierKeys));
exports.createObjectedMap = createObjectedMap;
const createdGroupedObjectedMap = (arrayOfObjects, identifierKeys) => arrayOfObjects.reduce((objectedMap, object) => (objectedMap.has(object) ?
    objectedMap.set(object, [...objectedMap.get(object), object]) :
    objectedMap.set(object, [object])), new objectedMap_1.ObjectedMap(identifierKeys));
exports.createdGroupedObjectedMap = createdGroupedObjectedMap;
const getValuesFromMap = (map) => Array.from(map.values());
exports.getValuesFromMap = getValuesFromMap;
const getKeysFromMap = (map) => Array.from(map.keys());
exports.getKeysFromMap = getKeysFromMap;
//# sourceMappingURL=mapUtils.js.map