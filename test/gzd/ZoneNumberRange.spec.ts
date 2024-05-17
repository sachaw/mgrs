import { expect } from 'chai';
import { ZoneNumberRange } from '../../lib/gzd/ZoneNumberRange.js';
import { MGRSConstants } from '../../lib/MGRSConstants.js';

describe('ZoneNumberRange Tests', function () {
  it('test iterator', function () {
    const range = new ZoneNumberRange();

    let count = 0;
    for (const zoneNumber of range) {
      count++;
    }
    expect(count).to.equal(MGRSConstants.MAX_ZONE_NUMBER);
  });
});
