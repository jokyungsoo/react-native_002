import React from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';

const COLOR = {
    RESULT: '#4e4c51',
    RESET: '#5f5e62',
    OPERATOR: '#f39c29',
    NUM: '#5c5674',
};

// Button type: 'reset' | 'operator' | 'num'

const Button = ({ text, onPress, flex, type }) => {
    const backgroundColor =
        type === 'reset'
            ? COLOR.RESET
            : type === 'operator'
            ? COLOR.OPERATOR
            : type === 'num'
            ? COLOR.NUM
            : type === 'result'
            ? COLOR.RESULT
            : 'transparent';
    const textStyle = type === 'result' ? { fontSize: 30, color: 'white' } : { fontSize: 25, color: 'white' };
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                flex,
                backgroundColor,
                justifyContent: 'center',
                alignItems: 'center',
                height: type === 'result' ? 80 : 55,
                borderWidth: 0.2,
                borderColor: 'black',
                // paddingVertical: 15,
            }}
            s
        >
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    );
};

export default () => {
    return (
        <View style={{ flex: 1, width: 200 }}>
            <View style={{ flexDirection: 'row', width: '100%' }}>
                <Text type="result" text="0" onPress={() => null} flex={1} />
            </View>

            <View style={{ flexDirection: 'row', width: '100%' }}>
                <Button type="reset" text="AC" onPress={() => null} flex={1} />
                <Button type="reset" text="+/-" onPress={() => null} flex={1} />
                <Button type="reset" text="%" onPress={() => null} flex={1} />
                <Button type="operator" text="/" onPress={() => null} flex={1} />
            </View>

            <View style={{ flexDirection: 'row', width: '100%' }}>
                <Button type="num" text="7" onPress={() => null} flex={1} />
                <Button type="num" text="8" onPress={() => null} flex={1} />
                <Button type="num" text="9" onPress={() => null} flex={1} />
                <Button type="operator" text="X" onPress={() => null} flex={1} />
            </View>
            <View style={{ flexDirection: 'row', width: '100%' }}>
                <Button type="num" text="4" onPress={() => null} flex={1} />
                <Button type="num" text="5" onPress={() => null} flex={1} />
                <Button type="num" text="6" onPress={() => null} flex={1} />
                <Button type="operator" text="-" onPress={() => null} flex={1} />
            </View>
            <View style={{ flexDirection: 'row', width: '100%' }}>
                <Button type="num" text="1" onPress={() => null} flex={1} />
                <Button type="num" text="2" onPress={() => null} flex={1} />
                <Button type="num" text="3" onPress={() => null} flex={1} />
                <Button type="operator" text="+" onPress={() => null} flex={1} />
            </View>
            <View style={{ flexDirection: 'row', width: '100%' }}>
                <Button type="num" text="0" onPress={() => null} flex={2} />
                <Button type="num" text="." onPress={() => null} flex={1} />
                <Button type="operator" text="=" onPress={() => null} flex={1} />
            </View>
            {/* [4 ~ -] */}

            {/* [1 ~ +] */}

            {/* [0 ~ =] */}
        </View>
    );
};
