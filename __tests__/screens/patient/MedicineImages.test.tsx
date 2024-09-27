import React from 'react';
import renderer from 'react-test-renderer';
import MedicineImages from '../../../src/screens/patient/MedicineImages';
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useFocusEffect: jest.fn(),
  useNavigation: () => ({ goBack: jest.fn() }),
  useRoute: () => ({
    params: {
     medId: {}
    }
  }),
}));
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<MedicineImages/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
