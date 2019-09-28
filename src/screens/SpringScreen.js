import React, { useState } from 'react';
import { ScrollView, Switch, View } from 'react-native';
import { animated, useSpring, useChain, useSprings, useTrail, useTransition } from 'react-spring';
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

const SPRING_CONFIG = {
  LIVELY: { mass: 1, tension: 500, friction: 10 },
};

export default () => {
  const [basicSpringStyles, setBasicSpringStyles] = useSpring(() => ({
    ...EXAMPLE_1_STATE.INACTIVE,
    config: SPRING_CONFIG.LIVELY,
  }));
  const [isActive, _setIsActive] = useState(false);

  const setIsActive = (willBeActive) => {
    setBasicSpringStyles(willBeActive ? EXAMPLE_1_STATE.ACTIVE : EXAMPLE_1_STATE.INACTIVE);
    _setIsActive(willBeActive);
  };

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
            <Switch onValueChange={setIsActive} value={isActive} />
          </ControlRow>
        </Card>

      </ExamplesContainer>
    </ScrollView>
  );
}
