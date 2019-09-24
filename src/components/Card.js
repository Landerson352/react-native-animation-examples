import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

import s from '../styles';

const styles = StyleSheet.create({
  card: {
    ...s.bgWhite,
    ...s.mb4,
    ...s.rounded,
    ...s.shadow1,
  },
  cardContents: {
    ...s.rounded,
    ...s.overflowHidden,
  },
});

const Card = (props) => {
  const { style, contentStyle, ...restProps } =  props;

  return (
    <View style={[styles.card, style]}>
      <View style={[styles.cardContents, contentStyle]} {...restProps} />
    </View>
  );
};

export default Card;
