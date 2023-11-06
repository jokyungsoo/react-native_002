import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenC from './ScreenC';

const Stack = createNativeStackNavigator();

class NestedStackNavigator extends React.Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="ScreenC" component={ScreenC} />
            </Stack.Navigator>
        );
    }
}

export default NestedStackNavigator;
