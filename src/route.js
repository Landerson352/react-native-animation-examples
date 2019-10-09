import { each } from 'lodash';

const ROUTE = {
  ANIMATABLE: {
    title: 'Animatable',
    github: 'oblador/react-native-animatable',
    npm: 'react-native-animatable',
    description: 'Declarative transitions and animations.'
      + ' Supports duration, easing, key-framing. Comes with presets.',
    strengths: 'One-off animation effects such as bounce or pulse are dead simple.',
    weaknesses: 'No spring physics, so interrupted transitions look bad.'
  },
  FIBER: {
    title: 'Fiber',
    infoUrl: 'https://wcandillon.github.io/react-native-fiber/',
    description: 'A paid React Native starter focused on animations inspired by Framer.',
    weaknesses: 'A project starter, not technically an animation library.',
  },
  FLARE: {
    title: 'Flare',
    infoUrl: 'https://www.2dimensions.com/about-flare',
    description: 'An animation tool that supports vector or raster, skeletons and mesh deformations,'
      + ' inverse kinematics and more.',
    weaknesses: 'Not yet integrated with React Native.',
  },
  FLUID_TRANSITIONS: {
    title: 'FluidTransitions',
    github: 'fram-x/FluidTransitions',
    npm: 'react-navigation-fluid-transitions',
    description: 'FluidTransitions animates elements between react-navigation screens.'
      + ' Supports shared elements, appear/disappear transitions, staggering, and custom transitions.',
    strengths: 'Simple implementation. No linking required.',
    weaknesses: 'Only supports react-navigation v3 and below.'
      + ' Uses its own "fluid navigator" instead of StackNavigator.',
  },
  FLUID_TRANSITIONS_MAIN: {},
  FLUID_TRANSITIONS_EXAMPLE_1: {
    title: 'Example 1',
  },
  FLUID_TRANSITIONS_EXAMPLE_2: {
    title: 'Example 2',
  },
  HOME: {
    title: 'Animation Examples',
  },
  LOTTIE: {
    title: 'Lottie',
    infoUrl: 'https://airbnb.design/lottie/',
    github: 'react-native-community/lottie-react-native',
    npm: 'lottie-react-native',
    description: 'Lottie parses Adobe After Effects animations exported with Bodymovin, and renders them natively.'
      + ' Animation speed and progress can be controlled programmatically.',
    strengths: 'The best way to get complex, choreographed animations into your app.'
      + ' Supported by Expo.',
    weaknesses: 'Depends entirely on Adobe After Effects.'
      + ' Without Expo, it requires linking.',
  },
  POSE: {
    title: 'Pose',
    infoUrl: 'https://popmotion.io/pose/',
    github: 'Popmotion/popmotion',
    npm: 'react-native-pose',
    description: 'Pose is an animation system which automatically transitions components between states,'
      + ' or when adding or removing nodes.'
      + ' Supports tween, keyframe, or spring based transitions.'
      + ' Supports groups, animating text characters, dragging interactivity, & interpolation.',
    strengths: 'Enables simple toggling between named "poses".'
      + ' Spring physics ensure smooth hand-offs.',
    weaknesses: 'Animating outside of the "pose" paradigm is limited.'
      + ' Constantly throws useNativeDriver warnings.',
    note: 'From the makers of Framer. Pose has been succeeded by Framer Motion,'
      + ' but that does not support React Native yet.'
      + ' If it does in the future, expect Pose to be deprecated.',
  },
  REACT_MOTION: {
    title: 'React Motion',
    github: 'chenglou/react-motion',
    npm: 'react-motion',
    description: 'React Motion provides Primitives for driving animations with spring-based physics,'
      + ' as opposed to defined curves and durations.'
      + ' Support staggering & chaining animations, as well as mounting/unmounting transitions.',
    weaknesses: 'Provides render-props only, not hooks',
  },
  REACT_SPRING: {
    title: 'React Spring',
    infoUrl: 'https://www.react-spring.io/',
    github: 'react-spring/react-spring',
    npm: 'react-spring',
    description: 'React Spring provides primitives for driving animations with spring-based physics,'
      + ' as opposed to defined curves and durations.'
      + ' By setting mass, tension and friction, you can add bounce or dampen the motion.'
      + ' Supports staggering & chaining animations, as well as enter/exit animations.',
    strengths: 'Motion imitates real life realistically and hand-offs are smooth.'
      + ' Provides both hooks & render-props.',
    weaknesses: 'Cannot specify duration or curve-based easing.',
    note: '"Inspired in part by React Motion, but more concise and expressive."',
  },
  REANIMATED: {
    title: 'Reanimated',
    github: 'kmagiera/react-native-reanimated',
    npm: 'react-native-reanimated',
    description: 'Reanimated is "React Native\'s Animated library reimplemented",'
      + ' for better support of gesture-based interactions.',
    strengths: 'Provides logical "blocks" for building complex gesture-based interactions.',
    weaknesses: 'Very complex for simple effects that are not driven by gestures.',
  },
  SHARED_ELEMENT: {
    title: 'Shared Element',
    github: 'IjzerenHein/react-native-shared-element',
    npm: 'react-native-shared-element',
    description: 'Shared Element provides primitives for transitioning elements between screens.',
    strengths: 'Has bindings for React Navigation\'s StackNavigator.'
      + ' Support configuring transitions on each element.'
      + ' Has Expo (SDK 35) support.',
    weaknesses: 'Requires use of StackNavigator; may force you to structure your app in a certain way.'
      + ' No support for appear/disappear transitions.'
      + ' Without Expo 35, requires linking.',
    note: ' Road-map to include SwitchNavigator support and appear/disappear transitions.',
  },
  SHARED_ELEMENT_EXAMPLE_1: {
    title: 'Example 1'
  },
};

each(ROUTE, (o, key) => o.key = key);

export default ROUTE;
