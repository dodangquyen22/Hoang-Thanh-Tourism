import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TicketScreen from "../screens/TicketScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = {
    type: 'stack',
    key: 'stack-1',
    routeNames: ['Ticket', 'Home'],
    routes: [
      { key: 'ticket-1', name: 'Ticket', params: { sortBy: 'latest' } },
      { key: 'home-1', name: 'Home' },
    ],
    index: 1,
    stale: false,
};

export default function TicketNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Ticket" component={TicketScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
