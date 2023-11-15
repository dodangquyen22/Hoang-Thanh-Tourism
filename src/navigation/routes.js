import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import InfoScreen from "../screens/InfoScreen";
import MapScreen from "../screens/MapScreen";
import EventScreen from "../screens/EventScreen";
import SettingScreen from "../screens/SettingScreen";
import TicketScreen from "../screens/TicketScreen";

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Event" component={EventScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="Ticket" component={TicketScreen}
//            options={{
//                headerShown: true,
//                navigationOptions: {
//                    header: ({ goBack }) =>
//                        ({left: <Left onPress={goBack} />,}),
//                },
//            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
