import chai from 'chai';

import * as RA from '../src/index';
import eq from './shared/eq';

describe('inRange', function() {
  it('tests whether an integer falls within supplied range', function() {
    const f = RA.inRange(5, 10);
    eq(f(5), true);
    eq(f(9), true);
    eq(f(10), false);
    eq(f(4), false);
    eq(f(11), false);
  });

  it('tests whether a float falls within supplied range', function() {
    const f = RA.inRange(5.5, 10.5);
    eq(f(5.5), true);
    eq(f(9.5), true);
    eq(f(10.5), false);
    eq(f(4.5), false);
    eq(f(11.5), false);
  });

  it('should support negative values', function() {
    const f = RA.inRange(-10, -5);
    eq(f(-6), true);
    eq(f(-5), false);
    eq(f(-10), true);
    eq(f(-4), false);
    eq(f(-11), false);
  });

  it('should support `Number.POSITIVE_INFINITY`', function() {
    const f = RA.inRange(0, Number.POSITIVE_INFINITY);
    eq(f(Number.MAX_VALUE), true);
  });

  it('should support `Number.NEGATIVE_INFINITY`', function() {
    const f = RA.inRange(Number.NEGATIVE_INFINITY, 0);
    eq(f(Number.NEGATIVE_INFINITY), true);
  });

  it('should support `Number.MIN_VALUE`', function() {
    const f = RA.inRange(Number.MIN_VALUE, 1);
    eq(f(Number.MIN_VALUE), true);
  });

  it('should support `Number.MAX_VALUE`', function() {
    const f = RA.inRange(0, Number.MAX_VALUE);
    eq(f(Number.MAX_VALUE), false);
  });

  it('should throw error if `low` value is greater than `high` value', function() {
    const f = RA.inRange(10, 5);
    chai.assert.throws(() => f(5), Error);
  });

  it('should throw error if `low` value is same as `high` value', function() {
    const f = RA.inRange(10, 10);
    chai.assert.throws(() => f(5), Error);
  });
});
