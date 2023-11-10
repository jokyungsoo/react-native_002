import React from 'react';
import { View } from 'react-native';
import { Badge } from './Badge';
import { Icons } from './Icons';

export class TabActions extends React.Component {
    render() {
        return (
            <Badge fontsize={10}>
                <Icons name={this.props.Iconname} size={20} color="black"></Icons>
            </Badge>
        );
    }
}
