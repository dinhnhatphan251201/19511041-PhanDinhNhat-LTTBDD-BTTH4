import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/Home";

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
};

export default AppStack;
