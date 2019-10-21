import React, { useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

import AnimationCanvas from '../components/AnimationCanvas';
import Card from '../components/Card';
import ExamplesContainer from '../components/ExamplesContainer';
import RouteInfo from '../components/RouteInfo';
import Text from '../components/Text';
import s from '../styles';

const EXAMPLE_BODYMOVIN_DATA = require('../../assets/example-bodymovin-data.json');

const styles = StyleSheet.create({
  example1AnimationCanvas: {
    backgroundColor: 'rgb(88, 214, 112)',
  },
});

export default () => {
  const animation1Ref = useRef(null);

  useEffect(() => {
    animation1Ref.current.play();
  }, []);

  return (
    <ScrollView>
      <RouteInfo style={s.pcontent} />

      <ExamplesContainer>

        <Card>
          <View style={s.pcontent}>
            <Text h3 style={s.mb2}>Basic animation</Text>
            <Text>
              Once the JSON data is available, a Lottie element can be added to a layout quite easily.
              It can be resized, or allowed to fit the parent element.
            </Text>
          </View>
          <AnimationCanvas style={styles.example1AnimationCanvas}>
            <LottieView
              ref={animation1Ref}
              source={EXAMPLE_BODYMOVIN_DATA}
            />
          </AnimationCanvas>
        </Card>

      </ExamplesContainer>
    </ScrollView>
  );
}
