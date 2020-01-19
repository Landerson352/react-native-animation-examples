import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';

import ROUTE from '../route';
import s from '../styles';
import Text from '../components/Text';
import useNavigation from '../utils/useNavigation';

const menuRoutes = [
  ROUTE.APIS_AND_LIBRARIES,
  ROUTE.DESIGN_PATTERNS,
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
    These examples are broken up into two sections.
    "{ROUTE.APIS_AND_LIBRARIES.title}" demonstrates various
    React Native APIs as well as libraries available on NPM.
    "{ROUTE.DESIGN_PATTERNS.title}" shows you some potential approaches
    you can use to achieve a specific animated effect in React Native.
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
