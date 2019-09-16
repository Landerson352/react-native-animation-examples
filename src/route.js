import { each } from 'lodash';

// TODO: Add npm and github slugs to each library route.

const ROUTE = {
  ANIMATABLE: {
    title: 'Animatable',
  },
  FIBER: {
    title: 'Fiber',
  },
  FLARE: {
    title: 'Flare',
  },
  FLUID_TRANSITIONS: {
    title: 'FluidTransitions',
  },
  HOME: {
    title: 'Animation Examples',
  },
  LOTTIE: {
    title: 'Lottie',
  },
  MOTION: {
    title: 'Motion',
  },
  POSE: {
    title: 'Pose',
  },
  REANIMATED: {
    title: 'Reanimated',
  },
  SHARED_ELEMENT: {
    title: 'Shared Element',
  },
  SPRING: {
    title: 'Spring',
  },
};

each(ROUTE, (o, key) => o.key = key);

export default ROUTE;
