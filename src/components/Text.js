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
    color: '#0071FF',
  },
});

const AnimationCanvas = (props) => {
  const { uppercase, muted, style, b, lg, lgr, lgst, h1, h2, h3, p, href, ...restProps } = props;

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
        href && styles.link,
        uppercase && s.uppercase,
        muted && s.muted,
        style
      ]}
      {...restProps}
    />
  );
};

export default AnimationCanvas;
