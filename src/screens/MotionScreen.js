import React from 'react';
import { ScrollView, View } from 'react-native';

import RouteInfo from '../components/RouteInfo';
import s from '../styles';

export default () => (
  <ScrollView>
    <View style={s.pcontent}>
      <RouteInfo />
    </View>
  </ScrollView>
);
