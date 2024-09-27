import React from 'react';
import renderer from 'react-test-renderer';
import Searchcaretaker from '../../../src/screens/caretaker/SearchCaretaker';
jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
}));
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Searchcaretaker navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
