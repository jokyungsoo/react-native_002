import React, { useCallback } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { Button } from './Button';
import { RemoteImage } from './RemoteImage';
import { useNavigation } from '@react-navigation/native';

export const PhotoListItem = (props) => {
    //props.uri
    const { width } = useWindowDimensions();
    const navigation = useNavigation();

    const onPressItem = useCallback(() => {
        navigation.navigate('Img_Detaiㅣe', { uri: props.uri });
    }, []);

    return (
        <Button onPress={onPressItem} paddingHorizontal={20} paddingVertical={10}>
            <RemoteImage uri={props.uri} width={width - 40} height={width * 1.2} />
        </Button>
    );
};
