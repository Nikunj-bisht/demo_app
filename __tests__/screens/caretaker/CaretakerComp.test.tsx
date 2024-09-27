import React from 'react';
import renderer from 'react-test-renderer';
import enableHooks from "jest-react-hooks-shallow";
import Caretakercomp from '../../../src/screens/caretaker/CaretakerComp';
jest.mock('react-native', () => {
  return {
    StyleSheet: {
      create: () => ({}),
    },
  };
});
enableHooks(jest);
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock("react-native-vector-icons", () => ({
  default: jest.fn(),
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
      .create(<Caretakercomp navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
