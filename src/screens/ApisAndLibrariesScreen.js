import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';

import ROUTE from '../route';
import s from '../styles';
import Text from '../components/Text';
import useNavigation from '../utils/useNavigation';

const menuRoutes = [
  ROUTE.ANIMATABLE,
  ROUTE.ANIMATED,
  ROUTE.ANIMATED_SPRITE,
  ROUTE.FLUID_TRANSITIONS,
  ROUTE.LAYOUT_ANIMATION,
  ROUTE.LOTTIE,
  ROUTE.POSE,
  ROUTE.REACT_SPRING,
  ROUTE.SHARED_ELEMENT,
  ROUTE.SVG_ANIMATIONS,
];

const Item = ({ route }) => {
  const { title } = route;
  const [{ navigate }] = useNavigation();

  return (
    <TouchableOpacity onPress={navigate(route)}>
      <View style={[s.mb2, s.p4, s.bgWhite, s.rounded]}>
        <Text b>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const renderItem = ({ item }) => (
  <Item route={item} />
);

const header = (
  <Text p>
    Let's look at the various leading React Native animation APIs & libraries,
    using simple demos to understand their key capabilities.
    If you'd like to know more, follow the links on each screen to dig deeper.
  </Text>
);

const ApisAndLibrariesScreen = () => (
  <View style={[s.bgAlmostWhite, s.grow1]}>
    <FlatList
      ListHeaderComponent={header}
      contentContainerStyle={s.pcontent}
      data={menuRoutes}
      renderItem={renderItem}
    />
  </View>
);

export default ApisAndLibrariesScreen;
