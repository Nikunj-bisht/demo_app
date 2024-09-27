import React from 'react';
import renderer from 'react-test-renderer';
import Patientrequest from '../../../src/screens/patient/PatientRequest';
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useFocusEffect: jest.fn(),
}));
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Patientrequest/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
