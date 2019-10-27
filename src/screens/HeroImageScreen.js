import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import Reanimated from 'react-native-reanimated';

import s from '../styles';
import LoremIpsum from '../components/LoremIpsum';
import Text from '../components/Text';

const { event, interpolate, Value } = Reanimated;

const IMAGE_SOURCE = { uri: 'https://placebear.com/300/170' };
const IMAGE_HEIGHT = 170;

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
  const scrollPosition = useRef(new Value(0)).current;
  const handleScroll = useRef(event([{
    nativeEvent: { contentOffset: { y: scrollPosition } },
  }])).current;
  const imageStyle = useRef({
    height: interpolate(scrollPosition, {
      inputRange: [0, IMAGE_HEIGHT],
      outputRange: [IMAGE_HEIGHT, 0],
    }),
    opacity: interpolate(scrollPosition, {
      inputRange: [0, IMAGE_HEIGHT],
      outputRange: [1, 0],
    }),
  }).current;

  return (
    <Reanimated.ScrollView
      style={s.grow1}
      onScroll={handleScroll}
      scrollEventThrottle={1}
    >
      <View style={styles.imageContainer}>
        <Reanimated.Image
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
    </Reanimated.ScrollView>
  );
};

export default HeroImageScreen;
