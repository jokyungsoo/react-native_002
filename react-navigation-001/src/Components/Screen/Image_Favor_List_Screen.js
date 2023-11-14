import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Typography } from '../Components_func/Typography';

export const Image_Favor_List_Screen = (props) => {
    return (
        <View style={styles.main_view}>
            <Typography fontSize={20}>This Favoriate Image List</Typography>
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
