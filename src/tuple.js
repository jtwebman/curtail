'use strict';

function equals(tuple, check) {
  if (tuple.values.length !== check.values.length) return false;
  const len = tuple.values.length;
  for(let i = 0; i < len; i++) {
    if (tuple.values[i] !== check.values[i]) return false;
  }
  return true;
}

function fromArray(values) {
  return {values};
}

function map(tuple, cb) {
  return fromArray(tuple.map(cb));
}

function set(...values) {
  return fromArray(values);
}

function toArray(tuple) {
  return tuple.values;
}

function toString(tuple) {
  return `Tuple {${tuple.values.join(', ')}}`;
}

function unpack(tuple, unpacker) {
  return unpacker(...tuple);
}

module.exports = {
  equals,
  fromArray,
  map,
  set,
  toArray,
  toString,
  unpack
};
