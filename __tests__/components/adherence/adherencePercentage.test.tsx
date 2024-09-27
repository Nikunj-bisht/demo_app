import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import React from "react";
import configureStore from "redux-mock-store";
import toJson from "enzyme-to-json";
import AdherencePercentage from "../../../src/components/adherence/adherencePercentage";

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore([]);

describe("test adherence per", () => {
  let store;
  store = mockStore({
    field: {
      name: "abc",
      value: "San",
    },
  });
  it("test category", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <AdherencePercentage />
      </Provider>
    );

    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});