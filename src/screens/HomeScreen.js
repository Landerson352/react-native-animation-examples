import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import ROUTE from '../route';
import useNavigation from '../utils/useNavigation';

const menuRoutes = [
  ROUTE.ANIMATABLE,
  ROUTE.FIBER,
  ROUTE.FLARE,
  ROUTE.FLUID_TRANSITIONS,
  ROUTE.LOTTIE,
  ROUTE.MOTION,
  ROUTE.POSE,
  ROUTE.REANIMATED,
  ROUTE.SHARED_ELEMENT,
  ROUTE.SPRING,
];

const Item = ({ route }) => {
  const { key, title } = route;
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigate(key)}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const renderItem = ({ item }) => (
  <Item route={item} />
);

const HomeScreen = () => (
  <View style={styles.homeScreen}>
    <FlatList
      contentContainerStyle={styles.flatListContentContainer}
      data={menuRoutes}
      renderItem={renderItem}
    />
  </View>
);

const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: '#f6f6f6',
    flex: 1,
  },
  flatListContentContainer: {
    padding: 16,
  },
  item: {
    marginBottom: 8,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  itemText: {
    fontWeight: 'bold',
  },
});

export default HomeScreen;
