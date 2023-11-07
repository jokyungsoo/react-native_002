import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export class TabA extends React.Component {
    render() {
        return (
            <View style={styles.main_view}>
                <Text>Tab A</Text>

                <Button
                    title="TabB"
                    onPress={() => {
                        this.props.navigation.navigate('TabB');
                    }}
                />
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
