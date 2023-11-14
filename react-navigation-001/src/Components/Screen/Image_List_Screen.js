import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Typography } from '../Components_func/Typography';

export const ImageListScreen = (props) => {
    return (
        <View style={styles.main_view}>
            <Typography fontSize={20}>Image List</Typography>
        </View>
    );
};

const styles = StyleSheet.create({
    main_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
