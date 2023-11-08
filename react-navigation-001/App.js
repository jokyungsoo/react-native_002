import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { Typography } from './src/Components.js/Typography';
import { LocalImage } from './src/Components.js/LocalImage';
import { RemoteImage } from './src/Components.js/RemoteImage';
import { Icons } from './src/Components.js/Icons';
import { Badge } from './src/Components.js/Badge';
import { Button } from './src/Components.js/Button';
import { Division } from './src/Components.js/Division';
import { Spacer } from './src/Components.js/Spacer';

export default function APP() {
    return (
        <View style={styles.main_view}>
            <Division />
            <Spacer space={20} />
            <Typography color="red" fontSize={20}>
                this
                {/* 만약 잘못된 값이 들어온다면 */}
                {/* type check
                     yarn add prop-types --save */}
                Text
            </Typography>
            <Spacer space={20} />
            <Division />
            <Spacer space={20} />
            <View style={{ flexDirection: 'row' }}>
                {/* 내부 이미지 */}
                <LocalImage localAsset={require('./assets/favicon.png')} width={50} height={50} />
                <Spacer space={20} />
                {/* 외부 이미지 */}
                <RemoteImage
                    uri="https://www.akc.org/wp-content/uploads/2020/07/Golden-Retriever-puppy-standing-outdoors.jpg"
                    width={50}
                    height={50}
                />
                <Spacer space={20} />
            </View>
            <View>
                {/* 아이콘 생성 */}
                <Icons name="home" size={20} color="red" />
                <Spacer space={20} />
                {/* 텍스트에 뱃지 */}
                <Badge fontsize={10}>
                    <Typography>badge</Typography>
                </Badge>
                <Spacer space={20} />

                {/* 아이콘에 벳지 */}
                <Badge>
                    <Icons name="home" size={40} color="black" />
                </Badge>
            </View>
            <View style={{ margin: 20 }}>
                {/* 버튼 */}
                <Button
                    onPress={() => {
                        console.log("I'm Button");
                    }}
                >
                    <Typography fontSize={32}>TEXT</Typography>
                </Button>

                {/*아이콘 버튼 */}
                <Button
                    onPress={() => {
                        console.log("I'm Icon Button");
                    }}
                >
                    <Icons name="home" size={50} color="green" />
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import { Ionicons } from '@expo/vector-icons/Ionicons';

// import Ionicons from '@expo/vector-icons/Ionicons';

// // import source
// import ScreenA from './src/nav_stack/ScreenA';
// import ScreenB from './src/nav_stack/ScreenB';
// import ScreenC from './src/nav_stack/ScreenC';
// import NestedStackNavigator from './src/nav_stack/NestedStackNavigator';
// import { TabA } from './src/nav_tab/TabA';
// import { TabB } from './src/nav_tab/TabB';
// import { createBottomTabNavigation } from './src/nav_tab/BottomTabNavigator';
// import { BottomTabNavigation } from './src/nav_tab/BottomTabNavigator';
// const BottomTab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// export default function APP() {
//     return (
//         <NavigationContainer>
//             {/* <Stack.Screen name="Tab" component={}></Stack.Screen>
//             <Stack.Screen name="Tab" component={}></Stack.Screen> */}
//             <Stack.Navigator>
//                 <Stack.Screen name={'NestedBottomTab'} component={BottomTabNavigation} />
//                 {/* <Stack.Screen name={'ScreenB'} component={ScreenB} /> */}
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

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
