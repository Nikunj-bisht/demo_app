import React from 'react';
import renderer from 'react-test-renderer';
import CaretakerReq from '../../../src/screens/caretaker/CaretakerReq';

describe('Caretaker Request', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CaretakerReq />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
