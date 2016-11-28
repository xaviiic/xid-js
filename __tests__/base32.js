'use strict';

const base32 = require('../lib/base32');

describe('base32 encoding utilities tests', () => {
  test('encode should return a Buffer', () => {
    const result = base32.encode('123456');
    expect(result).toBeInstanceOf(Buffer);
  });

  test('encode an empty input should return an empty output', () => {
    const result = base32.encode('');
    expect(result.length).toBe(0);
  });

  test('encoded results should be same for same input in different types', () => {
    const buffInResult = base32.encode(Buffer.from('asdfgh'));
    const strInResult = base32.encode('asdfgh');
    const arrInResult = base32.encode(['a', 's', 'd', 'f', 'g', 'h'].map(c => c.charCodeAt(0)));

    expect(buffInResult).toEqual(strInResult);
    expect(buffInResult).toEqual(arrInResult);
  });

  test('encoded results size should be predictable', () => {
    expect(base32.encode('12345').length).toBe(8);
    expect(base32.encode('123456').length).toBe(11);
    expect(base32.encode('1234567').length).toBe(13);
    expect(base32.encode('12345678').length).toBe(14);
    expect(base32.encode('123456789').length).toBe(16);
  });

  test('encodeString should return a String', () => {
    const result = base32.encodeString('123456');
    expect(typeof result).toBe('string');
  });
});
