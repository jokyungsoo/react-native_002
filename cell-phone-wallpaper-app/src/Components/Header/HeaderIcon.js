import React from 'react';
import { Button } from '../Components_func/Button';
import { Icons } from '../Components_func/Icons';

export const HeaderIcon = (props) => {
    return (
        <Button onPress={props.onPress}>
            <Icons name={props.IconName} size={props.size} color={props.color}></Icons>
        </Button>
    );
};
