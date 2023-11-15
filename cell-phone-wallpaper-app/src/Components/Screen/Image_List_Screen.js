import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Typography } from '../Components_func/Typography';
import { Header } from '../Header/Header';
import { IMAGE_LIST } from '../../constants';
import { PhotoListItem } from '../Components_func/PhotoListItem';

export const ImageListScreen = (props) => {
    return (
        <View style={styles.main_view}>
            <Header>
                <Header.Group>
                    <Header.Title Title="Image List" />
                </Header.Group>
            </Header>
            <FlatList
                style={{ flex: 1 }}
                data={IMAGE_LIST}
                renderItem={({ item }) => {
                    return <PhotoListItem uri={item} />;
                }}
            ></FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    main_view: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
});
