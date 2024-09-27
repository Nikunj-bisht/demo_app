// global.self={};
import React from 'react';
import renderer from 'react-test-renderer';
import Stackscreen from '../../../src/screens/stackscreens/StackScreen';
// jest.mock('react-native-fetch-blob', () => {
//   return {
//     DocumentDir: () => {},
//    // polyfill: () => {},
//   }
// });
jest.mock("rn-fetch-blob", () => ({
  default: jest.fn(),
}));
jest.mock("react-native-share", () => ({
  default: jest.fn(),
}));
jest.mock("react-native", () => ({
  default: jest.fn(),
}));
jest.mock("@react-navigation/stack", () => ({
  default: jest.fn(),
}));
jest.mock("react-native-toast-message", () => ({
  default: jest.fn(),
}));
jest.mock("react-native-progress-circle", () => ({
  default: jest.fn(),
}));
jest.mock("@react-native-picker/picker", () => ({
  default: jest.fn(),
}));
jest.mock("react-native-elements", () => ({
  default: jest.fn(),
}));
jest.mock("react-native-svg", () => ({
  default: jest.fn(),
}));
jest.mock("react-native-progress", () => ({
  default: jest.fn(),
}));
jest.mock("lottie-react-native", () => ({
  default: jest.fn(),
}));
jest.mock("react-native-paper", () => ({
  default: jest.fn(),
}));
jest.mock("react-native-animatable", () => ({
  default: jest.fn(),
}));
jest.mock("react-native-vector-icons", () => ({
  default: jest.fn(),
}));



describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Stackscreen/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
