import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [input, setInput] = useState(); // 입력값 2 -> 14
    const [currentOperator, setCurrentOperator] = useState(null); // 덧셈 연산자 + -> null
    const [result, setResult] = useState(null); // 결과값 12 -> 14
    const [tempInput, setTempIput] = useState(null); // 캐시값 -> 누적값
    const [tempOpreator, setTempOperator] = useState(null); // + 누적값

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
