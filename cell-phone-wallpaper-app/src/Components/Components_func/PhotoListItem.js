import React, { useCallback, useState } from 'react';
import { Animated, StyleSheet, useWindowDimensions } from 'react-native';
import { Button } from './Button';
import { RemoteImage } from './RemoteImage';
import { useNavigation } from '@react-navigation/native';

export const PhotoListItem = (props) => {
    //props.uri
    const { width } = useWindowDimensions();
    const navigation = useNavigation();
    const [animValue] = useState(new Animated.Value(0));

    const onPressItem = useCallback(() => {
        navigation.navigate('Img_Detaiㅣe', { uri: props.uri });
    }, []);

    const onPressIn = useCallback(() => {
        console.log('onPressIn');
        Animated.timing(animValue, {
            duration: 200,
            toValue: 1,
        }).start();
    }, []);

    const onPressOut = useCallback(() => {
        console.log('onPressOut');
        Animated.timing(animValue, {
            duration: 200,
            toValue: 0,
        }).start();
    }, []);

    const scale = animValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1.0, 0.95],
    });

    return (
        <Button
            onPress={onPressItem}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            paddingHorizontal={20}
            paddingVertical={10}
        >
            <Animated.View style={{ transform: [{ scale: scale }] }}>
                <RemoteImage
                    style={{
                        transform: [{ scale: 1 }],
                    }}
                    uri={props.uri}
                    width={width - 40}
                    height={width * 1.2}
                />
            </Animated.View>
        </Button>
    );
};
