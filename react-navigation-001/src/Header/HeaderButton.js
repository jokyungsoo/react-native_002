import React from 'react';
import { Button } from '../Components/Button';
import { Icons } from '../Components/Icons';

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
