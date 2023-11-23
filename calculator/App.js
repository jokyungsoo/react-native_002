//SafeAreaView는 "react-native" 에서 호출해줘야한다.
import { StyleSheet, SafeAreaView } from 'react-native';

// import component
import Calculator from './src/Calculator';

export default function App() {
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
