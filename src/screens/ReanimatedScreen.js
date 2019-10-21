import React, { useRef } from 'react';
import { View } from 'react-native';
import Reanimated from 'react-native-reanimated';
import * as Redash from 'react-native-redash';
import { Svg, Path } from 'react-native-svg';

import AnimationCanvas from '../components/AnimationCanvas';
import Card from '../components/Card';
import ExamplesContainer from '../components/ExamplesContainer';
import RouteInfo from '../components/RouteInfo';
import s from '../styles';
import Text from '../components/Text';

const AnimatedPath = Reanimated.createAnimatedComponent(Path);

const ReanimatedScreen = () => {
  // Note how these variables can be "locked in" with useRef (this is not required).
  // In other words, these animations are not driven by JS re-renders.
  // Instead, you create the connections between logical "nodes", then animations run natively.

  const scrollPosition = useRef(new Reanimated.Value(0)).current;

  // Example 1: Scroll tracking
  const handleScroll = useRef(Reanimated.event([{
    nativeEvent: { contentOffset: { y: scrollPosition } },
  }])).current;
  const left = useRef(Reanimated.sub(scrollPosition, 340)).current;
  const example1ShapeStyle = useRef({ left }).current;

  // Example 2: SVG path morphing
  const pathData = useRef(Redash.interpolatePath(scrollPosition, {
    inputRange: [500, 1100],
    outputRange: [
      'M50,100 C77.6142375,100 100,77.6142375 100,50 C100,22.3857625 77.6142375,0 50,0 C22.3857625,0 0,22.3857625 0,50 C0,77.6142375 22.3857625,100 50,100 Z',
      'M50,57.8040432 C157.751351,57.8040432 57.8040432,157.751351 57.8040432,50 C57.8040432,-57.7513506 157.751351,42.1959568 50,42.1959568 C-57.7513506,42.1959568 42.1959568,-57.7513506 42.1959568,50 C42.1959568,157.751351 -57.7513506,57.8040432 50,57.8040432 Z',
    ],
  })).current;

  // Example 3: Clock-based animation
  const clock = useRef(new Reanimated.Clock()).current;
  const rotate = useRef(Reanimated.concat(Reanimated.divide(clock, 4), 'deg')).current;
  const example3ShapeStyle = useRef({ transform: [{ rotate }] }).current;
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
            <Text h3 style={s.mb2}>SVG path morphing</Text>
            <Text>
              With William Candillon's "Redash" library,
              you can interpolate SVG path data, and much more.
            </Text>
          </View>
          <AnimationCanvas>
            <Svg width={100} height={100}>
              <AnimatedPath d={pathData} fill="aquamarine" />
            </Svg>
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
            <Reanimated.View style={[s.shapeA, example3ShapeStyle]} />
          </AnimationCanvas>
        </Card>

      </ExamplesContainer>
    </Reanimated.ScrollView>
  );
};

export default ReanimatedScreen;
