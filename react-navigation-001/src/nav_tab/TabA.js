import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export class TabA extends React.Component {
    render() {
        return (
            <View>
                <Text>Tab A</Text>
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
