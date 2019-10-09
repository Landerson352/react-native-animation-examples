import React from 'react';
import { ScrollView, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

import AnimationCanvas from '../components/AnimationCanvas';
import Button from '../components/Button';
import Card from '../components/Card';
import ControlRow from '../components/ControlRow';
import ExamplesContainer from '../components/ExamplesContainer';
import RouteInfo from '../components/RouteInfo';
import Text from '../components/Text';
import ROUTE from '../route';
import s from '../styles';
import useNavigation from '../utils/useNavigation';

export const SHARED_ELEMENT = {
  CIRCLE_BACKGROUND: 'CIRCLE_BACKGROUND',
  EXAMPLE_1_DESCRIPTION: 'EXAMPLE_1_DESCRIPTION',
  EXAMPLE_1_TITLE: 'EXAMPLE_1_TITLE',
};

export const Example1Content = () => (
  <View style={s.pcontent}>
    <SharedElement id={SHARED_ELEMENT.EXAMPLE_1_TITLE}>
      <Text h3 style={s.mb2}>Shared elements</Text>
    </SharedElement>
    <SharedElement id={SHARED_ELEMENT.EXAMPLE_1_DESCRIPTION}>
      <Text>
        SharedElements with the same "id" prop on two different screens
        will transition their child element when navigating.
      </Text>
    </SharedElement>
  </View>
);

const SharedElementScreen = () => {
  const [,, handleNavigate]  = useNavigation();

  return (
    <ScrollView>
      <RouteInfo style={s.pcontent} />

      <ExamplesContainer>
        <Card>
          <Example1Content />
          <AnimationCanvas>
            <SharedElement id={SHARED_ELEMENT.CIRCLE_BACKGROUND}>
              <View style={s.shapeB} />
            </SharedElement>
          </AnimationCanvas>
          <ControlRow>
            <Button title="See Example" onPress={handleNavigate(ROUTE.SHARED_ELEMENT_EXAMPLE_1)} />
          </ControlRow>
        </Card>
      </ExamplesContainer>
    </ScrollView>
  );
};

export const SharedElementExample1Screen = () => (
  <ScrollView contentContainerStyle={s.grow1}>
    <View style={s.pcontent}>
      <Example1Content />
    </View>
    <SharedElement id={SHARED_ELEMENT.CIRCLE_BACKGROUND} style={s.grow1}>
      <View style={s.shapeF} />
    </SharedElement>
  </ScrollView>
);

// It is required to set the `sharedElements` property,
//   even if the configuration is left with default settings.
// Additionally, you should restrict the sharedElements based on your routes.
SharedElementExample1Screen.sharedElements = (navigation, otherNavigation) => {
  if (otherNavigation.state.routeName === ROUTE.SHARED_ELEMENT.key) {

    return [
      SHARED_ELEMENT.CIRCLE_BACKGROUND,
      {
        id: SHARED_ELEMENT.EXAMPLE_1_TITLE,
        resize: 'clip',
        align: 'left-top',
      },
      {
        id: SHARED_ELEMENT.EXAMPLE_1_DESCRIPTION,
        resize: 'clip',
        align: 'left-top',
      },
    ];
  }

  return [];
};

export default SharedElementScreen;
