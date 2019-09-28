import React from 'react';
import { StyleSheet, View } from 'react-native';

import Text from '../components/Text';
import s from '../styles';

const styles = StyleSheet.create({
  examplesContainer: {
    ...s.pcontent,
    ...s.bgAlmostWhite,
    paddingBottom: 128,
  },
});

const ExamplesContainer = (props) => {
  const { children, style, ...restProps } = props;

  return (
      <View style={[styles.examplesContainer, style]} {...restProps}>
        <Text uppercase b muted p>Examples</Text>
        {children}
      </View>
  );
};

export default ExamplesContainer;
