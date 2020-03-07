import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';

import s from '../styles';
import LoremIpsum from '../components/LoremIpsum';
import Text from '../components/Text';

const { event, Value } = Animated;

const IMAGE_SOURCE = { uri: 'https://placebear.com/640/360' };
const IMAGE_HEIGHT = 180;

const styles = StyleSheet.create({
  imageContainer: {
    ...s.relative,
    height: IMAGE_HEIGHT,
    backgroundColor: '#7D764F',
  },
  image: {
    ...StyleSheet.absoluteFill,
    top: 'auto',
  },
});

const HeroImageScreen = () => {
  const scrollPosition = new Value(0);
  const handleScroll = event([{
    nativeEvent: { contentOffset: { y: scrollPosition } },
  }]);
  const imageStyle = {
    height: scrollPosition.interpolate({
      inputRange: [0, IMAGE_HEIGHT],
      outputRange: [IMAGE_HEIGHT, 0],
    }),
    opacity: scrollPosition.interpolate({
      inputRange: [0, IMAGE_HEIGHT],
      outputRange: [1, 0],
    }),
  };

  return (
    <Animated.ScrollView
      style={s.grow1}
      onScroll={handleScroll}
      scrollEventThrottle={1}
    >
      <View style={styles.imageContainer}>
        <Animated.Image
          style={[styles.image, imageStyle]}
          source={IMAGE_SOURCE}
        />
      </View>
      <View style={s.pcontent}>
        <Text b p>
          By adjusting the image height according to scroll position,
          you can achieve a fluid parallax type effect for hero images.
        </Text>
        <Text p>
          (The remainder of text on the page is only a visual placeholder.)
        </Text>
        <LoremIpsum />
        <LoremIpsum />
      </View>
    </Animated.ScrollView>
  );
};

export default HeroImageScreen;
