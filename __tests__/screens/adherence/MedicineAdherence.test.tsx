import React from 'react';
import renderer from 'react-test-renderer';
import Medicineadherence from '../../../src/screens/adherence/MedicineAdherence';
jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
}));
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Medicineadherence navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
