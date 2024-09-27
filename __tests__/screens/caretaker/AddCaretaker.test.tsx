import React from 'react';
import renderer from 'react-test-renderer';
import enableHooks from "jest-react-hooks-shallow";
import Addcaretaker from '../../../src/screens/caretaker/AddCaretaker';
jest.mock('react-native', () => {
  return {
    StyleSheet: {
      create: () => ({}),
    },
    // NativeMdules: {
    //   RNVectorIconsManager: () => ({}),
    // }
  };
});

jest.mock('react-native-vector-icons', () => {
  return {
    RNVectorIconsManager:jest.fn(),
    createIconSetFromIcoMoon:jest.fn()
  }});

enableHooks(jest);
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useFocusEffect: jest.fn(),
}));
jest.mock("react-native-elements", () => ({
  default: jest.fn(),
}));
jest.mock("react-native-paper", () => ({
  default: jest.fn(),
}));
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Addcaretaker navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
