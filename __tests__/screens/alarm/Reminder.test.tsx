import React from 'react';
import renderer from 'react-test-renderer';
import Reminder from '../../../src/screens/alarm/Reminder';

jest.mock("react-native-push-notification", () => ({
  default: jest.fn(),
}));
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useFocusEffect: jest.fn(),
  useNavigation: () => ({ goBack: jest.fn() }),
  useRoute: () => ({
    params: {
     id: {}
    }
  }),
}));
// jest.mock("react-native-elements", () => ({
//   default: jest.fn(),
// }));
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Reminder navigation={undefined}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
