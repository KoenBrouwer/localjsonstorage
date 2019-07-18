class LocalJsonStorage extends Storage {

    /**
     * value = storage[key]
     */
    getItem(key: string): any | null {
        const storedItem = localStorage.getItem(key);
        if (storedItem) {
            return JSON.parse(storedItem);
        }
        return null;
    }

    /**
     * storage[key] = value
     */
    setItem(data: any, key: string): void {
        if (typeof data !== "string") {
            data = JSON.stringify(data);
        }
        localStorage.setItem(key, data);
    }

    /**
     * Returns the number of key/value pairs currently present in the list associated with the
     * object.
     */
    get length(): number{
        return localStorage.length;
    }

    /**
     * Empties the list associated with the object of all key/value pairs, if there are any.
     */
    clear(){
        return localStorage.clear();
    }

    /**
     * Returns the name of the nth key in the list, or null if n is greater
     * than or equal to the number of key/value pairs in the object.
     */
    key(index: number): string | null {
        return localStorage.key(index);
    }

    /**
     * delete storage[key]
     */
    removeItem(key: string): void {
        return localStorage.removeItem(key);
    }

}

export default LocalJsonStorage;
