export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Convert to a Number
  valueOf() {
    return this._size;
  }

  // Convert to a String
  toString() {
    return this._location;
  }
}
