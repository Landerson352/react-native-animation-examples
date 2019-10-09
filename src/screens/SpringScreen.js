import React, { useState } from 'react';
import { ScrollView, Switch, View } from 'react-native';
import { animated, useSpring, useTrail, useTransition } from 'react-spring';

import AnimationCanvas from '../components/AnimationCanvas';
import Card from '../components/Card';
import ControlRow from '../components/ControlRow';
import ExamplesContainer from '../components/ExamplesContainer';
import RouteInfo from '../components/RouteInfo';
import Text from '../components/Text';
import s from '../styles';

const AnimatedView = animated(View);

const EXAMPLE_1_STATE = {
  ACTIVE: {
    left: 40,
  },
  INACTIVE: {
    left: -40,
  },
};

const EXAMPLE_2_STATE = {
  VISIBLE: {
    opacity: 1,
    height: 80,
    width: 80,
  },
  HIDDEN: {
    opacity: 0,
    height: 0,
    width: 0,
  },
};

const SPRING_CONFIG = {
  SPEEDY: { mass: 1, tension: 200, friction: 20 },
  LIVELY: { mass: 1, tension: 500, friction: 10 },
};

export default () => {
  // Basic spring
  const [basicSpringStyles, setBasicSpringStyles] = useSpring(() => ({
    ...EXAMPLE_1_STATE.INACTIVE,
    config: SPRING_CONFIG.LIVELY,
  }));
  const [isBasicActive, _setIsBasicActive] = useState(false);
  const setIsBasicActive = (willBeActive) => {
    setBasicSpringStyles(willBeActive ? EXAMPLE_1_STATE.ACTIVE : EXAMPLE_1_STATE.INACTIVE);
    _setIsBasicActive(willBeActive);
  };

  // Trail
  const [trailSpringStyles, setTrailSpringStyles] = useTrail(5,() => ({
    ...EXAMPLE_1_STATE.INACTIVE,
    config: SPRING_CONFIG.SPEEDY,
  }));
  const [isTrailActive, _setIsTrailActive] = useState(false);
  const setIsTrailActive = (willBeActive) => {
    setTrailSpringStyles(willBeActive ? EXAMPLE_1_STATE.ACTIVE : EXAMPLE_1_STATE.INACTIVE);
    _setIsTrailActive(willBeActive);
  };

  // Transition
  const [isVisible, setIsVisible] = useState(false);
  const transitions = useTransition(isVisible, null, {
    from: EXAMPLE_2_STATE.HIDDEN,
    enter: EXAMPLE_2_STATE.VISIBLE,
    leave: EXAMPLE_2_STATE.HIDDEN,
  });

  return (
    <ScrollView>
      <RouteInfo style={s.pcontent} />

      <ExamplesContainer>

        <Card>
          <View style={s.pcontent}>
            <Text h3 style={s.mb2}>Basic spring</Text>
            <Text>
              An component wrapped with the "animated()" utility can be styled in conjunction
              with values from the "useSpring()" hook, to animated style properties using physics-based springs.
            </Text>
          </View>
          <AnimationCanvas>
            <AnimatedView style={[s.shapeA, basicSpringStyles]} />
          </AnimationCanvas>
          <ControlRow>
            <Text>Toggle position</Text>
            <Switch onValueChange={setIsBasicActive} value={isBasicActive} />
          </ControlRow>
        </Card>

        <Card>
          <View style={s.pcontent}>
            <Text h3 style={s.mb2}>Trail</Text>
            <Text>
              Trail can be used for staggered animations,
              but crucially, each element follows the previous one.
              This can create varied chain-reaction effects,
              depending on your spring configuration.
            </Text>
          </View>
          <AnimationCanvas>
            {trailSpringStyles.map((style, i) => (
              <AnimatedView key={i} style={[s.shapeE, s.m1, style]} />
            ))}
          </AnimationCanvas>
          <ControlRow>
            <Text>Toggle position</Text>
            <Switch onValueChange={setIsTrailActive} value={isTrailActive} />
          </ControlRow>
        </Card>

        <Card>
          <View style={s.pcontent}>
            <Text h3 style={s.mb2}>Enter/exit transitions</Text>
            <Text>
              A component with "enter" and "exit" states
              will animate when the element is mounted and unmounted.
            </Text>
          </View>
          <AnimationCanvas>
            {transitions.map(({ item: isVisible, key, props: style }) => isVisible && (
              <AnimatedView key={key} style={[s.shapeA, s.absolute, style]} />
            ))}
          </AnimationCanvas>
          <ControlRow>
            <Text>Toggle visibility</Text>
            <Switch onValueChange={setIsVisible} value={isVisible} />
          </ControlRow>
        </Card>

      </ExamplesContainer>
    </ScrollView>
  );
}
