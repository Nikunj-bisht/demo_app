import React from 'react';
import Enzyme, { shallow } from "enzyme";
import { render, cleanup, fireEvent } from '@testing-library/react-native';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import renderer from 'react-test-renderer';
import Addmedicine from '../../src/screens/AddMedicine';
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useFocusEffect: jest.fn(),
}));
Enzyme.configure({ adapter: new Adapter() });
describe('Click send image', () => {
  afterEach(cleanup);
  it('renders correctly', () => {
    const tree = renderer
      .create(<Addmedicine navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  // it('navigates on icon press', () => {
  //   const navigate = jest.fn();
  //   const component = render(<Addmedicine navigation={{ navigate }} />);
  //   const touchableEl = component.queryByTestId('addRem');
  //   fireEvent.press(touchableEl);
  //   expect(navigate).toHaveBeenCalled();
  // });
  it("button click ", () => {
    const component = shallow(
      <Addmedicine navigation={undefined}/>
    );
    const container = component.find("TouchableOpacity#sent")
    container.simulate("press");
    expect(component).toMatchSnapshot();
    component.unmount();
  });
});