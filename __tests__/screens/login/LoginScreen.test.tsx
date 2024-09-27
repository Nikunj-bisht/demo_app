import React from 'react';
import renderer from 'react-test-renderer';
import Loginscreen from '../../../src/screens/login/LoginScreen';
jest.mock("@react-native-firebase/messaging", () => ({
  default: jest.fn(),
}));
// jest.mock("@react-native-google-signin/google-signin", () => ({
 // default: jest.fn(),
//   GoogleSigninButton: {
//     size : () => ({}),
//   }
  
jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
  GoogleSigninButton: {
    Size : {
      Wide : () => ({}),
    },
    Color : {
      Dark : () => ({}),
    }
  }
}));
jest.mock("react-native", () => ({
  default: jest.fn(),
  StyleSheet: {
    create: () => ({}),
  }
}));
jest.mock("react-native-svg", () => ({
  default: jest.fn(),
}));
jest.mock("react-native-progress", () => ({
  default: jest.fn(),
}));
jest.mock("react-native-toast-message", () => ({
  default: jest.fn(),
}));


describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Loginscreen navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
