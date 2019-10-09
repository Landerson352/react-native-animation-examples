import React from 'react';
import { Linking, StyleSheet, TouchableOpacity, View } from 'react-native';

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
  const { href, onPress, style, title } = props;
  const handlePress = (onPress || (href && Linking.openURL(href)));

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.container, style]}>
        <Text link>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
