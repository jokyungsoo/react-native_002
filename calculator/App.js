import { useState } from 'react';
//SafeAreaView는 "react-native" 에서 호출해줘야한다.
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';

// import component
import Calculator from './src/Calculator';

export default function App() {
    const [input, setInput] = useState(0); // 입력값 2 -> 14
    const [currentOperator, setCurrentOㄴㄴㄴperator] = useState(null); // 덧셈 연산자 + -> null
    const [result, setResult] = useState(null); // 결과값 12 -> 14
    const [tempInput, setTempIput] = useState(null); // 캐시값 -> 누적값
    const [tempOpreator, setTempOperator] = useState(null); // + 누적값

    return (
        <SafeAreaView style={styles.container}>
            <Calculator />
        </SafeAreaView>
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
