import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';

import ROUTE from '../route';
import s from '../styles';
import Text from '../components/Text';
import useNavigation from '../utils/useNavigation';

const menuRoutes = [
  ROUTE.HERO_IMAGE,
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
    Let's look at the some more complex effects you might want in implement,
    and how you can achieve them in React Native.
  </Text>
);

const DesignPatternsScreen = () => (
  <View style={[s.bgAlmostWhite, s.grow1]}>
    <FlatList
      ListHeaderComponent={header}
      contentContainerStyle={s.pcontent}
      data={menuRoutes}
      renderItem={renderItem}
    />
  </View>
);

export default DesignPatternsScreen;
