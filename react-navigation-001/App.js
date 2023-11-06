import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* import source */
/* export default 로 넘겨주었기에 {}는 하지않는다. */
import ScreenA from './src/ScreenA';
import ScreenB from './src/ScreenB';
import ScreenC from './src/ScreenC';
import NestedStackNavigator from './src/NestedStackNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* 네비게이션 바의 이름을 설정해주고 컴포넌트를 불러온다.  */}
                <Stack.Screen name="ScreenA" component={ScreenA}></Stack.Screen>
                <Stack.Screen name="ScreenB" component={ScreenB}></Stack.Screen>
                <Stack.Screen name="ScreenC" component={ScreenC}></Stack.Screen>
                <Stack.Screen name="NestedNavigator" component={NestedStackNavigator}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
