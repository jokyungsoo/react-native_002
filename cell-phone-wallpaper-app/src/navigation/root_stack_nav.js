import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { BT_navigation } from './Bottom_Tab_nav';
import { ImageDetailScreen } from '../Components/Screen/Image_Detail_Screen';
const Stack = createNativeStackNavigator();

export const Root_Stack_Nav = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Bottom_Tab" component={BT_navigation} />
            <Stack.Screen name="Img_Detaiㅣe" component={ImageDetailScreen} />
        </Stack.Navigator>
    );
};
