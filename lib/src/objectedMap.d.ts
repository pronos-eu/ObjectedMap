export declare class ObjectedMap<K, V> extends Map<unknown, V> {
    private readonly keysProperties;
    constructor(keysProperties: string[]);
    get(indexObject: K): V;
    set(indexObject: V): this;
    set(indexObject: K, dataToSet: V): this;
    delete(indexObject: K): boolean;
    has(indexObject: K): boolean;
    createKeyFromObject(indexObject: K | V): string;
}
