import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export class TabB extends React.Component {
    render() {
        return (
            <View style={styles.main_view}>
                <Text>Tab B</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
