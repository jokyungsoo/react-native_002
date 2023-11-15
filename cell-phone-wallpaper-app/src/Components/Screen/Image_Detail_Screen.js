import React, { useCallback } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as FileSystem from 'expo-file-system';

//
import { Typography } from '../Components_func/Typography';
import { Button } from '../Components_func/Button';
import { Header } from '../Header/Header';
import { RemoteImage } from '../Components_func/RemoteImage';
import { Icons } from '../Components_func/Icons';
import { Spacer } from '../Components_func/Spacer';

export const ImageDetailScreen = (props) => {
    const navigation = useNavigation();
    const route = useRoute();
    const { width } = useWindowDimensions();

    const onPressBack = useCallback(() => {
        console.log('press back');
        navigation.goBack();
    }, []);

    const onPressDownload = useCallback(async () => {
        const downloadResumable = FileSystem.createDownloadResumable(
            route.params.uri,
            `${FileSystem.documentDirectory}${new Date().getMilliseconds()}.jpg`
        );
        try {
            const { uri } = downloadResumable.downloadAsync();
            console.log('finish downloading to', uri);
        } catch (ex) {}
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <Header>
                <Header.Group>
                    <Header.Icons IconName={'arrow-back'} size={26} onPress={onPressBack} />
                    <Header.Title Title="Back" />
                </Header.Group>
            </Header>

            <View style={styles.main_view}>
                <RemoteImage uri={route.params.uri} width={width * 0.95} height={width * 1.5} />
            </View>

            <Button onPress={onPressDownload}>
                <View
                    style={{
                        paddingBottom: 24,
                        backgroundColor: 'black',
                    }}
                >
                    <View
                        style={{
                            height: 52,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography fontSize={20} color="white">
                            Download
                        </Typography>
                        <Spacer space={5} Horizontal={true} />
                        <Icons name="download" size={25} color="white" />
                    </View>
                </View>
            </Button>
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
