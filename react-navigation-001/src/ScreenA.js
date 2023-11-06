import React from 'react';
import { StyleSheet, View } from 'react-native';

class ScreenA extends React.Component {
    render() {
        return <View style={styles.main_view}></View>;
    }
}

const styles = StyleSheet.create({
    main_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ScreenA;
