import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, ShallowWrapper } from "enzyme";
import OnboardingScreen from '../../src/screens/OnboardingScreen';
import DrawerNavigator from '../../src/navigation/drawerNavigator';
jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
}));
// const createTestProps = (props: Object) => ({
//   navigation: {
//     navigate: jest.fn()
//   },
//   ...props
// });
// describe("rendering", () => {
//   let wrapper: ShallowWrapper;
//   let props: any;   // use type "any" to opt-out of type-checking
//   beforeEach(() => {
//     props = createTestProps({});
//     wrapper = shallow(<DrawerNavigator {...props} />);   // no compile-time error
//   });
// });
describe('OnBoarding Screen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<OnboardingScreen navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
