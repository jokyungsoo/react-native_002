import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { Spacer } from '../Components/Spacer';
import { HeaderTitle } from './HeaderTitle';
import { HeaderButton } from './HeaderButton';
import { HeaderGroup } from './HeaderGroup';

const { width } = Dimensions.get('window'); // 화면의 너비를 가져옴
export class Header extends React.Component {
    render() {
        return (
            <SafeAreaInsetsContext.Consumer>
                {(insets) => (
                    <View style={{ paddingTop: insets.top }}>
                        <View
                            style={{
                                width: width,
                                flexDirection: 'row',
                                height: 56,
                                borderBottomColor: 'grey',
                                borderBottomWidth: 1,
                                alignItems: 'center',
                            }}
                        >
                            <Spacer Horizontal={true} space={12} />
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                {this.props.children}
                            </View>
                            <Spacer Horizontal={true} space={12} />
                        </View>
                    </View>
                )}
            </SafeAreaInsetsContext.Consumer>
        );
    }
}

Header.Title = HeaderTitle;
Header.Button = HeaderButton;
Header.Group = HeaderGroup;
