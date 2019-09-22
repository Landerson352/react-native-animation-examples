import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

const s = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 4,
    marginBottom: 16,
    elevation: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  cardContents: {
    borderRadius: 4,
    overflow: 'hidden',
  },
});

const Card = (props) => {
  const { style, contentStyle, ...restProps } =  props;

  return (
    <View style={[s.card, style]}>
      <View style={[s.cardContents, contentStyle]} {...restProps} />
    </View>
  );
};

export default Card;
