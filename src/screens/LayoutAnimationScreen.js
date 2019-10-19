import React, { useState } from 'react';
import { LayoutAnimation, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { times } from 'lodash';

import AnimationCanvas from '../components/AnimationCanvas';
import Button from '../components/Button';
import Card from '../components/Card';
import ControlRow from '../components/ControlRow';
import ExamplesContainer from '../components/ExamplesContainer';
import RouteInfo from '../components/RouteInfo';
import Text from '../components/Text';
import s from '../styles';

// Note that in order to get this to work on Android
//   you need to set the following flags via UIManager:
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const styles = StyleSheet.create({
  shapeContainer: {
    ...s.row,
    ...s.wrap,
    width: 144,
  },
});

export default () => {
  const [shapeCount, _setShapeCount] = useState(12);
  const setShapeCount = (value) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    _setShapeCount(value);
  };
  const removeShape = () => setShapeCount(n => Math.max(n - 1, 0));
  const addShape = () => setShapeCount(n => n + 1);

  return (
    <ScrollView>
      <RouteInfo style={s.pcontent} />

      <ExamplesContainer>

        <Card>
          <View style={s.pcontent}>
            <Text h3 style={s.mb2}>Mount/unmount</Text>
            <Text>
              Elements added or removed from the layout will be transitioned
              as long as LayoutAnimation.configureNext is called before the next render.
            </Text>
          </View>
          <AnimationCanvas>
            <View style={styles.shapeContainer}>
              {times(shapeCount, (i) => (
                <View key={i} style={[s.shapeG, s.m1]} />
              ))}
            </View>
          </AnimationCanvas>
          <ControlRow>
            <Button title="Remove one" onPress={removeShape} />
            <Button title="Add one" onPress={addShape} />
          </ControlRow>
        </Card>

      </ExamplesContainer>
    </ScrollView>
  );
}
