import { each } from 'lodash';

const ROUTE = {
  ANIMATABLE: {
    title: 'Animatable',
    github: 'oblador/react-native-animatable',
    npm: 'react-native-animatable',
    description: 'Declarative transitions and animations.'
      + 'Supports duration, easing, key-framing. Comes with presets.'
  },
  FIBER: {
    title: 'Fiber',
    infoUrl: 'https://wcandillon.github.io/react-native-fiber/',
    description: 'A paid React Native starter focused on animations inspired by Framer.',
  },
  FLARE: {
    title: 'Flare',
    infoUrl: 'https://www.2dimensions.com/about-flare',
    description: 'Not yet integrated with React Native.'
      + ' An animation tool that supports vector or raster, skeletons and mesh deformations,'
      + ' inverse kinematics and more.',
  },
  FLUID_TRANSITIONS: {
    title: 'FluidTransitions',
    github: 'fram-x/FluidTransitions',
    npm: 'react-navigation-fluid-transitions',
    description: 'Transitioning elements between React-Navigation screens.'
      + ' Supports shared elements, appear/disappear transitions, staggering, and custom transitions.'
      + ' No linking required (unlike Shared Element).'
  },
  FLUID_TRANSITIONS_MAIN: {},
  FLUID_TRANSITIONS_EXAMPLE_1: {},
  FLUID_TRANSITIONS_EXAMPLE_2: {},
  HOME: {
    title: 'Animation Examples',
  },
  LOTTIE: {
    title: 'Lottie',
    infoUrl: 'https://airbnb.design/lottie/',
    github: 'react-native-community/lottie-react-native',
    npm: 'lottie-react-native',
    description: 'Parses Adobe After Effects animations exported as JSON with bodymovin and renders them natively.'
      + ' Supported by Expo. Otherwise, required linking.',
  },
  MOTION: {
    title: 'Motion',
    github: 'chenglou/react-motion',
    npm: 'react-motion',
    description: 'Primitives for driving animations with spring-based physics,'
      + ' as opposed to defined curves and durations.'
      + ' Support staggering & chaining animations, as well as mounting/unmounting transitions..'
      + ' Uses render-props, but not hooks (unlike react-spring).'
  },
  POSE: {
    title: 'Pose',
    infoUrl: 'https://popmotion.io/pose/',
    github: 'Popmotion/popmotion',
    npm: 'react-native-pose',
    description: 'Pose is an animation system which automatically transitions components between states,'
      + ' or when adding or removing nodes.'
      + ' Supports tween, keyframe, or spring based transitions.'
      + ' Supports groups, animating text characters, dragging interactivity, & interpolation.'
      + ' From the makers of Framer. Pose has been succeeded by Framer Motion,'
      + ' but that does not support React Native yet.',
  },
  REANIMATED: {
    title: 'Reanimated',
    github: 'kmagiera/react-native-reanimated',
    npm: 'react-native-reanimated',
    description: 'React Native\'s Animated library reimplemented,'
      + ' for better support of gesture-based interactions.',
  },
  SHARED_ELEMENT: {
    title: 'Shared Element',
    github: 'IjzerenHein/react-native-shared-element',
    npm: 'react-native-shared-element',
    description: 'Primitives for transitioning elements between screens.'
      + ' Has bindings for React Navigation\'s StackNavigator.'
      + ' Linking required (unlike FluidTransitions).'
      + ' Road-map to include appear/disappear transitions and Expo support.'
  },
  SPRING: {
    title: 'Spring',
    infoUrl: 'https://www.react-spring.io/',
    github: 'react-spring/react-spring',
    npm: 'react-spring',
    description: 'Primitives for driving animations with spring-based physics,'
      + ' as opposed to defined curves and durations.'
      + ' By setting mass, tension and friction, you can add bounce or dampen the motion.'
      + ' Support staggering & chaining animations, as well as enter/exit animations.'
      + ' Support hooks (unlike react-motion) & render-props.'
      + ' "Inspired in part by react-motion, but more concise and expressive."'
  },
};

each(ROUTE, (o, key) => o.key = key);

export default ROUTE;
