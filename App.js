import { YellowBox } from 'react-native';

import AppNavigator from './src/AppNavigator';

YellowBox.ignoreWarnings([
  'LottieAnimationView.getConstants', // Lottie has a recurring warning with Expo that doesn't impact performance.
  'useNativeDriver', // Pose noisily surfaces warnings about animations that can't use the nativeDriver.
]);

export default AppNavigator;
