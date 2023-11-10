import React from 'react';
import { View } from 'react-native';

export class Spacer extends React.Component {
    render() {
        const { Horizontal, space } = this.props;
        if (Horizontal) {
            return <View style={{ marginLeft: space }} />;
        }
        return <View style={{ marginTop: space }} />;
    }
}
