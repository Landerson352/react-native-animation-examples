import React, { useRef } from 'react';
import { ScrollView, View } from 'react-native';
import AnimatedSprite from 'react-native-animated-sprite';

import AnimationCanvas from '../components/AnimationCanvas';
import Card from '../components/Card';
import ExamplesContainer from '../components/ExamplesContainer';
import RouteInfo from '../components/RouteInfo';
import Text from '../components/Text';
import s from '../styles';

// Note: For smoother playback, preload your sprite assets.

const AnimatedSpriteScreen = () => {
  const cheetahSpriteProps = useRef({
    sprite: {
      size: { width: 512, height: 256 },
      frames: [
        require('../../assets/example-sprite/run-0.png'),
        require('../../assets/example-sprite/run-1.png'),
        require('../../assets/example-sprite/run-2.png'),
        require('../../assets/example-sprite/run-3.png'),
        require('../../assets/example-sprite/run-4.png'),
        require('../../assets/example-sprite/run-5.png'),
        require('../../assets/example-sprite/run-6.png'),
        require('../../assets/example-sprite/run-7.png'),
      ],
    },
    coordinates: { top: 0, left: 0 },
    animationFrameIndex: [0, 1, 2, 3, 4, 5, 6, 7],
    fps: 20,
    loopAnimation: true,
  }).current;

  const cheetahSpriteSize = { width: 200, height: 100 };

  return (
    <ScrollView>
      <RouteInfo style={s.pcontent} />

      <ExamplesContainer>

        <Card>
          <View style={s.pcontent}>
            <Text h3 style={s.mb2}>Looping sprite</Text>
            <Text>
              This is the simplest implementation of a sprite,
              with no alternate states or interactivity.
            </Text>
          </View>
          <AnimationCanvas>
            <View style={cheetahSpriteSize}>
              <AnimatedSprite
                {...cheetahSpriteProps}
                size={cheetahSpriteSize}
              />
            </View>
          </AnimationCanvas>
        </Card>

      </ExamplesContainer>

    </ScrollView>
  );
};

export default AnimatedSpriteScreen;
