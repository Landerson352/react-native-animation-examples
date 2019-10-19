import React, { useState } from 'react';
import { LayoutAnimation, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { map, times } from 'lodash';

import AnimationCanvas from '../components/AnimationCanvas';
import Button from '../components/Button';
import Card from '../components/Card';
import ControlRow from '../components/ControlRow';
import ExamplesContainer from '../components/ExamplesContainer';
import RouteInfo from '../components/RouteInfo';
import Text from '../components/Text';
import s from '../styles';

const SHAPE_COLORS = [
  'aquamarine',
  'deeppink',
  'gold',
];

// Note that in order to get this to work on Android
//   you need to set the following flags via UIManager:
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

// TODO: refactor container style names
const styles = StyleSheet.create({
  shapeContainer1: {
    ...s.bgBlack,
    ...s.pcontent,
    ...s.row,
    ...s.wrap,
  },
  shapeContainer2: {
    ...s.bgBlack,
    ...s.p1,
    ...s.row,
    height: 160,
  },
});

export default () => {
  const [shapeFlexes, _setShapeFlexes] = useState([1, 1, 1]);
  const setShapeFlexes = (value) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    _setShapeFlexes(value);
  };
  const randomizeShapeFlexes = () => {
    setShapeFlexes([
      Math.random() * 9 + 1,
      Math.random() * 9 + 1,
      Math.random() * 9 + 1,
    ]);
  };

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
            <Text h3 style={s.mb2}>Flex grow</Text>
            <Text>
              Elements whose flex style changes will be transitioned
              as long as LayoutAnimation.configureNext is called before the next render.
            </Text>
          </View>
          <View style={styles.shapeContainer2}>
            {map(shapeFlexes, (flexGrow, i) => (
              <View key={i} style={[s.m1, s.rounded, { backgroundColor: SHAPE_COLORS[i], flexGrow }]} />
            ))}
          </View>
          <ControlRow>
            <Button title="Randomize" onPress={randomizeShapeFlexes} />
          </ControlRow>
        </Card>

        <Card>
          <View style={s.pcontent}>
            <Text h3 style={s.mb2}>Mount/unmount</Text>
            <Text>
              Elements added or removed from the layout will be transitioned.
              Note that the containing and sibling elements are transitioned as well.
            </Text>
          </View>
          <View style={styles.shapeContainer1}>
            {times(shapeCount, (i) => (
              <View key={i} style={[s.shapeG, s.m1]} />
            ))}
          </View>
          <ControlRow>
            <Button title="Remove one" onPress={removeShape} />
            <Button title="Add one" onPress={addShape} />
          </ControlRow>
        </Card>

      </ExamplesContainer>
    </ScrollView>
  );
}
