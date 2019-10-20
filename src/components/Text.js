import React from 'react';
import {Linking, Text as RNText} from 'react-native';
import { StyleSheet } from 'react-native';

import s from '../styles';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  fontSizeLarge: {
    fontSize: 20,
    lineHeight: 28,
  },
  fontSizeLarger: {
    fontSize: 26,
    lineHeight: 32,
  },
  fontSizeLargest: {
    fontSize: 36,
    lineHeight: 40,
  },
  link: {
    ...s.blue,
  },
});

const AnimationCanvas = (props) => {
  const {
    aqua,
    b,
    gold,
    h1,
    h2,
    h3,
    href,
    lg,
    lgr,
    lgst,
    link,
    muted,
    p,
    pink,
    style,
    uppercase,
    ...restProps
  } = props;

  return (
    <RNText
      onPress={href && (() => Linking.openURL(href))}
      style={[
        styles.text,
        p && s.mb4,
        (b || h1 || h2 || h3) && s.fontWeightBold,
        (lg || h3) && styles.fontSizeLarge,
        (lgr || h2) && styles.fontSizeLarger,
        (lgst || h1) && styles.fontSizeLargest,
        (link || href) && styles.link,
        uppercase && s.textAqua,
        gold && s.textGold,
        muted && s.muted,
        pink && s.textPink,
        style
      ]}
      {...restProps}
    />
  );
};

export default AnimationCanvas;
