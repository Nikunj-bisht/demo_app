import React from 'react';
import renderer from 'react-test-renderer';
import UserMed from '../../src/screens/UserMed';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useFocusEffect: jest.fn(),
  useNavigation: () => ({ goBack: jest.fn() }),
  useRoute: () => ({
    params: {
     id: {}
    }
  }),
}));
jest.mock('react-native', () => {
  return {
    Dimensions: {
      get: () => ({}),
    },
    StyleSheet: {
      create: () => ({}),
    }
  };
});
jest.mock("react-native-animatable", () => ({
  default: jest.fn(),
}));
jest.mock("reanimated-bottom-sheet", () => ({
  default: jest.fn(),
}));
jest.mock("react-native-gesture-handler", () => ({
  default: jest.fn(),
}));
jest.mock("react-native-reanimated", () => ({
  default: jest.fn(),
}));
jest.mock("react-native-paper", () => ({
  default: jest.fn(),
}));
jest.mock("lottie-react-native", () => ({
  default: jest.fn(),
}));
jest.mock("react-native-toast-message", () => ({
  default: jest.fn(),
}));
jest.mock("react-native-elements", () => ({
  default: jest.fn(),
}));
// jest.mock("react-native", () => ({
//   default: jest.fn(),
// }));
describe('About App', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<UserMed navigation={undefined}/>);
    expect(tree).toMatchSnapshot();
  });
});