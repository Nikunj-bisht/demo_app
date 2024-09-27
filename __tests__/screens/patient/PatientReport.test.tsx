import React from 'react';
import renderer from 'react-test-renderer';
import PatientReport from '../../../src/screens/patient/PatientReport';
jest.mock("rn-fetch-blob", () => ({
  default: jest.fn(),
}));
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({ goBack: jest.fn() }),
  useRoute: () => ({
    params: {
     medId : {},
     medName : {},
     mTimes : {},
     medDays : {},
     mstartDate : {},
     mendDate : {},
     mcc : {},
    }
  }),
}));
jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({ goBack: jest.fn() }),
    useRoute: jest.fn(),
  };
});
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<PatientReport route={undefined}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});