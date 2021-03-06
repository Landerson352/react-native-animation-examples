import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import createRouteConfig from './utils/createRouteConfig';
import ROUTE from './route';
import AnimatableScreen from './screens/AnimatableScreen';
import AnimatedScreen from './screens/AnimatedScreen';
import AnimatedSpriteScreen from './screens/AnimatedSpriteScreen';
import FadeInImageScreen from './screens/FadeInImageScreen';
import HeroImageScreen from './screens/HeroImageScreen';
import FluidTransitionsScreen from './screens/FluidTransitionsScreen';
import MenuScreen from './screens/MenuScreen';
import LayoutAnimationScreen from './screens/LayoutAnimationScreen';
import LottieScreen from './screens/LottieScreen';
import ParallaxImageScreen from './screens/ParallaxImageScreen';
import PoseScreen from './screens/PoseScreen';
import SharedElementScreen, { SharedElementExample1Screen } from './screens/SharedElementScreen';
import SpringScreen from './screens/SpringScreen';
import SvgAnimationsScreen from './screens/SvgAnimationsScreen';

// We use createSharedElementStackNavigator here because SharedElement works best with a single unified navigator.
const AppNavigator = createSharedElementStackNavigator(createStackNavigator, {
  ...createRouteConfig(ROUTE.HOME, MenuScreen),

  ...createRouteConfig(ROUTE.APIS, MenuScreen),
  ...createRouteConfig(ROUTE.LIBRARIES, MenuScreen),
  ...createRouteConfig(ROUTE.DESIGN_PATTERNS, MenuScreen),

  ...createRouteConfig(ROUTE.ANIMATABLE, AnimatableScreen),
  ...createRouteConfig(ROUTE.ANIMATED, AnimatedScreen),
  ...createRouteConfig(ROUTE.ANIMATED_SPRITE, AnimatedSpriteScreen),
  ...createRouteConfig(ROUTE.FLUID_TRANSITIONS, FluidTransitionsScreen),
  ...createRouteConfig(ROUTE.LAYOUT_ANIMATION, LayoutAnimationScreen),
  ...createRouteConfig(ROUTE.LOTTIE, LottieScreen),
  ...createRouteConfig(ROUTE.POSE, PoseScreen),
  ...createRouteConfig(ROUTE.REACT_SPRING, SpringScreen),
  ...createRouteConfig(ROUTE.SHARED_ELEMENT, SharedElementScreen),
  ...createRouteConfig(ROUTE.SHARED_ELEMENT_EXAMPLE_1, SharedElementExample1Screen),
  ...createRouteConfig(ROUTE.SVG_ANIMATIONS, SvgAnimationsScreen),

  ...createRouteConfig(ROUTE.FADE_IN_IMAGE, FadeInImageScreen),
  ...createRouteConfig(ROUTE.HERO_IMAGE, HeroImageScreen),
  ...createRouteConfig(ROUTE.PARALLAX_IMAGE, ParallaxImageScreen),
});

export default createAppContainer(AppNavigator);
