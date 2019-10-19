import React, { useState } from 'react';
import { LayoutAnimation, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { map, times } from 'lodash';
import { usePrevious } from 'state-hooks';

import Button from '../components/Button';
import Card from '../components/Card';
import ControlRow from '../components/ControlRow';
import ExamplesContainer from '../components/ExamplesContainer';
import RouteInfo from '../components/RouteInfo';
import Text from '../components/Text';
import s from '../styles';

// Note that in order to get this to work on Android,
//   you need to set the following flags via UIManager once in your app:
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const FLEX_SHAPE_STYLE = [
  s.bgAqua,
  s.bgPink,
  s.bgGold,
];

// While this hook is not required, it may simplify the process
//  of triggering a new LayoutAnimation update when values change between renders.
//  See Example 2 for usage.
const useLayoutAnimation = (value, config = LayoutAnimation.Presets.easeInEaseOut) => {
  const string = JSON.stringify(value);
  const previousString = usePrevious(string);
  if (previousString !== string) {
    LayoutAnimation.configureNext(config);
  }
};

// TODO: refactor container style names
const styles = StyleSheet.create({
  example1Container: {
    ...s.bgBlack,
    ...s.pcontent,
    ...s.row,
    ...s.wrap,
  },
  example2Container: {
    ...s.bgBlack,
    ...s.p1,
    ...s.row,
    height: 160,
  },
});

export default () => {
  // Example 1: Flex grow
  const [shapeFlexes, _setShapeFlexes] = useState([1, 1, 1]);
  // Here, we create a function which prepares the LayoutAnimation,
  //  then changes the actual state value.
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

  // Example 2: Mount/unmount
  const [shapeCount, setShapeCount] = useState(12);
  // Here, we leverage our custom hook instead of calling LayoutAnimation imperatively.
  useLayoutAnimation(shapeCount);
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
          <View style={styles.example2Container}>
            {map(shapeFlexes, (flexGrow, i) => (
              <View key={i} style={[s.m1, s.rounded, FLEX_SHAPE_STYLE[i], { flexGrow }]} />
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
          <View style={styles.example1Container}>
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
