import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class ScreenC extends React.Component {
    render() {
        return (
            <View style={styles.main_view}>
                <Text>Screen C </Text>
                <Button
                    title="backspace"
                    onPress={() => {
                        this.props.navigation.goBack();
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

export default ScreenC;
