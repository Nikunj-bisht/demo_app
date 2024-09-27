import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../../../src/screens/login/GoogleOauth';
jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
}));
jest.mock("react-native", () => ({
  default: jest.fn(),
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
      .create(<Login navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
