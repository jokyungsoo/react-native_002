import React, { useCallback } from 'react';
import { View, StyleSheet, useWindowDimensions, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as FileSystem from 'expo-file-system';

import * as MediaLibrary from 'expo-media-library';
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
    const [downloading, setDownloading] = React.useState(false);

    const onPressBack = useCallback(() => {
        navigation.goBack();
    }, []);

    const onPressDownload = useCallback(async () => {
        setDownloading(true);
        const downloadResumable = FileSystem.createDownloadResumable(
            route.params.uri,
            `${FileSystem.documentDirectory}${new Date().getMilliseconds()}.jpg`
        );
        try {
            const { uri } = await downloadResumable.downloadAsync();
            console.log('finish downloading to', uri);

            const permissionResult = await MediaLibrary.getPermissionsAsync(true);
            console.log('this is a ', permissionResult);
            if (permissionResult.status === 'denied') {
                //아예 못쓰는 상태
                setDownloading(false);
                return;
            }

            if (permissionResult.status === 'undetermined') {
                const requestResult = await MediaLibrary.requestPermissionsAsync();
                console.log(requestResult);
                if (requestResult.status === 'denied') {
                    setDownloading(false);
                    return;
                }
            }

            const asset = await MediaLibrary.createAssetAsync(uri);
            const album = await MediaLibrary.createAlbumAsync('TestFolder', asset, false);
            setDownloading(false);

            console.log(album);
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
                    {downloading ? (
                        <View
                            style={{ height: 52, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <ActivityIndicator />
                        </View>
                    ) : (
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
                    )}
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
