import adherence from '../../src/redux/apis/adherence';
describe('test adherence apis', () => {
  it('test medimages', () => {
    const payload = 'payload';
    expect(adherence.medimages(payload)).toEqual({
      _U: 0,
      _V: 0,
      _W: null,
      _X: null,
    });
  });
 

  it('test downloadpdf', () => {
    const payload = 'payload';
    expect(adherence.downloadPdf(payload)).toEqual({
      _U: 0,
      _V: 0,
      _W: null,
      _X: null,
    });
  });

  it('test getmedhistory', () => {
    const payload = 'payload';
    expect(adherence.getmedhistory(payload)).toEqual({
      _U: 0,
      _V: 0,
      _W: null,
      _X: null,
    });
  });

  it('test syncmeds', () => {
    const payload = 'payload';
    expect(adherence.syncmeds(payload)).toEqual({
      _U: 0,
      _V: 0,
      _W: null,
      _X: null,
    });
  });
  it('test syncmedhistory', () => {
    const payload = 'payload';
    expect(adherence.syncMedicineHistory(payload)).toEqual({
      _U: 0,
      _V: 0,
      _W: null,
      _X: null,
    });
  });
});
