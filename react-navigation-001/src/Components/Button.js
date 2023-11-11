import React from 'react';
import { Pressable } from 'react-native';

// export class Button extends React.Component {
//     render() {
//         const { onPress, hitSlop, children } = this.props;
//         return (
//             <Pressable onPress={onPress} hitSlop={hitSlop ?? { left: 0, right: 0, top: 0, bottom: 0 }}>
//                 {children}
//             </Pressable>
//         );
//     }
// }

export const Button = (props) => {
    return (
        <Pressable onPress={props.onPress} hitSlop={hitSlop ?? { left: 0, right: 0, top: 0, bottom: 0 }}>
            {props.children}
        </Pressable>
    );
};
