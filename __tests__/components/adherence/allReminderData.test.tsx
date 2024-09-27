import Enzyme, { shallow } from "enzyme";

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import CustomInput from "../CustomInput";
import { Provider } from "react-redux";
import React from "react";
import configureStore from "redux-mock-store";
import toJson from "enzyme-to-json";
import allreminderdata from "../../../src/components/adherence/allReminderData";

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore([]);

describe("test all rem data", () => {
  let store;
  store = mockStore({
    field: {
      name: "abc",
      value: "nas",
    },
  });
  it("test category", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <allreminderdata />
      </Provider>
    );

    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});