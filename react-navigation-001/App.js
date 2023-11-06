import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBar, BottomTabView, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import source
import { TabA } from './src/nav_tab/TabA';

const Stack = createNativeStackNavigator();

export default function APP() {
    return (
        <NavigationContainer>
            <BottomTab.Navigator>
                <BottomTab.Screen name={'TabA'} component={TabA}></BottomTab.Screen>
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
