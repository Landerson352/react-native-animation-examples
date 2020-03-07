import { each } from 'lodash';

const ROUTE = {
  ANIMATABLE: {
    title: 'Animatable',
    github: 'oblador/react-native-animatable',
    npm: 'react-native-animatable',
    description: 'Animatable provides declarative transitions and animations.'
      + ' Supports duration, easing, key-framing. Comes with presets.',
    strengths: 'One-off animation effects such as bounce or pulse are dead simple.',
    weaknesses: 'No spring physics, so interrupted transitions look bad.'
  },
  ANIMATED: {
    title: 'Animated',
    infoUrl: 'https://reactnative.dev/docs/animated',
    description: 'React Native\'s Animated API focuses on declarative relationships between inputs and outputs, ' +
      'with configurable transforms in between.',
    strengths: 'Provides chain-able logic nodes for building complex gesture-based interactions.',
    weaknesses: 'Very complex for simple effects that are not driven by gestures.',
    note: 'This method is used extensively in William Candillon\'s "Can it Be Done in React Native" videos, ' +
      'along with his Reanimated and Redash utility libraries for even more functionality.',
  },
  ANIMATED_SPRITE: {
    title: 'Animated Sprite',
    github: 'micahrye/react-native-animated-sprite',
    npm: 'react-native-animated-sprite',
    description: 'Animated Sprite supports animation, tweening, and dragging sprites.',
    strengths: 'Great for building sprite-based animations for games',
    weaknesses: 'Requires each frame to be a separate image.'
      + ' If you don\'t have sprite artwork, this library will be useless.',
  },
  FADE_IN_IMAGE: {
    title: 'Fade in Image',
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
  HERO_IMAGE: {
    title: 'Hero Image',
  },
  LAYOUT_ANIMATION: {
    title: 'LayoutAnimation',
    description: 'LayoutAnimation automatically animates views to their new positions when the next layout happens.'
      + ' Which properties are animated can be configured with custom curve or spring-based easing.',
    strengths: 'Built into React Native. Handles all layout changes.',
    weaknesses: 'Only opacity and scale supported. Key prop required on each element.' +
      ' Interrupted transitions in Android may be janky.',
    infoUrl: 'https://medium.com/@Jpoliachik/react-native-s-layoutanimation-is-awesome-4a4d317afd3e',
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
  PARALLAX_IMAGE: {
    title: 'Parallax Image',
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
      + ' for better support of gesture-based interactions.'
      + ' It can do everything Animated can do, and has some extra tools.',
    strengths: 'Provides logical "nodes & blocks" for building complex gesture-based interactions.',
    weaknesses: 'Very complex for simple effects that are not driven by gestures.',
    note: 'This method is used extensively in William Candillon\'s "Can it Be Done in React Native" videos. ',
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
  SVG_ANIMATIONS: {
    title: 'SVG Animations',
    github: '73R3WY/react-native-svg-animations',
    npm: 'react-native-svg-animations',
    description: 'SVG Animations will trace an vector shape with a stroke when supplied with path data.',
    strengths: 'Gives a "drawn" look to illustrations.',
    weaknesses: 'If you don\'t have SVG artwork, this library will be useless.'
      + ' A relatively young library with limited features, does not support easing.',
  },
};

// Secondary menus
ROUTE.APIS = {
  title: 'React Native APIs',
  description: 'Let\'s look at the various animation APIs built in to React Native , ' +
    'using simple demos to understand their key capabilities. ' +
    'If you\'d like to know more, follow the links on each screen to dig deeper.',
  menuRoutes: [
    ROUTE.ANIMATED,
    ROUTE.LAYOUT_ANIMATION,
  ],
};
ROUTE.LIBRARIES = {
  title: 'Community Libraries',
  description: 'Let\'s look at several community libraries, ' +
    'using simple demos to understand their key capabilities. ' +
    'If you\'d like to know more, follow the links on each screen to dig deeper.',
  menuRoutes: [
    ROUTE.ANIMATABLE,
    ROUTE.ANIMATED_SPRITE,
    ROUTE.FLUID_TRANSITIONS,
    ROUTE.LOTTIE,
    ROUTE.POSE,
    ROUTE.REACT_SPRING,
    ROUTE.SHARED_ELEMENT,
    ROUTE.SVG_ANIMATIONS,
  ],
};
ROUTE.DESIGN_PATTERNS = {
  title: 'Design Patterns',
  description: 'Let\'s look at the some effects you might want in implement, ' +
    'and how you might achieve them in React Native. ' +
    'Note that these are not specific to any library, ' +
    'so there may be more than one way to do it!',
  menuRoutes: [
    ROUTE.FADE_IN_IMAGE,
    ROUTE.HERO_IMAGE,
    ROUTE.PARALLAX_IMAGE,
  ],
};

// Main menus
ROUTE.HOME = {
  title: 'Animation Examples',
  description: 'These examples are broken up into three sections. ' +
    `"${ROUTE.APIS.title}" demonstrates various interfaces built in to React Native. ` +
    `"${ROUTE.LIBRARIES.title}" demonstrates several additional libraries available on NPM. ` +
    `"${ROUTE.DESIGN_PATTERNS.title}" shows you some potential approaches ` +
    'you can use to achieve a specific animated effect in React Native.',
  menuRoutes: [
    ROUTE.APIS,
    ROUTE.LIBRARIES,
    ROUTE.DESIGN_PATTERNS,
  ],
};

each(ROUTE, (o, key) => o.key = key);

export default ROUTE;
