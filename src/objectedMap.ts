export class ObjectedMap<K, V> extends Map<unknown, V> {
    private readonly keysProperties: string[]

    constructor(keysProperties: string[]) {
        super()
        this.keysProperties = keysProperties
    }

    public get(indexObject: K): V {
        return super.get(this.createKeyFromObject(indexObject))
    }

    public set(indexObject: V): this

    public set(indexObject: K, dataToSet: V): this
   
    public set(indexObject: V | K, dataToSet = indexObject as V): this {
        return super.set(this.createKeyFromObject(indexObject), dataToSet)
    }
 
    public delete(indexObject: K): boolean {
        return super.delete(this.createKeyFromObject(indexObject))
    }

    public has(indexObject: K): boolean {
        return super.has(this.createKeyFromObject(indexObject))
    }
  
    public createKeyFromObject(indexObject: K | V): string {
        return this.keysProperties.reduce((combinedKey, key) => `${combinedKey}_${indexObject[key]}`, '')
    }
}
