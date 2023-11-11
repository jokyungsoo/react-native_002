import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Typography } from './Typography';

// export class Badge extends React.Component {
//     render() {
//         const { children, fontSize } = this.props;
//         return (
//             <View>
//                 <View>
//                     {children}
//                     <View style={styles.td_view}>
//                         <Typography fontSize={fontSize} color={'white'}>
//                             N
//                         </Typography>
//                     </View>
//                 </View>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     td_view: {
//         width: 16,
//         height: 16,
//         borderRadius: 12,
//         backgroundColor: 'red',
//         justifyContent: 'center',
//         alignItems: 'center',
//         position: 'absolute',
//         right: -5,
//         top: -5,
//     },
// });

export const Badge = (props) => {
    return (
        <View>
            {props.children}
            <View
                style={[
                    {
                        width: 16,
                        height: 16,
                        borderRadius: 8,
                        backgroundColor: 'red',
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    {
                        position: 'absolute',
                        right: -5,
                        left: -5,
                    },
                ]}
            >
                <Typography fontSize={10} color="white"></Typography>
            </View>
        </View>
    );
};
