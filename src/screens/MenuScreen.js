import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';

import s from '../styles';
import Text from '../components/Text';
import useNavigation from '../utils/useNavigation';
import useRoute from '../utils/useRoute';

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

const MenuScreen = () => {
  const route = useRoute();
  const { description, menuRoutes} = route;

  return (
    <View style={[s.bgAlmostWhite, s.grow1]}>
      <FlatList
        ListHeaderComponent={<Text p>{description}</Text>}
        contentContainerStyle={s.pcontent}
        data={menuRoutes}
        renderItem={renderItem}
      />
    </View>
  );
};

export default MenuScreen;
