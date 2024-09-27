import React from 'react';
import renderer from 'react-test-renderer';
import Profile from '../../../src/screens/profile/Profile';
jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
}));
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useFocusEffect: jest.fn(),
}));
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Profile navigation={undefined}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
