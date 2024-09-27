import React from 'react';
import renderer from 'react-test-renderer';
import TodayPerformance from '../../../src/screens/adherence/TodayPerformance';
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useFocusEffect: jest.fn(),
  useNavigation: () => ({ goBack: jest.fn() }),
  useRoute: () => ({
    params: {
     user_id: {}
    }
  }),
}));

describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<TodayPerformance/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
