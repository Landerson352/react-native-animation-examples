import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';

import ROUTE from '../route';
import s from '../styles';
import Text from '../components/Text';
import useNavigation from '../utils/useNavigation';

const menuRoutes = [
  ROUTE.ANIMATABLE,
  // ROUTE.FIBER,
  // ROUTE.FLARE,
  ROUTE.FLUID_TRANSITIONS,
  ROUTE.LOTTIE,
  ROUTE.POSE,
  // ROUTE.REACT_MOTION,
  ROUTE.REACT_SPRING,
  // ROUTE.REANIMATED,
  // ROUTE.SHARED_ELEMENT,
];

const Item = ({ route }) => {
  const { key, title } = route;
  const [{ navigate }] = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigate(key)}>
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
    Let's look at the various leading React Native animation libraries,
    using simple demos to understand their key capabilities.
    If you'd like to know more, follow the links on each screen to dig deeper.
  </Text>
);

const HomeScreen = () => (
  <View style={[s.bgAlmostWhite, s.grow1]}>
    <FlatList
      ListHeaderComponent={header}
      contentContainerStyle={s.pcontent}
      data={menuRoutes}
      renderItem={renderItem}
    />
  </View>
);

export default HomeScreen;
