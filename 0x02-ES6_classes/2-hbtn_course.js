export default class HolbertonCourse {
  constructor(name, length, students) {
    this._checkType(name, 'string', 'Name');
    this._checkType(length, 'number', 'Length');
    this._checkType(students, 'array', 'Students');
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Setters
  set name(name) {
    this._checkType(name, 'string', 'Name');
    this._name = name;
  }

  set length(length) {
    this._checkType(length, 'number', 'Length');
    this._length = length;
  }

  set students(students) {
    this._checkType(students, 'array', 'Students');
    this._students = students;
  }

  // Method to check types
  static _checkType(value, type, attributeName) {
    if (type === 'array') {
      if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
        throw new TypeError(`${attributeName} must be an array of strings`);
      }
      // eslint-disable-next-line valid-typeof
    } else if (typeof value !== type) {
      throw new TypeError(`${attributeName} must be a ${type}`);
    }
  }
}
