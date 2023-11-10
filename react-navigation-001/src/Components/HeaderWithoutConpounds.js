import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { Icons } from './Icons';
import { Button } from './Button';

// import source file
import { Spacer } from './Spacer';
import { Typography } from './Typography';

export class HeaderWithoutComponents extends React.Component {
    render() {
        const { leftIcon, title, rightIcon } = this.props;
        return (
            <SafeAreaInsetsContext.Consumer>
                {(inset) => (
                    <View style={{ paddingTop: inset.top }}>
                        <View style={styles.Header_view}>
                            <Spacer Horizontal={true} space={12}></Spacer>

                            <View style={styles.left_right_view}>
                                <View style={styles.div_view}>
                                    {leftIcon && (
                                        <Button onPress={leftIcon.onPress}>
                                            <Icons name={leftIcon.IconName} size={28} />
                                        </Button>
                                    )}
                                    <Typography fontsize={18}>{title}</Typography>
                                    {rightIcon && (
                                        <Button onPress={rightIcon.onPress}>
                                            <Icons name={rightIcon.IconName} size={28} />
                                        </Button>
                                    )}
                                </View>
                            </View>
                            <Spacer Horizontal={true} space={12}></Spacer>
                        </View>
                    </View>
                )}
            </SafeAreaInsetsContext.Consumer>
        );
    }
}

const styles = StyleSheet.create({
    Header_view: {
        width: Dimensions.get('window').width,
        height: 56,
        flexDirection: 'row',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },

    left_right_view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    div_view: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
});
