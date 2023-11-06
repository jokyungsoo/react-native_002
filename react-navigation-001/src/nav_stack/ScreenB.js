import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class ScreenB extends React.Component {
    render() {
        return (
            <View style={styles.main_view}>
                <Text>Screen B 화면입니다. 받은 값 : {this.props.route.params.value} </Text>
                <Button
                    title="backspace"
                    onPress={() => {
                        // console.log('clicked backspace');
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

export default ScreenB;
