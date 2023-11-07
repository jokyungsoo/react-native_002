import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Ionicons } from '@expo/vector-icons/Ionicons';

import Ionicons from '@expo/vector-icons/Ionicons';

// import source
import ScreenA from './src/nav_stack/ScreenA';
import ScreenB from './src/nav_stack/ScreenB';
import ScreenC from './src/nav_stack/ScreenC';
import NestedStackNavigator from './src/nav_stack/NestedStackNavigator';
import { TabA } from './src/nav_tab/TabA';
import { TabB } from './src/nav_tab/TabB';
import { createBottomTabNavigation } from './src/nav_tab/BottomTabNavigator';
import { BottomTabNavigation } from './src/nav_tab/BottomTabNavigator';
const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function APP() {
    return (
        <NavigationContainer>
            {/* <Stack.Screen name="Tab" component={}></Stack.Screen>
            <Stack.Screen name="Tab" component={}></Stack.Screen> */}
            <BottomTab.Navigator>
                <Stack.Screen name={'NestedBottomTab'} component={BottomTabNavigation} />
                <Stack.Screen name={'ScreenB'} component={ScreenB} />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}

//
//
//
//
//
//
//
// navigation-top & navigation stack

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// /* import source */

// /* export default 로 넘겨주었기에 {}는 하지않는다. */
// import ScreenA from './src/nav_stack/ScreenA';
// import ScreenB from './src/nav_stack/ScreenB';
// import ScreenC from './src/nav_stack/ScreenC';
// import NestedStackNavigator from './src/nav_stack/NestedStackNavigator';

// const BottomTab = createStackNavigator();

// export default function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 {/* 네비게이션 바의 이름을 설정해주고 컴포넌트를 불러온다.  */}
//                 <Stack.Screen name="ScreenA" component={ScreenA}></Stack.Screen>
//                 <Stack.Screen name="ScreenB" component={ScreenB}></Stack.Screen>
//                 <Stack.Screen name="ScreenC" component={ScreenC}></Stack.Screen>
//                 <Stack.Screen name="NestedNavigator" component={NestedStackNavigator}></Stack.Screen>
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }
