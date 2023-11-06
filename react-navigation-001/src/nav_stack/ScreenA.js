import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class ScreenA extends React.Component {
    render() {
        // 화면을 지정해준다. 공간을 준다.
        return (
            <View style={styles.main_view}>
                <Text> Screen A 화면 입니다.</Text>
                <Button
                    title="ScreenB"
                    onPress={() => {
                        // console.log('Screen B');
                        // ###############################################################################
                        // navigate: 지정된 스크린으로 이동합니다. 만약 스크린이 이미 스택에 있으면 그곳으로 돌아갑니다.
                        // push: 항상 새로운 스크린을 스택에 추가합니다, 심지어 같은 스크린 이름이라도 말이죠.
                        // goBack: 스택에서 이전 스크린으로 돌아갑니다.
                        // popToTop: 스택의 맨 처음 스크린으로 돌아갑니다.
                        // ###############################################################################
                        // this.props.navigation.navigate('ScreenB', { value: 'from A' });
                        // ScreenC 로 이동, 벨류는 그냥 태그값
                        this.props.navigation.navigate('ScreenB', { value: 'from a' });
                    }}
                />
                <Button
                    title="ScreenC"
                    onPress={() => {
                        this.props.navigation.navigate('NestedNavigator', { screen: 'ScreenC' });
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

export default ScreenA;
