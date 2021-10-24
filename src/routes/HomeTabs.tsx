import React, {useContext} from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/core';
import {ThemeContext} from 'styled-components/native';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

import Home from '@screens/Home';

export type HomeTabParamList = {
  New: undefined;
  Statistics: undefined;
};

const Tab = createBottomTabNavigator<HomeTabParamList>();

const HomeTabs: React.FC = () => {
  const theme = useContext(ThemeContext);

  const icons: {[key: string]: any} = {
    New: 'blood-drop',
    Statistics: 'bar-chart',
  };

  const screenOptions = ({
    route,
  }: {
    route: RouteProp<HomeTabParamList, keyof HomeTabParamList>;
  }): BottomTabNavigationOptions => ({
    tabBarIcon: ({color, size}: any) => (
      <FontistoIcon name={icons[route.name]} size={size} color={color} />
    ),
    tabBarStyle: {
      height: theme.hp('8%'),
      elevation: 0,
      borderTopWidth: 0,
      backgroundColor: 'transparent',
      // position: 'absolute',
      // width: theme.wp('100%'),
      // bottom: theme.hp('1%'),
    },
    tabBarLabelPosition: 'beside-icon',
    tabBarActiveTintColor: theme.colors.primary,
    tabBarLabelStyle: {
      fontFamily: 'Lemon-Regular',
      fontSize: theme.fontSize.small,
    },
    headerShown: false,
  });

  return (
    <Tab.Navigator detachInactiveScreens={false} screenOptions={screenOptions}>
      <Tab.Screen
        name="New"
        options={{title: 'Novo registro'}}
        component={Home}
      />
      <Tab.Screen
        name="Statistics"
        options={{title: 'Estatísticas'}}
        component={Home}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
