import React from 'react';
import { Text, View } from 'react-native';

import useNavigation from '../utils/useNavigation';

const RouteInfo = () => {
  const [, route] = useNavigation();

  return (
    <View>
      <Text>{route.title}</Text>
      <Text>{route.description}</Text>
      {!!route.infoUrl && <Text>Info: {route.infoUrl}</Text>}
      {!!route.github && <Text>github: {route.github}</Text>}
      {!!route.npm && <Text>npm: {route.npm}</Text>}
    </View>
  );
};

export default RouteInfo;
