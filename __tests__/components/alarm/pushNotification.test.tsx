import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Provider} from 'react-redux';
import React from 'react';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import {Pushnotificationforeground} from '../../../src/components/alarm/pushNotificationConfig';

Enzyme.configure({adapter: new Adapter()});
const mockStore = configureStore([]);
jest.mock('react-native-push-notification', () => ({
  default: jest.fn(),
}));
jest.mock('react-native-sound', () => ({
  default: jest.fn(),
}));
describe('test collector category', () => {
  let store;
  store = mockStore({
    field: {
      name: 'hello',
      value: 'San',
    },
  });
  it('test category', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Pushnotificationforeground />
      </Provider>,
    );

    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
