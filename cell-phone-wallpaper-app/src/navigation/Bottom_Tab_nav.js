import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ImageListScreen } from '../Components/Screen/Image_List_Screen';
import { Image_Favor_List_Screen } from '../Components/Screen/Image_Favor_List_Screen';

import { TabIcons } from '../Components/Components_func/TabIcons';
const Tabs = createBottomTabNavigator();

export const BT_navigation = (props) => {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    const getIconName = () => {
                        if (route.name === 'Image_List') {
                            return 'home';
                        } else if (route.name === 'Img_Favor_List') {
                            return 'star';
                        }
                    };
                    const iconName = getIconName();
                    return <TabIcons IconName={iconName} IconColor={color} />;
                },
            })}
        >
            <Tabs.Screen name="Image_List" component={ImageListScreen}></Tabs.Screen>
            <Tabs.Screen name="Img_Favor_List" component={Image_Favor_List_Screen}></Tabs.Screen>
        </Tabs.Navigator>
    );
};
