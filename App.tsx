import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <NavigationContainer>
      <Icon name="airplane-outline" size={80} color="red" />
    </NavigationContainer>
  );
};

export default App;
