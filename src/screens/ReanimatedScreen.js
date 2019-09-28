import React from 'react';
import { ScrollView } from 'react-native';

import RouteInfo from '../components/RouteInfo';
import s from '../styles';

export default () => (
  <ScrollView>
    <RouteInfo style={s.pcontent} />
  </ScrollView>
);
