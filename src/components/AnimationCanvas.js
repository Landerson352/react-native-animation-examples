import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

import s from '../styles';

const styles = StyleSheet.create({
  animationCanvas: {
    ...s.centerContentAndItems,
    ...s.bgBlack,
    height: 160,
    overflow: 'hidden',
  },
});

const AnimationCanvas = (props) => {
  const { style, ...restProps } = props;

  return (
    <View style={[styles.animationCanvas, style]} {...restProps} />
  );
};

export default AnimationCanvas;
