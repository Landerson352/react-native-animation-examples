import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import s from '../styles';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    ...s.border1,
    ...s.borderBlue,
    ...s.px4,
    ...s.py2,
    ...s.rounded,
  },
});

const Button = (props) => {
  const { onPress, style, title } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <Text link>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
