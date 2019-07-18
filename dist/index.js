"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LocalJsonStorage = /** @class */ (function (_super) {
    __extends(LocalJsonStorage, _super);
    function LocalJsonStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * value = storage[key]
     */
    LocalJsonStorage.prototype.getItem = function (key) {
        var storedItem = localStorage.getItem(key);
        if (storedItem) {
            return JSON.parse(storedItem);
        }
        return null;
    };
    /**
     * storage[key] = value
     */
    LocalJsonStorage.prototype.setItem = function (data, key) {
        if (typeof data !== "string") {
            data = this.prepareData(data);
        }
        localStorage.setItem(key, data);
    };
    Object.defineProperty(LocalJsonStorage.prototype, "length", {
        /**
         * Returns the number of key/value pairs currently present in the list associated with the
         * object.
         */
        get: function () {
            return localStorage.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Empties the list associated with the object of all key/value pairs, if there are any.
     */
    LocalJsonStorage.prototype.clear = function () {
        return localStorage.clear();
    };
    /**
     * Returns the name of the nth key in the list, or null if n is greater
     * than or equal to the number of key/value pairs in the object.
     */
    LocalJsonStorage.prototype.key = function (index) {
        return localStorage.key(index);
    };
    /**
     * delete storage[key]
     */
    LocalJsonStorage.prototype.removeItem = function (key) {
        return localStorage.removeItem(key);
    };
    /* ---------- */
    LocalJsonStorage.prototype.prepareData = function (data) {
        return JSON.stringify(data);
    };
    return LocalJsonStorage;
}(Storage));
exports.default = LocalJsonStorage;
