import React from 'react';
import { Button, ScrollView, View } from 'react-native';
import AnimationCanvas from '../components/AnimationCanvas';
import Card from '../components/Card';
import ControlRow from '../components/ControlRow';
import { createFluidNavigator, Transition } from 'react-navigation-fluid-transitions';

import createRouteConfig from '../utils/createRouteConfig';
import ExamplesContainer from '../components/ExamplesContainer';
import ROUTE from '../route';
import RouteInfo from '../components/RouteInfo';
import Text from '../components/Text';
import s from '../styles';
import useNavigation from '../utils/useNavigation';

const SHARED_ELEMENT = {
  CIRCLE_BACKGROUND: 'CIRCLE_BACKGROUND',
  CONTENT: 'CONTENT',
  LINK: 'LINK',
};

const Example1Content = () => (
  <Transition shared={SHARED_ELEMENT.CONTENT}>
    <View style={s.pcontent}>
      <Text h3 style={s.mb2}>Shared elements</Text>
      <Text>
        Elements with the same "shared" prop on two different screens
        will be automatically transitioned when navigating.
      </Text>
    </View>
  </Transition>
);

const MainScreen = () => {
  const [,, handleNavigate]  = useNavigation();

  return (
    <ScrollView>
      <RouteInfo style={s.pcontent} route={ROUTE.FLUID_TRANSITIONS} />

      <ExamplesContainer>

        <Card>
          <Example1Content />
          <AnimationCanvas>
            <Transition shared={SHARED_ELEMENT.CIRCLE_BACKGROUND}>
              <View style={[s.shapeB, { zIndex: -1}]} />
            </Transition>
          </AnimationCanvas>
          <ControlRow>
            <Button title="See Example" onPress={handleNavigate(ROUTE.FLUID_TRANSITIONS_EXAMPLE_1)} />
          </ControlRow>
        </Card>

        <Card>
          <View style={s.pcontent}>
            <Text h3 style={s.mb2}>Appear / Disappear</Text>
            <Text>
              Elements can instead be simply wrapped with a Transition node assigned with an "appear" prop,
              dictating a shorthand animation when navigating (ex: "top" or "scale").
              Note that the mere presence of the Transition node creates a "fade" transition on the screen itself.
            </Text>
          </View>
          <ControlRow>
            <Button title="See Example" onPress={handleNavigate(ROUTE.FLUID_TRANSITIONS_EXAMPLE_2)} />
          </ControlRow>
        </Card>

      </ExamplesContainer>

    </ScrollView>
  );
};

const Example1Screen = () => {
  const [{ goBack }] = useNavigation();

  return (
    <ScrollView contentContainerStyle={[s.grow1, s.centerContent]}>
      <Transition shared={SHARED_ELEMENT.CIRCLE_BACKGROUND}>
        <View style={s.shapeC} />
      </Transition>
      <View style={s.pcontent}>
        <Example1Content />
      </View>
      <Transition appear="scale">
        <Button title="More Examples" onPress={() => goBack()} />
      </Transition>
    </ScrollView>
  );
};

const Example2Screen = () => {
  const [{ goBack }] = useNavigation();

  return (
    <ScrollView contentContainerStyle={[s.grow1, s.pcontent, s.centerItems, s.centerContent]}>
      <Transition appear="top">
        <View style={[s.shapeD, s.mb4]} />
      </Transition>
      <Transition appear="left">
        <View style={[s.shapeD, s.mb4]} />
      </Transition>
      <Transition appear="right">
        <View style={[s.shapeD, s.mb4]} />
      </Transition>
      <Transition appear="bottom">
        <Button title="More Examples" onPress={() => goBack()} />
      </Transition>
    </ScrollView>
  );
};

export default createFluidNavigator({
  ...createRouteConfig(ROUTE.FLUID_TRANSITIONS_MAIN, MainScreen),
  ...createRouteConfig(ROUTE.FLUID_TRANSITIONS_EXAMPLE_1, Example1Screen),
  ...createRouteConfig(ROUTE.FLUID_TRANSITIONS_EXAMPLE_2, Example2Screen),
});
