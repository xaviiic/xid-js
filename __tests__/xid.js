'use strict';

const xid = require('../lib/xid');

describe('xid generator tests', () => {
  test('generated id is a 20-characters string', () => {
    const id = xid.next();
    expect(id.length).toBe(20);
    expect(typeof id).toBe('string');
  });

  test('ids can be sort in generating order', () => {
    const id1 = xid.next();
    const id2 = xid.next();
    const id3 = xid.next();
    expect(id1.localeCompare(id2)).toBeLessThan(0);
    expect(id1.localeCompare(id3)).toBeLessThan(0);
    expect(id3.localeCompare(id2)).toBeGreaterThan(0);
    expect([id3, id2, id1].sort()).toEqual([id1, id2, id3]);
  });
});
