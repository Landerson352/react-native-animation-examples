import React from 'react';
import { View } from 'react-native';

import s from '../styles';
import useNavigation from '../utils/useNavigation';
import Text from '../components/Text';

const RouteInfo = (props) => {
  let [, navigationRoute] = useNavigation();
  const { route = navigationRoute } = props;

  return (
    <View {...props}>
      <Text h1 p>{route.title}</Text>

      <Text b p>{route.description}</Text>
      {!!route.strengths && (
        <Text p>👍 {route.strengths}</Text>
      )}
      {!!route.weaknesses && (
        <Text p>👎 {route.weaknesses}</Text>
      )}
      {!!route.note && (
        <Text p>🤔 {route.note}</Text>
      )}
      {!!route.infoUrl && <Text style={s.mb1}>
        Info:
        {' '}
        <Text href={route.infoUrl}>{route.infoUrl}</Text>
      </Text>}
      {!!route.github && <Text style={s.mb1}>
        Github:
        {' '}
        <Text href={`https://github.com/${route.github}`}>{route.github}</Text>
      </Text>}
      {!!route.npm && <Text style={s.mb1}>
        NPM:
        {' '}
        <Text href={`https://www.npmjs.com/package/${route.npm}`}>{route.npm}</Text>
      </Text>}
    </View>
  );
};

export default RouteInfo;
