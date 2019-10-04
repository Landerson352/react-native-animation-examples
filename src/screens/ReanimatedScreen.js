import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, Switch, View } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import AnimationCanvas from '../components/AnimationCanvas';
import Card from '../components/Card';
import ControlRow from '../components/ControlRow';
import ExamplesContainer from '../components/ExamplesContainer';

const {
  set,
  cond,
  startClock,
  stopClock,
  clockRunning,
  block,
  timing,
  debug,
  Value,
  Clock,
  divide,
  concat,
} = Animated;

import RouteInfo from '../components/RouteInfo';
import Text from '../components/Text';
import s from '../styles';

const runTiming = (clock, value, dest) => {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 5000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease),
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    timing(clock, state, config),
    cond(state.finished, debug('stop clock', stopClock(clock))),
    state.position,
  ]);
};

const ReanimatedScreen = () => {
  const trans = useRef(runTiming(new Clock(), 0, 360)).current;
  const example1Style = { transform: [{ rotate: concat(trans, 'deg') }] };

  return (
    <ScrollView>
      <RouteInfo style={s.pcontent} />

      <ExamplesContainer>

        <Card>
          <View style={s.pcontent}>
            <Text h3 style={s.mb2}>Example One</Text>
            <Text>
              ...
            </Text>
          </View>
          <AnimationCanvas>
            <Animated.View
              style={[
                s.shapeA,
                example1Style,
              ]}
            />
          </AnimationCanvas>
        </Card>

      </ExamplesContainer>
    </ScrollView>
  );
};

export default ReanimatedScreen;
