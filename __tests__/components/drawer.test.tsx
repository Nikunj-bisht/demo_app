import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import React from "react";
import configureStore from "redux-mock-store";
import toJson from "enzyme-to-json";
import DrawerNavigator from "../../src/navigation/drawerNavigator";

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore([]);
jest.mock("@react-native-google-signin/google-signin", () => ({
    default: jest.fn(),
  }));
describe("test collector category", () => {
  let store;
  store = mockStore({
    field: {
      name: "hello",
      value: "San",
    },
  });
  it("test category", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <DrawerNavigator  />
      </Provider>
    );

    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});