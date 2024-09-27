import {careTaker} from '../../src/redux/apis/careTaker';

describe('test caretaker apis', () => {
  it('test caretaker', () => {
    const payload = 'payload';
    expect(careTaker.caretaker(payload)).toEqual({
      _U: 0,
      _V: 0,
      _W: null,
      _X: null,
    });
  });

  it('test emailcaretaker', () => {
    const payload = 'payload';
    expect(careTaker.emailcaretaker(payload)).toEqual({
      _U: 0,
      _V: 0,
      _W: null,
      _X: null,
    });
  });

  it('test reqcaretaker', () => {
    const payload = 'payload';
    expect(careTaker.reqCaretaker(payload)).toEqual({
      _U: 0,
      _V: 0,
      _W: null,
      _X: null,
    });
  });

  it('test sendimage', () => {
    const payload = 'payload';
    expect(careTaker.sendImage(payload)).toEqual({
      _U: 0,
      _V: 0,
      _W: null,
      _X: null,
    });
  });
});
