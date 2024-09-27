import { profile } from '../../src/redux/apis/profile';

describe('test profile apis', () => {
  it('test saveprofile', () => {
    const payload = 'payload';
    expect(profile.saveProfile(payload)).toEqual({
      _U: 0,
      _V: 0,
      _W: null,
      _X: null,
    });
  });
});
