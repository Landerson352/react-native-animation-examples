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
              Elements can instead be wrapped with a non-shared Transition node, with "appear" or "disappear" props,
              dictating a shorthand animation when navigating (ex: "flip" or "scale").
              The "delay" prop can be added for a staggering effect.
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
      <Transition appear="scale" disappear="scale">
        <Button title="More Examples" onPress={() => goBack()} />
      </Transition>
    </ScrollView>
  );
};

const Example2Screen = () => {
  const [{ goBack }] = useNavigation();

  return (
    <ScrollView contentContainerStyle={[s.grow1, s.centerContent]}>

      <View style={[s.wrap, s.row, s.p2]}>
        <Transition appear="left" disappear="left">
          <View style={[s.shapeD, s.m2]} />
        </Transition>
        <Transition appear="top" disappear="top">
          <View style={[s.shapeD, s.m2]} />
        </Transition>
        <Transition appear="right" disappear="right">
          <View style={[s.shapeD, s.m2]} />
        </Transition>
        <Transition appear="flip" disappear="flip">
          <View style={[s.shapeD, s.m2]} />
        </Transition>
        <Transition appear="scale" disappear="scale">
          <View style={[s.shapeD, s.m2]} />
        </Transition>
        <Transition appear="flip" disappear="flip">
          <View style={[s.shapeD, s.m2]} />
        </Transition>
        <Transition appear="left" disappear="left">
          <View style={[s.shapeD, s.m2]} />
        </Transition>
        <Transition appear="bottom" disappear="bottom">
          <View style={[s.shapeD, s.m2]} />
        </Transition>
        <Transition appear="right" disappear="right">
          <View style={[s.shapeD, s.m2]} />
        </Transition>
      </View>

      <Transition appear="scale" disappear="scale">
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
