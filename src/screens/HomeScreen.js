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
  ROUTE.REANIMATED,
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
    Here we demonstrate the key capabilities of various React Native animation libraries in the simplest way,
    and give you clues and resources to dig deeper on the ones that are most applicable to your app.
  </Text>
);

const HomeScreen = () => (
  <View style={[s.bgAlmostWhite, s.flexGrow]}>
    <FlatList
      ListHeaderComponent={header}
      contentContainerStyle={s.pcontent}
      data={menuRoutes}
      renderItem={renderItem}
    />
  </View>
);

export default HomeScreen;
