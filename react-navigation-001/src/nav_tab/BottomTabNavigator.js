import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import source
import { TabA } from './TabA';
import { TabB } from './TabB';
import NestedStackNavigator from '../nav_stack/NestedStackNavigator';

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export class BottomTabNavigation extends React.Component {
    render() {
        return (
            <BottomTab.Navigator>
                <BottomTab.Screen
                    name={'TabA'}
                    component={NestedStackNavigator}
                    options={{
                        tabBarIcon: () => <Ionicons name="home" size={24} color="black" />,
                    }}
                />
                <BottomTab.Screen
                    name={'TabB'}
                    component={TabB}
                    options={{
                        tabBarIcon: () => <Ionicons name="settings" size={20} />,
                    }}
                />
            </BottomTab.Navigator>
        );
    }
}
