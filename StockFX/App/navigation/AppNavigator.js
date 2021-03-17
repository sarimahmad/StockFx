/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Animated,
  Easing,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {DrawerItems, createDrawerNavigator} from 'react-navigation-drawer';

import {createBottomTabNavigator} from 'react-navigation-tabs';

import AboutUs from '../screens/AboutUs';
import ContactUs from '../screens/ContactUs';
import Detail from '../screens/Detail';
import Favourite from '../screens/Favourite';
import Landing from '../screens/Landing';
import NewsAndFeed from '../screens/NewsAndFeed';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';
import Setting from '../screens/Setting';
import SettingNotification from '../screens/SettingNotification';
import SignIn from '../screens/SignIn';
import Splash from '../screens/Splash';
import Stock from '../screens/Stock';

import {BLUE, YELLOW} from '../helper/Color';

import BottomNavContainer from './BottomNav';
import {FONT, SCREEN} from '../helper/Constant';

// https://github.com/react-community/react-navigation/issues/1254
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0.1,
    timing: Animated.timing,
    easing: Easing.circle,
  },
});

const TabStackOne = createStackNavigator(
  {
    Stock: {screen: Stock},
  },
  {
    headerMode: 'none',
    cardStyle: {
      backgroundColor: BLUE.app,
      opacity: 1,
    },
  },
);

const TabStackTwo = createStackNavigator(
  {
    Favourite: {screen: Favourite},
  },
  {
    headerMode: 'none',
    cardStyle: {
      backgroundColor: BLUE.app,
      opacity: 1,
    },
  },
);

const TabStackThree = createStackNavigator(
  {
    NewsAndFeed: {screen: NewsAndFeed},
  },
  {
    headerMode: 'none',
    cardStyle: {
      backgroundColor: BLUE.app,
      opacity: 1,
    },
  },
);

const TabStackFour = createStackNavigator(
  {
    Notification: {screen: Notification},
  },
  {
    headerMode: 'none',
    cardStyle: {
      backgroundColor: BLUE.app,
      opacity: 1,
    },
  },
);

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex: 1, backgroundColor: BLUE.app}}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          height: 180,
          paddingBottom: 5,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          actveOpacity={1}
          style={{
            paddingHorizontal: 30,
            justifyContent: 'center',
          }}>
          <Image
            style={{
              height: 80,
              width: 80,
              resizeMode: 'contain',
              borderRadius: 40,
            }}
            source={require('../assets/profile_img.png')}
          />
          <Text style={{fontSize: 14, fontFamily: FONT.bold, color: BLUE.light, marginTop: 20}}>Lord Ash</Text>
          <Text style={{fontSize: 12, fontFamily: FONT.regular, color: BLUE.light}}>ash@lord.com</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{backgroundColor: BLUE.drawerLine, height: 1, width: '100%'}}
      />
      <DrawerItems
        {...props}
        iconContainerStyle={{width: 30, alignItems: 'flex-end'}}
        itemStyle={{backgroundColor: BLUE.app}}
        labelStyle={{
          fontSize: 14,
          color: BLUE.light,
          fontFamily: FONT.bold,
        }}
      />
    </ScrollView>
    <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 60}}>
      <TouchableOpacity
        activeOpacity={0.9}
        underlayColor={BLUE.app}
        style={{flexDirection: 'row', paddingLeft: 15}}>
        <Image
          style={{height: 20, width: 20, resizeMode: 'contain'}}
          source={require('../assets/logout.png')}
        />
        <Text
          style={{
            fontSize: 14,
            fontFamily: FONT.bold,
            color: BLUE.light,
            marginLeft: 25,
          }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

//Tab Navigation
const TabNavigator = createBottomTabNavigator(
  {
    Stock: {screen: TabStackOne},
    Favourite: {screen: TabStackTwo},
    NewsAndFeed: {screen: TabStackThree},
    Notification: {screen: TabStackFour},
  },
  {
    tabBarComponent: BottomNavContainer,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
  },
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: TabNavigator,
      navigationOptions: {
        drawerLabel: 'Home',
        drawerIcon: ({focused}) => (
          <Image
            source={
              focused
                ? require('../assets/bottomTabIcon/stock_select.png')
                : require('../assets/bottomTabIcon/stock_un_active.png')
            }
            style={{height: 20, width: 20, resizeMode: 'contain'}}
          />
        ),
      },
    },

    Profile: {
      screen: Profile,
      navigationOptions: {
        drawerLabel: 'Profile',
        drawerIcon: ({focused}) => (
          <Image
            source={
              focused
                ? require('../assets/profile_drawer_active.png')
                : require('../assets/profile_drawer.png')
            }
            style={{height: 20, width: 20, resizeMode: 'contain'}}
          />
        ),
      },
    },

    ContactUs: {
      screen: ContactUs,
      navigationOptions: {
        drawerLabel: 'Contact Us',
        drawerIcon: ({focused}) => (
          <Image
            source={
              focused
                ? require('../assets/feedbck_drawer_selected.png')
                : require('../assets/feedback_drawer_selected.png')
            }
            style={{height: 20, width: 20, resizeMode: 'contain'}}
          />
        ),
      },
    },

    AboutUs: {
      screen: AboutUs,
      navigationOptions: {
        drawerLabel: 'About Us',
        drawerIcon: ({focused}) => (
          <Image
            source={
              focused
                ? require('../assets/about_selected_drawer.png')
                : require('../assets/about_drawer.png')
            }
            style={{height: 20, width: 20}}
          />
        ),
      },
    },

    Setting: {
      screen: Setting,
      navigationOptions: {
        drawerLabel: 'Setting',
        drawerIcon: ({focused}) => (
          <Image
            source={
              focused
                ? require('../assets/setting_drawer_selected.png')
                : require('../assets/setting_drawer.png')
            }
            style={{height: 20, width: 20, resizeMode: 'contain'}}
          />
        ),
      },
    },
  },
  {
    contentComponent: CustomDrawerComponent,
    initialRouteName: 'Home',
    activeTintColor: YELLOW.app,
    inactiveTintColor: BLUE.app,
    drawerWidth: SCREEN.width - 75,
    showLabel: true,
    animationEnabled: true,
    activeBackgroundColor: BLUE.app,
    inactiveBackgroundColor: BLUE.app,
    drawerOpenRoute: 'LeftSideMenu',
    drawerCloseRoute: 'LeftSideMenuClose',
    drawerToggleRoute: 'LeftSideMenuToggle',
  },
);

const HomeStack = createStackNavigator({
  Main: {
    screen: AppDrawerNavigator,
    navigationOptions: {headerShown: false, gestureEnabled: true},
  },
  Detail: {
    screen: Detail,
    navigationOptions: {headerShown: false, gestureEnabled: true},
  },
  SettingNotification: {
    screen: SettingNotification,
    navigationOptions: {headerShown: false, gestureEnabled: true},
  },
});

const MainApp = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      headerShown: false,
      gestureEnabled: false,
    },
  },
});

const Auth = createStackNavigator({
  Landing: {
    screen: Landing,
    navigationOptions: {
      headerShown: false,
      gestureEnabled: false,
    },
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      headerShown: false,
      gestureEnabled: true,
    },
  },
});

let SwitchNavigator = createSwitchNavigator(
  {
    App: MainApp,
    Auth: Auth,
    Main: HomeStack,
  },
  {
    initialRouteName: 'App',
    transitionConfig: noTransitionConfig,
  },
);
export default SwitchNavigator;
