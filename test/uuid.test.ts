import {uuid} from '../src';

describe('#uuid', () => {
  test(`uuid width default parameter`, () => {
    expect(uuid()).toHaveLength(18);
  });
  test(`uuid of length 10`, () => {
    expect(uuid(10)).toHaveLength(10);
  });
});
