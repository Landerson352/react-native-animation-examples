import React, { useState } from 'react';
import { ScrollView, Switch, View } from 'react-native';
import posed, { Transition } from 'react-native-pose';

import s from '../styles';
import AnimationCanvas from '../components/AnimationCanvas';
import Card from '../components/Card';
import ControlRow from '../components/ControlRow';
import RouteInfo from '../components/RouteInfo';
import Text from '../components/Text';

const VisibilityView = posed.View({
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
});

const SizeView = posed.View({
  circle: {
    borderRadius: 4,
    width: 160,
    height: 8,
  },
  square: {
    borderRadius: 40,
    width: 80,
    height: 80,
  },
});
const ColorView = posed.View({
  green: {
    backgroundColorAnimatable: 1,
  },
  pink: {
    backgroundColorAnimatable:  0,
  },
  passive: {
    backgroundColor: ['backgroundColorAnimatable', {
      inputRange: [0, 1],
      outputRange: ['deeppink', 'aquamarine']
    }]
  },
});

const DraggableView = posed.View({
  draggable: 'x',
  dragging: { scale: 1.2 },
  dragEnd: { scale: 1 },
  passive: {
    rotate: ['x', {
      inputRange: [-160, 160],
      outputRange: ['-45deg', '45deg'],
    }]
  },
});

const PoseScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isCircle, setIsCircle] = useState(false);
  const [isPink, setIsPink] = useState(false);

  return (
    <ScrollView>
      <View style={s.pcontent}>
        <RouteInfo />
      </View>

      <View style={[s.pcontent, s.bgAlmostWhite]}>
        <Text uppercase b muted p>Examples</Text>

        <Card>
          <View style={s.pcontent}>
            <Text h3 style={s.mb2}>Enter/exit transitions</Text>
            <Text>
              A component with "enter" and "exit" poses, placed inside of a Transition node,
              will animate when the element is mounted and unmounted. Note: A "key" prop is
              required.
            </Text>
          </View>
          <AnimationCanvas>
            <Transition>
              {isVisible && (
                <VisibilityView key="a" style={s.shapeA} />
              )}
            </Transition>
          </AnimationCanvas>
          <ControlRow>
            <Text>Toggle visibility</Text>
            <Switch onValueChange={setIsVisible} value={isVisible} />
          </ControlRow>
        </Card>

        <Card>
          <View style={s.pcontent}>
            <Text h3 style={s.mb2}>Dynamic props</Text>
            <Text>
              A component can have "poses", each with defined values.
              When the "pose" prop is
              changed, those values will transition.
            </Text>
          </View>
          <AnimationCanvas>
            <SizeView style={s.shapeA} pose={isCircle ? 'circle' : 'square'} />
          </AnimationCanvas>
          <ControlRow>
            <Text>Toggle pose</Text>
            <Switch onValueChange={setIsCircle} value={isCircle} />
          </ControlRow>
        </Card>

        <Card>
          <View style={s.pcontent}>
            <Text h3 style={s.mb2}>Passive properties</Text>
            <Text>
              Props can be "passive", which means they are dependent
              on another property.
              Currently color values must be defined this way.
            </Text>
          </View>
          <AnimationCanvas>
            <ColorView style={s.shapeA} pose={isPink ? 'pink' : 'green'} />
          </AnimationCanvas>
          <ControlRow>
            <Text>Toggle pose</Text>
            <Switch onValueChange={setIsPink} value={isPink} />
          </ControlRow>
        </Card>

        <Card>
          <View style={s.pcontent}>
            <Text h3 style={s.mb2}>Draggable</Text>
            <Text>
              The "draggable" config enables dragging, with the option to
              define the appearance while being dragged.
              Some values can be interpolated along with the drag position.
              The draggable API is
              fairly limited for native, but the maintainers have plans
              to improve it.
            </Text>
          </View>
          <AnimationCanvas>
            <DraggableView style={s.shapeA} />
          </AnimationCanvas>
        </Card>

      </View>

    </ScrollView>
  );
};

export default PoseScreen;
