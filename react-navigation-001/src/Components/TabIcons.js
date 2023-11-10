import React from 'react';
import { View } from 'react-native';
import { Badge } from './Badge';
import { Icons } from './Icons';
import { Ionicons } from '@expo/vector-icons';

export class TabIcons extends React.Component {
    render() {
        const { IconName, visibleBadge } = this.props;
        // visibleBadge라는 옵션을 추가해주면 badge를 추가해줄수 있다.
        if (visibleBadge) {
            return (
                <View>
                    <Badge fontsize={10}>
                        <Icons name={IconName} size={20} color={'black'} />
                    </Badge>
                </View>
            );
        }
        return (
            <View>
                <Icons name={IconName} size={20} color={'black'} />
            </View>
        );
    }
}
