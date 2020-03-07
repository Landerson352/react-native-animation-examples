import React from 'react';
import { Animated, View } from 'react-native';
import { Svg, Path } from 'react-native-svg';

import AnimationCanvas from '../components/AnimationCanvas';
import Card from '../components/Card';
import ExamplesContainer from '../components/ExamplesContainer';
import RouteInfo from '../components/RouteInfo';
import s from '../styles';
import Text from '../components/Text';

// You can create your own components to handle Animated values.
const AnimatedPath = Animated.createAnimatedComponent(Path);

const useAnimation = () => {
  // Note how these variables can be "locked in" with useRef (this is not required).
  // In other words, these animations are not driven by JS re-renders.
  // Instead, you create the connections between logical "nodes", then animations run natively.

  return React.useRef((() => {
    const scrollPosition = new Animated.Value(0);

    // Example 1: Scroll tracking
    const handleScroll = Animated.event([{
      nativeEvent: { contentOffset: { y: scrollPosition } },
    }]);
    const left = Animated.subtract(scrollPosition, 340);
    const example1ShapeStyle = { left };

    // Example 2: SVG path morphing
    const pathData = scrollPosition.interpolate({
      inputRange: [0, 1200],
      outputRange: [
        'M50,100C77.6142375,100 100,77.6142375 100,50C100,22.3857625 77.6142375,0 50,0C22.3857625,0 0,22.3857625 0,50C0,77.6142375 22.3857625,100 50,100Z',
        'M50,57.8040432C157.751351,57.8040432 57.8040432,157.751351 57.8040432,50C57.8040432,-57.7513506 157.751351,42.1959568 50,42.1959568C-57.7513506,42.1959568 42.1959568,-57.7513506 42.1959568,50C42.1959568,157.751351 -57.7513506,57.8040432 50,57.8040432Z',
      ],
    });

    return {
      handleScroll,
      left,
      example1ShapeStyle,
      pathData,
      scrollPosition,
    };
  })()).current;
};

const AnimatedScreen = () => {
  const {
    handleScroll,
    example1ShapeStyle,
    pathData,
  } = useAnimation();

  return (
    <Animated.ScrollView
      onScroll={handleScroll}
      scrollEventThrottle={1}
      showsVerticalScrollIndicator={false}
      style={s.grow1}
    >
      <RouteInfo style={s.pcontent} />

      <ExamplesContainer style={{ paddingBottom: 700 }}>

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
            <Animated.View style={[s.shapeA, s.absolute, example1ShapeStyle]} />
          </AnimationCanvas>
        </Card>

        <Card>
          <View style={s.pcontent}>
            <Text h3 style={s.mb2}>SVG path morphing</Text>
            <Text>
              With the "interpolate" command, you can animate string values,
              such as data for an SVG path.
            </Text>
          </View>
          <AnimationCanvas>
            <Svg width={100} height={100}>
              <AnimatedPath d={pathData} fill="deeppink" />
            </Svg>
          </AnimationCanvas>
        </Card>

      </ExamplesContainer>
    </Animated.ScrollView>
  );
};

export default AnimatedScreen;
