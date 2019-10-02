import React, { useState } from 'react';
import { ScrollView, Switch, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import AnimationCanvas from '../components/AnimationCanvas';
import Card from '../components/Card';
import ControlRow from '../components/ControlRow';
import ExamplesContainer from '../components/ExamplesContainer';
import RouteInfo from '../components/RouteInfo';
import Text from '../components/Text';
import s from '../styles';

const AnimatableView = Animatable.createAnimatableComponent(View);

const AnimatableScreen = () => {
  return (
    <ScrollView>
      <RouteInfo style={s.pcontent} />

      <ExamplesContainer>

        <Card>
          <View style={s.pcontent}>
            <Text h3 style={s.mb2}>Basic animation</Text>
            <Text>
              Components can be made "Animatable", and come with numerous preset
              animations that can be adjusted for duration and easing, and looped.
            </Text>
          </View>
          <AnimationCanvas>
            <AnimatableView
              animation="rubberBand"
              iterationCount="infinite"
              style={s.shapeA}
            />
          </AnimationCanvas>
        </Card>

      </ExamplesContainer>

    </ScrollView>
  );
};

export default AnimatableScreen;
