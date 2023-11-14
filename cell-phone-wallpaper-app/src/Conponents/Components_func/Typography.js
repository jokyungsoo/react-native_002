import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';
import PropTypes from 'prop-types';

// export class Typography extends React.Component {
//     render() {
//         const { fontSize, color, children } = this.props;
//         return <RNText style={{ color: color, fontSize: fontSize }}>{children}</RNText>;
//     }
// }

export const Typography = (props) => {
    return (
        <RNText
            style={{
                color: props.color,
                fontSize: props.fontSize,
            }}
        >
            {props.children}
        </RNText>
    );
};

Typography.propTypes = {
    color: PropTypes.string,
    fontSize: PropTypes.number.isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};
