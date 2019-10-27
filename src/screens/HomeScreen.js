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

const HomeScreen = () => (
  <View style={[s.bgAlmostWhite, s.grow1]}>
    <FlatList
      contentContainerStyle={s.pcontent}
      data={menuRoutes}
      renderItem={renderItem}
    />
  </View>
);

export default HomeScreen;
