import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import React from "react";
import configureStore from "redux-mock-store";
import toJson from "enzyme-to-json";
import AdherencePercentage from "../../../src/components/adherence/adherencePercentage";
import { time_data } from "../../../src/components/alarm/timeData";
import { showToast } from "../../../src/components/atoms/toast";

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore([]);

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
        <showToast  />
      </Provider>
    );

    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});