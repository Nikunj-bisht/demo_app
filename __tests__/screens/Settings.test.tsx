import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import Settings from '../../src/screens/Settings';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({adapter: new Adapter()});

describe('Settings Screen', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Settings navigation={undefined} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it.only('test share button', () => {
   const mockFn = jest.fn();
  const wrapper = shallow(<Settings shareFnc={mockFn} />);
  wrapper.find("#share").simulate("press");
  });
  it.only('test about button', () => {
    const mockFn = jest.fn();
   const wrapper = shallow(<Settings aboutFnc={mockFn} />);
   wrapper.find("#about").simulate("press");
   });
   it.only('test open setting button', () => {
    const mockFn = jest.fn();
   const wrapper = shallow(<Settings openSetFnc={mockFn} />);
   wrapper.find("#openSetting").simulate("press");
   });
});