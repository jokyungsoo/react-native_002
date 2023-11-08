import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenC from './ScreenC';
import ScreenB from './ScreenB';
import ScreenA from './ScreenA';

const Stack = createNativeStackNavigator();

class NestedStackNavigator extends React.Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="ScreenA" component={ScreenA} />
                {/* <Stack.Screen name="ScreenB" component={ScreenB} /> */}
                <Stack.Screen name="ScreenC" component={ScreenC} />
            </Stack.Navigator>
        );
    }
}

export default NestedStackNavigator;
