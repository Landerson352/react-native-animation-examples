import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

import s from '../styles';

const styles = StyleSheet.create({
  controlRow: {
    ...s.py2,
    ...s.px4,
    ...s.row,
    ...s.centerItems,
    ...s.spaceBetweenContent,
  },
});

const ControlRow = (props) => {
  const { style, ...restProps } = props;

  return (
    <View style={[styles.controlRow, style]} {...restProps} />
  );
};

export default ControlRow;
