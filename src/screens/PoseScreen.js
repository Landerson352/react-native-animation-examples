import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';
import posed, { Transition } from 'react-native-pose';

import RouteInfo from '../components/RouteInfo';

const FadeInOutView = posed.View({
  enter: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.5,
  }
});

export default () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleSwitchChange = (value) => {
    setIsVisible(value);
  };

  return (
    <View>
      <Switch onValueChange={handleSwitchChange} value={isVisible} />
      <Transition>
        {isVisible && (
          <FadeInOutView key="a">
            <Text>Hello</Text>
          </FadeInOutView>
        )}
      </Transition>
      <RouteInfo />
    </View>
  );
}
