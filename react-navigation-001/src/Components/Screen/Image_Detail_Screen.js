import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Typography } from '../Components_func/Typography';

export const ImageDetailScreen = (props) => {
    return (
        <View style={styles.main_view}>
            <Typography fontSize={20}>Image Details</Typography>
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
