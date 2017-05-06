'use strict';

const assert = require('chai').assert;
const tuple = require('../../src/tuple');

describe('tuple', () => {
  it('can make one from an array', () => {
    const testTuple = tuple.fromArray([1, 2, 3]);
    assert.deepEqual([1, 2, 3], testTuple.values);
  });
});
