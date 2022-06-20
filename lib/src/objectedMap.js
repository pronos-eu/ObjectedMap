"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectedMap = void 0;
class ObjectedMap extends Map {
    constructor(keysProperties) {
        super();
        this.keysProperties = keysProperties;
    }
    get(indexObject) {
        return super.get(this.createKeyFromObject(indexObject));
    }
    set(indexObject, dataToSet = indexObject) {
        return super.set(this.createKeyFromObject(indexObject), dataToSet);
    }
    delete(indexObject) {
        return super.delete(this.createKeyFromObject(indexObject));
    }
    has(indexObject) {
        return super.has(this.createKeyFromObject(indexObject));
    }
    createKeyFromObject(indexObject) {
        return this.keysProperties.reduce((combinedKey, key) => `${combinedKey}_${indexObject[key]}`, '');
    }
}
exports.ObjectedMap = ObjectedMap;
//# sourceMappingURL=objectedMap.js.map