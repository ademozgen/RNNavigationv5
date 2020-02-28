import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import * as React from 'react';

import {Text, View, Image, ScrollView} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';

function CustomHeader({title, isHome, navigation}) {
  return (
    <View style={{flexDirection: 'row', height: 50}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        {isHome ? (
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                <Image
                    style={{width: 30, height: 30, marginLeft: 5}}
                    source={require('./src/images/menu.png')}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.goBack()}>
            <Image
              style={{width: 25, height: 25, marginLeft: 5}}
              source={require('./src/images/back.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={{flex: 1.5, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}}>{title}</Text>
      </View>
      <View style={{flex: 1}}></View>
    </View>
  );
}

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader
        title="Home"
        isHome={true}
        navigation={navigation}>
      </CustomHeader>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('HomeDetail')}>
          <Text style={{marginTop: 20}}> Detaya Git </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
function HomeScreenDetail({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader
        title="Home"
        isHome={false}
        navigation={navigation}>
      </CustomHeader>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Detail!</Text>
      </View>
    </SafeAreaView>
  );
}

function SettingsScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader
        title="Settings"
        isHome={true}
        navigation={navigation}>
      </CustomHeader>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('SettingsDetail')}>
          <Text style={{marginTop: 20}}> Detaya Git </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
function SettingsScreenDetail({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader
        title="Settings Detail"
        isHome={false}
        navigation={navigation}>
      </CustomHeader>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Settings Detail!</Text>
      </View>
    </SafeAreaView>
  );
}

function NotificationsScreen({navigation}){
    return (
        <SafeAreaView style={{flex: 1}}>
            <CustomHeader
                title="Notifications"
                isHome={false}
                navigation={navigation}>
            </CustomHeader>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text>Notifications</Text>
            </View>
        </SafeAreaView>
    );
}
function LoginScreen({navigation}) {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text>Login</Text>
            </View>
            <View style={{flex:1, alignItems: "center"}}>
                 <TouchableOpacity onPress={()=>navigation.navigate("Dashboard")}>
                     <Text>
                         Dashboard
                     </Text>
                 </TouchableOpacity>

            </View>
            <View style={{flex:1, alignItems: "center"}}>
                <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
                    <Text>
                        Register
                    </Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}
function RegisterScreen() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text>Register</Text>
            </View>
        </SafeAreaView>
    );

}

const Tab = createBottomTabNavigator();
const navOptionHandler = () => ({
  headerShown: false,
});

const StackHome = createStackNavigator();
function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen
        name="Home"
        component={HomeScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="HomeDetail"
        component={HomeScreenDetail}
        options={navOptionHandler}
      />
    </StackHome.Navigator>
  );
}

const StackSettings = createStackNavigator();
function SettingsStack() {
  return (
    <StackSettings.Navigator initialRouteName="Settings">
      <StackSettings.Screen
        name="Settings"
        component={SettingsScreen}
        options={navOptionHandler}
      />
      <StackSettings.Screen
        name="SettingsDetail"
        component={SettingsScreenDetail}
        options={navOptionHandler}
      />
    </StackSettings.Navigator>
  );
}

function TabNavigator(){
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? require("./src/images/home-green.png")
                            : require("./src/images/home.png");
                    } else if (route.name === 'Settings') {
                        iconName = focused ?
                            require("./src/images/settings-back.png")
                            : require("./src/images/settings.png");
                    }
                    return <Image source={iconName} style={{width: 20, height: 20}} resizeMode="contain" />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'red',
                inactiveTintColor: 'black',
            }}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Settings" component={SettingsStack} />
        </Tab.Navigator>
    );
}

function CustomDrawerContent(props){
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{height:150, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require("./src/images/profile.png")}></Image>
            </View>
            <ScrollView style={{marginLeft: 5}}>

                <TouchableOpacity onPress={()=>props.navigation.navigate("MenuTab")}>
                    <Text style={{marginTop: 30}}>
                        Menu tab
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.navigation.navigate("Notifications")}>
                    <Text style={{marginTop: 30}}>
                        Notifications
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.navigation.navigate("Login")}>
                    <Text style={{marginTop: 30}}>
                       Login
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const Drawer = createDrawerNavigator();


function DrawerNavigation() {
    return (
        <Drawer.Navigator initialRouteName="MenuTab" drawerContent={props=>CustomDrawerContent(props)}>
            <Drawer.Screen name="MenuTab" component={TabNavigator} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator>
    );

}

const StackApp = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <StackApp.Navigator initialRouteName="Login">
            <StackApp.Screen
                name="Login"
                component={LoginScreen}
                options={navOptionHandler}
            />
            <StackApp.Screen
                name="Dashboard"
                component={DrawerNavigation}
                options={navOptionHandler}
            />
            <StackApp.Screen
                name="Register"
                component={RegisterScreen}
                options={navOptionHandler}
            />
        </StackApp.Navigator>
    </NavigationContainer>
  );
}
