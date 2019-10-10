import React, { useRef } from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';

import AnimationCanvas from '../components/AnimationCanvas';
import Card from '../components/Card';
import ExamplesContainer from '../components/ExamplesContainer';
import RouteInfo from '../components/RouteInfo';
import s from '../styles';
import Text from '../components/Text';

export const onScroll = (contentOffset) => Animated.event(
  [{
    nativeEvent: { contentOffset },
  }],
);

const ReanimatedScreen = () => {
  // Note how these variables can be "locked in" with useRef.
  // In other words, these animations are not driven by JS re-renders.
  // Instead, you create the logical connections, then animations run natively.
  const scrollPosition = useRef(new Animated.Value(0)).current;
  const handleScroll = useRef(onScroll({ y: scrollPosition })).current;
  const left = useRef(Animated.sub(scrollPosition, 280)).current;
  const shapeStyle = useRef({ left }).current;

  return (
    <Animated.ScrollView
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
              By mapping a scroll event to an Animated Value,
              using Animated's operators to transform it,
              and then assigning that Value in an Animated element's style,
              you can control the position of an element with a scroll gesture.
            </Text>
          </View>
          <AnimationCanvas>
            <Animated.View style={[s.shapeA, s.absolute, shapeStyle]} />
          </AnimationCanvas>
        </Card>

      </ExamplesContainer>
    </Animated.ScrollView>
  );
};

export default ReanimatedScreen;
