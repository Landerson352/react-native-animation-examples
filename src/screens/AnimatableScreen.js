import React, { useState } from 'react';
import { ScrollView, Switch, View } from 'react-native';
import * as Animatable from 'react-native-animatable-unmountable';

import AnimationCanvas from '../components/AnimationCanvas';
import Card from '../components/Card';
import ControlRow from '../components/ControlRow';
import ExamplesContainer from '../components/ExamplesContainer';
import RouteInfo from '../components/RouteInfo';
import Text from '../components/Text';
import s from '../styles';

const AnimatableView = Animatable.animatableUnmountable(View);

const AnimatableScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <ScrollView>
      <RouteInfo style={s.pcontent} />

      <ExamplesContainer>

        <Card>
          <View style={s.pcontent}>
            <Text h3 style={s.mb2}>Basic looping animation</Text>
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

        <Card>
          <View style={s.pcontent}>
            <Text h3 style={s.mb2}>Mount/unmount transition</Text>
            <Text>
              With the unofficial "react-native-animatable-unmountable" library,
              you can mount and unmount the component with unique animations.
              Note that interrupted transitions may not hand off smoothly.
            </Text>
          </View>
          <AnimationCanvas>
            <AnimatableView
              mounted={isVisible}
              animation="flipInX"
              duration={300}
              unmountAnimation="flipOutX"
              unmountDuration={300}
              style={s.shapeA}
            />
          </AnimationCanvas>
          <ControlRow>
            <Text>Toggle visibility</Text>
            <Switch onValueChange={setIsVisible} value={isVisible} />
          </ControlRow>
        </Card>

      </ExamplesContainer>

    </ScrollView>
  );
};

export default AnimatableScreen;
