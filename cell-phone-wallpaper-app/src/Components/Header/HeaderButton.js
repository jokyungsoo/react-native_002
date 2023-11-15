import React from 'react';
import { Button } from '../Components_func/Button';
import { Icons } from '../Components_func/Icons';

export class HeaderButton extends React.Component {
    render() {
        const { onPress, IconName } = this.props;
        return (
            <Button onPress={onPress}>
                <Icons name={IconName} size={28} color="black" />
            </Button>
        );
    }
}
