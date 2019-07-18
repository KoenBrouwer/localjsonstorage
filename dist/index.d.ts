export declare class LocalJsonStorage extends Storage {
    /**
     * value = storage[key]
     */
    getItem(key: string): any | null;
    /**
     * storage[key] = value
     */
    setItem(data: any, key: string): void;
    /**
     * Returns the number of key/value pairs currently present in the list associated with the
     * object.
     */
    readonly length: number;
    /**
     * Empties the list associated with the object of all key/value pairs, if there are any.
     */
    clear(): void;
    /**
     * Returns the name of the nth key in the list, or null if n is greater
     * than or equal to the number of key/value pairs in the object.
     */
    key(index: number): string | null;
    /**
     * delete storage[key]
     */
    removeItem(key: string): void;
}
declare const _default: {
    LocalJsonStorage: typeof LocalJsonStorage;
};
export default _default;
