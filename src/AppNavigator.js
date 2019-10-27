import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import createRouteConfig from './utils/createRouteConfig';
import ROUTE from './route';
import AnimatableScreen from './screens/AnimatableScreen';
import AnimatedSpriteScreen from './screens/AnimatedSpriteScreen';
import ApisAndLibrariesScreen from './screens/ApisAndLibrariesScreen';
import DesignPatternsScreen from './screens/DesignPatternsScreen';
import FadeInImageScreen from './screens/FadeInImageScreen';
import HeroImageScreen from './screens/HeroImageScreen';
import FluidTransitionsScreen from './screens/FluidTransitionsScreen';
import HomeScreen from './screens/HomeScreen';
import LayoutAnimationScreen from './screens/LayoutAnimationScreen';
import LottieScreen from './screens/LottieScreen';
import PoseScreen from './screens/PoseScreen';
import ReanimatedScreen from './screens/ReanimatedScreen';
import SharedElementScreen, { SharedElementExample1Screen } from './screens/SharedElementScreen';
import SpringScreen from './screens/SpringScreen';

// We use createSharedElementStackNavigator here because SharedElement works best with a single unified navigator.
const AppNavigator = createSharedElementStackNavigator(createStackNavigator, {
  ...createRouteConfig(ROUTE.HOME, HomeScreen),

  ...createRouteConfig(ROUTE.APIS_AND_LIBRARIES, ApisAndLibrariesScreen),
  ...createRouteConfig(ROUTE.DESIGN_PATTERNS, DesignPatternsScreen),

  ...createRouteConfig(ROUTE.ANIMATABLE, AnimatableScreen),
  ...createRouteConfig(ROUTE.ANIMATED_SPRITE, AnimatedSpriteScreen),
  ...createRouteConfig(ROUTE.FLUID_TRANSITIONS, FluidTransitionsScreen),
  ...createRouteConfig(ROUTE.LAYOUT_ANIMATION, LayoutAnimationScreen),
  ...createRouteConfig(ROUTE.LOTTIE, LottieScreen),
  ...createRouteConfig(ROUTE.POSE, PoseScreen),
  ...createRouteConfig(ROUTE.REACT_SPRING, SpringScreen),
  ...createRouteConfig(ROUTE.REANIMATED, ReanimatedScreen),
  ...createRouteConfig(ROUTE.SHARED_ELEMENT, SharedElementScreen),
  ...createRouteConfig(ROUTE.SHARED_ELEMENT_EXAMPLE_1, SharedElementExample1Screen),

  ...createRouteConfig(ROUTE.FADE_IN_IMAGE, FadeInImageScreen),
  ...createRouteConfig(ROUTE.HERO_IMAGE, HeroImageScreen),
});

export default createAppContainer(AppNavigator);
