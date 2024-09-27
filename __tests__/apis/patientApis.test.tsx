import { patient } from '../../src/redux/apis/patient';

describe('test patient apis', () => {
  it('test fetchPatient', () => {
    const payload = 'payload';
    expect(patient.fetchPatient(payload)).toEqual({
      _U: 0,
      _V: 0,
      _W: null,
      _X: null,
    });
  });

  it('test notifyPatient', () => {
    const payload = 'payload';
    expect(patient.notifyPatient(payload)).toEqual({
      _U: 0,
      _V: 0,
      _W: null,
      _X: null,
    });
  });

  it('test patientProfile', () => {
    const payload = 'payload';
    expect(patient.patientProfile(payload)).toEqual({
      _U: 0,
      _V: 0,
      _W: null,
      _X: null,
    });
  });

  it('test patientReq', () => {
    const payload = 'payload';
    expect(patient.patientReq(payload)).toEqual({
      _U: 0,
      _V: 0,
      _W: null,
      _X: null,
    });
  });
  it('test reqAccept', () => {
    const payload = 'payload';
    expect(patient.reqAccept(payload)).toEqual({
      _U: 0,
      _V: 0,
      _W: null,
      _X: null,
    });
  });
  it('test reqDelete', () => {
    const payload = 'payload';
    expect(patient.reqDelete(payload)).toEqual({
      _U: 0,
      _V: 0,
      _W: null,
      _X: null,
    });
  });
});
