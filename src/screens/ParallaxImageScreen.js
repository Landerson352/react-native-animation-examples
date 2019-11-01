import React from 'react';
import { StyleSheet, View } from 'react-native';
import Reanimated from 'react-native-reanimated';

import s from '../styles';
import LoremIpsum from '../components/LoremIpsum';
import Text from '../components/Text';

const { add, divide, event, Extrapolate, interpolate, sub, Value } = Reanimated;

const IMAGE_WIDTH = 320;
const IMAGE_HEIGHT = 640;
const IMAGE_SOURCE = { uri: `https://placebear.com/${IMAGE_WIDTH}/${IMAGE_HEIGHT}` };

const styles = StyleSheet.create({
  imageContainer: {
    ...s.overflowHidden,
    aspectRatio: 1.6,
  },
  image: {
    aspectRatio: IMAGE_WIDTH / IMAGE_HEIGHT,
  },
});

const ParallaxImageScreen = () => {
  const scrollTop = new Value(0);
  const handleScroll = event([{
    nativeEvent: { contentOffset: { y: scrollTop } },
  }]);

  const scrollViewHeight = new Value(0);
  const handleScrollViewLayout = ({ nativeEvent: { layout: { height } } }) => {
    scrollViewHeight.setValue(height);
  };

  const imageContainerTop = new Value(0);
  const imageContainerHeight = new Value(0);
  const handleImageContainerLayout = ({ nativeEvent: { layout: { y, height } } }) => {
    imageContainerTop.setValue(y);
    imageContainerHeight.setValue(height);
  };

  const imageHeight = new Value(0);
  const handleImageLayout = ({ nativeEvent: { layout: { y, height } } }) => {
    imageHeight.setValue(height);
  };

  const fraction = divide(add(scrollTop, sub(scrollViewHeight, imageContainerTop)), add(scrollViewHeight, imageContainerHeight));
  const translateY = interpolate(fraction, {
    inputRange: [0, 1],
    outputRange: [sub(imageContainerHeight, imageHeight), 0],
    extrapolate: Extrapolate.CLAMP,
  });
  const imageStyle = { transform: [{ translateY }] };

  return (
    <Reanimated.ScrollView
      style={s.grow1}
      onScroll={handleScroll}
      scrollEventThrottle={1}
      onLayout={handleScrollViewLayout}
    >
      <View style={s.pcontent}>
        <Text b p>
          By adjusting the image height according to scroll position,
          you can achieve a fluid parallax type effect for images.
        </Text>
        <Text p>
          (The remainder of text on the page is only a visual placeholder.)
        </Text>
        <LoremIpsum />
      </View>
      <View style={styles.imageContainer} onLayout={handleImageContainerLayout}>
        <Reanimated.Image
          style={[styles.image, imageStyle]}
          source={IMAGE_SOURCE}
          onLayout={handleImageLayout}
        />
      </View>
      <View style={s.pcontent}>
        <LoremIpsum />
        <LoremIpsum />
      </View>
    </Reanimated.ScrollView>
  );
};

export default ParallaxImageScreen;
