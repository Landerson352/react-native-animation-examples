import React, { useRef } from 'react';
import { View } from 'react-native';
import Reanimated from 'react-native-reanimated';

import AnimationCanvas from '../components/AnimationCanvas';
import Card from '../components/Card';
import ExamplesContainer from '../components/ExamplesContainer';
import RouteInfo from '../components/RouteInfo';
import s from '../styles';
import Text from '../components/Text';

const ReanimatedScreen = () => {
  // Note how these variables can be "locked in" with useRef (this is not required).
  // In other words, these animations are not driven by JS re-renders.
  // Instead, you create the connections between logical "nodes", then animations run natively.

  // Example 1: Scroll tracking
  const scrollPosition = useRef(new Reanimated.Value(0)).current;
  const handleScroll = useRef(Reanimated.event([{
    nativeEvent: { contentOffset: { y: scrollPosition } },
  }])).current;
  const left = useRef(Reanimated.sub(scrollPosition, 280)).current;
  const example1ShapeStyle = useRef({ left }).current;

  // Example 2: Clock-based animation
  const clock = useRef(new Reanimated.Clock()).current;
  const rotate = useRef(Reanimated.concat(Reanimated.divide(clock, 4), 'deg')).current;
  const example2ShapeStyle = useRef({ transform: [{ rotate }] }).current;
  Reanimated.useCode(Reanimated.block([
    Reanimated.startClock(clock),
  ]), [clock]);

  return (
    <Reanimated.ScrollView
      onScroll={handleScroll}
      scrollEventThrottle={1}
      showsVerticalScrollIndicator={false}
      style={s.grow1}
    >
      <RouteInfo style={s.pcontent} />

      <ExamplesContainer>

        <Card>
          <View style={s.pcontent}>
            <Text h3 style={s.mb2}>Scroll tracking</Text>
            <Text>
              By mapping a scroll event to an Reanimated Value,
              using Reanimated's operators to transform it,
              and then assigning that Value in an Reanimated element's style,
              you can control the position of an element with a scroll gesture.
            </Text>
          </View>
          <AnimationCanvas>
            <Reanimated.View style={[s.shapeA, s.absolute, example1ShapeStyle]} />
          </AnimationCanvas>
        </Card>

        <Card>
          <View style={s.pcontent}>
            <Text h3 style={s.mb2}>Clock-based animation</Text>
            <Text>
              By starting a "clock" and driving a rotation transform off of it,
              You can achieve an infinitely spinning element.
            </Text>
          </View>
          <AnimationCanvas>
            <Reanimated.View style={[s.shapeA, example2ShapeStyle]} />
          </AnimationCanvas>
        </Card>

      </ExamplesContainer>
    </Reanimated.ScrollView>
  );
};

export default ReanimatedScreen;
