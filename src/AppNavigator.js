import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import createRouteConfig from './utils/createRouteConfig';
import ROUTE from './route';
import AnimatableScreen from './screens/AnimatableScreen';
import FiberScreen from './screens/FiberScreen';
import FlareScreen from './screens/FlareScreen';
import FluidTransitionsScreen from './screens/FluidTransitionsScreen';
import HomeScreen from './screens/HomeScreen';
import LottieScreen from './screens/LottieScreen';
import MotionScreen from './screens/MotionScreen';
import PoseScreen from './screens/PoseScreen';
import ReanimatedScreen from './screens/ReanimatedScreen';
import SharedElementScreen from './screens/SharedElementScreen';
import SpringScreen from './screens/SpringScreen';

const AppNavigator = createStackNavigator({
  ...createRouteConfig(ROUTE.HOME, HomeScreen),

  ...createRouteConfig(ROUTE.ANIMATABLE, AnimatableScreen),
  ...createRouteConfig(ROUTE.FIBER, FiberScreen),
  ...createRouteConfig(ROUTE.FLARE, FlareScreen),
  ...createRouteConfig(ROUTE.FLUID_TRANSITIONS, FluidTransitionsScreen),
  ...createRouteConfig(ROUTE.LOTTIE, LottieScreen),
  ...createRouteConfig(ROUTE.MOTION, MotionScreen),
  ...createRouteConfig(ROUTE.POSE, PoseScreen),
  ...createRouteConfig(ROUTE.REANIMATED, ReanimatedScreen),
  ...createRouteConfig(ROUTE.SHARED_ELEMENT, SharedElementScreen),
  ...createRouteConfig(ROUTE.SPRING, SpringScreen),
});

export default createAppContainer(AppNavigator);
