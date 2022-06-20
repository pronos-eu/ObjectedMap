import {ObjectedMap} from "../src/objectedMap"
import {createdGroupedObjectedMap,createObjectedMap} from "../src/mapUtils"
import {cloneObject} from "./testUtils"

const objectsWithUniqueIndexKeys = [
    {key1: 'value1a', key2: 'value2a', key3: 'value3a', key4: 'value4a', key5: 'value5a'},
    {key1: 'value1b', key2: 'value2b', key3: 'value3b', key4: 'value4b', key5: 'value5b'},
    {key1: 'value1c', key2: 'value2c'},
]

const objectsWithNotUniqueIndexKeys = [
    {key1: 'value1a', key2: 'value2a', key3: 'value3a', key4: 'value4a', key5: 'value5a'},
    {key1: 'value1a', key2: 'value2a', key3: 'value3b', key4: 'value4b', key5: 'value5b'},
    {key1: 'value2b', key2: 'value2c', key6: 'valuexyz'},
    {key1: 'value2b', key2: 'value2c'},
    {key1: 'value2c', key2: 'value2d'},
    {key1: 'value2c', key2: 'value2dx'},
]

const customizedObjectAsKeysTestCases = [
    {indexKey: {key1: '123', key2: 'keyForNumber'}, valueToSet: 123},
    {indexKey: {key1: 'keyForString1', key2: 123}, valueToSet: 'stringAsValue'},
    {indexKey: {key1: 'keyForArray1', key2: 'keyForArray2'}, valueToSet: ['stringAsValue', '123', 123, ['nestedArray']]},
    {indexKey: {key1: 'keyForMap1', key2: 'keyForMap2'}, valueToSet: new Map()},
]

describe(`ObjectedMap should create Map object with support of object as keys`, () => {
    const testCases = objectsWithUniqueIndexKeys

    const map = new ObjectedMap(['key1', 'key2'])

    testCases.forEach(object => map.set(object))

    test(`Should properly set and return object as key (by the reference)`, () => {
        testCases.forEach(testCase => {
            expect(map.get(testCase)).toEqual(testCase)
        })
    })

    test(`Should properly set and return object as key (without reference) when using full object as keys`, () => {
        testCases.forEach(testCase => {
            expect(map.get(cloneObject(testCase))).toEqual(testCase)
        })
    })

    test(`Should properly return whole object only by using selected keys`, () => {
        testCases.forEach(testCase => {
            expect(map.get({key1: testCase.key1, key2: testCase.key2})).toEqual(testCase)
        })
    })

    test(`Should return whole map while setting new value`, () => {
        const newObjectForMap = {key1: 'value1c', key2: 'value2c'}
        expect(map.set(newObjectForMap)).toBe(map)
    })

    test(`Should properly check if the given keys exists in the map`, () => {
        expect(map.has({key1: 'value1a', key2: 'value2a', key3: 'value3d'})).toEqual(true)
        expect(map.has({key1: 'nonExistingValue', key2: 'nonExistingValue2', key3: 'someOtherKey'})).toEqual(false)
    })

    test(`Should properly remove given key from map`, () => {
        expect(map.delete({key1: 'value1a', key2: 'value2a'})).toEqual(true)
        expect(map.delete({key1: 'nonExistingValue', key2: 'nonExistingValue'})).toEqual(false)
        expect(map.get({key1: 'value1a', key2: 'value2a'})).toEqual(undefined)
    })

    test(`Should add to map elements from multiple types on customized key`, () => {
        customizedObjectAsKeysTestCases.forEach(testCase => {
            expect(map.set(testCase.indexKey, testCase.valueToSet))
            expect(map.get(testCase.indexKey)).toEqual(testCase.valueToSet)
        })
    })
})

describe(`createdGroupedObjectedMap should properly map and group array of objects`, () => {
    const testCases = objectsWithNotUniqueIndexKeys
    const groupedMap = createdGroupedObjectedMap(objectsWithNotUniqueIndexKeys, ['key1', 'key2'])

    test(`Should have only ${objectsWithNotUniqueIndexKeys.length} keys set`, () => {
        expect(groupedMap.size).toBe(4)
    })

    test(`Should properly return grouped objects`, () => {
        expect(groupedMap.get({key1: 'value1a', key2: 'value2a'})).toEqual([cloneObject(testCases[0]), cloneObject(testCases[1])])
        expect(groupedMap.get({key1: 'value2b', key2: 'value2c'})).toEqual([cloneObject(testCases[2]), cloneObject(testCases[3])])
        expect(groupedMap.get({key1: 'value2c', key2: 'value2d'})).toEqual([cloneObject(testCases[4])])
        expect(groupedMap.get({key1: 'value2c', key2: 'value2dx'})).toEqual([cloneObject(testCases[5])])
    })

    test(`Should be instance of ObjectedMap`, () => {
        expect(groupedMap).toBeInstanceOf(ObjectedMap)
    })
})

describe(`createObjectedMap should properly create ObjectedMap from array from given index keys`, () => {
    const testCases = objectsWithUniqueIndexKeys
    const map = createObjectedMap(testCases, ['key1', 'key2'])

    test(`Should have only ${testCases.length} keys set`, () => {
        expect(map.size).toBe(testCases.length)
    })

    test(`Should be instance of ObjectedMap`, () => {
        expect(map).toBeInstanceOf(ObjectedMap)
    })
})
