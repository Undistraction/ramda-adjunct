import _isString from 'ramda/src/internal/_isString';

/**
 * Checks if input value is `String`.
 *
 * @func isString
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.4.0|v0.4.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotString|isNotString}
 * @example
 *
 * RA.isString('abc'); //=> true
 * RA.isString(1); //=> false
 */
const isString = _isString;

export default isString;
