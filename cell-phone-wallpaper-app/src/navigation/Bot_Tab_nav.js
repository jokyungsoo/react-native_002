import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ImageListScreen } from '../Components/Screen/Image_List_Screen';
import { Image_Favor_List_Screen } from '../Components/Screen/Image_Favor_List_Screen';

const Tabs = createBottomTabNavigator();

export const BT_navigation = (props) => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Image_List" component={ImageListScreen}></Tabs.Screen>
            <Tabs.Screen name="Img_Favor_List" component={Image_Favor_List_Screen}></Tabs.Screen>
        </Tabs.Navigator>
    );
};
