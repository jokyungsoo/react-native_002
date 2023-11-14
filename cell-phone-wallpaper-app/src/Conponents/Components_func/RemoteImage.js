import React from 'react';
import { Image as RNImage } from 'react-native';

// export class RemoteImage extends React.Component {
//     render() {
//         //아래는 변수에 this.props의 값을 넣어준거임
//         const { uri, style, width, height } = this.props;
//         return (
//             <RNImage
//                 /*중괄호 두개임 조심..!! */
//                 source={{ uri }}
//                 style={[style, { width, height }]}
//             />
//         );
//     }
// }

export const RemoteImage = (props) => {
    return <RNImage source={{ uri: props.uri }} style={[props.style, { width: props.width, height: props.height }]} />;
};
