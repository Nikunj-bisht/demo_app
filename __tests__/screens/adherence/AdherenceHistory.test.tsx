import React from 'react';
import {create} from 'react-test-renderer';
import AdherenceHistory from '../../../src/screens/adherence/AdherenceHistory';
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useFocusEffect: jest.fn(),
}));
jest.mock("rn-fetch-blob", () => ({
  default: jest.fn(),
}));
describe('Settins Screen', () => {
  it('renders correctly', () => {
    const tree = create(<AdherenceHistory />);
    expect(tree).toMatchSnapshot();
  });
  
});
