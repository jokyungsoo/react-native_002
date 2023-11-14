import React from 'react';
import { View } from 'react-native';

// export class Spacer extends React.Component {
//     render() {
//         const { Horizontal, space } = this.props;
//         if (Horizontal) {
//             return <View style={{ marginLeft: space }} />;
//         }
//         return <View style={{ marginTop: space }} />;
//     }
// }

export const Spacer = (props) => {
    // 3항 연산자
    // return props.hrizontal ? (
    //     <View style={{maginLeft: props.space}}/>
    // ) : <View style={{marginTomp: props.space}}></View>
    if (props.Horizontal) {
        return <View style={{ marginLeft: props.space }}></View>;
    }
    return <View style={{ marginTop: props.space }}></View>;
};
