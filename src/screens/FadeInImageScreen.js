import React, { useRef, useState } from 'react';
import { Animated, ScrollView, StyleSheet, View } from 'react-native';
import { usePrevious } from 'state-hooks';

import s from '../styles';
import Button from '../components/Button';
import Text from '../components/Text';

const { Image, timing, Value } = Animated;

const INITIAL_IMAGE_SIZE = 288;

const styles = StyleSheet.create({
  imageContainer: {
    ...s.bgAlmostWhite,
    ...s.mb4,
    ...s.overflowHidden,
    ...s.relative,
    ...s.rounded,
    width: INITIAL_IMAGE_SIZE,
    height: INITIAL_IMAGE_SIZE,
  },
  image: {
    ...StyleSheet.absoluteFill,
  },
});

const SmoothImage = ({ style, ...restProps }) => {
  const opacity = useRef(new Value(0)).current;
  const smoothImageStyle = useRef({ opacity }).current;

  const previousSource = usePrevious(restProps.source);
  if (restProps.source !== previousSource) {
    opacity.setValue(0);
  }

  const handleImageLoad = () => {
    timing(opacity, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  };

  return <Image onLoad={handleImageLoad} style={[style, smoothImageStyle]} {...restProps} />
};

const FadeInImageScreen = () => {
  const [size, setSize] = useState(INITIAL_IMAGE_SIZE);
  const incrementSize = () => {
    setSize((value) => value + 1);
  };

  const uri = `https://placebear.com/${size}/${size}`;

  return (
    <ScrollView contentContainerStyle={s.pcontent}>
      <View style={styles.imageContainer}>
        <SmoothImage style={styles.image} source={{ uri }} />
      </View>
      <Text p>
        By setting the image's opacity to zero,
        then detecting when the image loads,
        you can fade the image in once it's ready.
      </Text>
      <Button title="Load New Image" onPress={incrementSize} style={s.alignSelfCenter} />
    </ScrollView>
  );
};

export default FadeInImageScreen;
