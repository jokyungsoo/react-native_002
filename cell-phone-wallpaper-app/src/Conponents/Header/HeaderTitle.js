import React from 'react';

import { Typography } from '../Components_func/Typography';

// export class HeaderTitle extends React.Component {
//     render() {
//         return <Typography fontSize={18}>{this.props.Title}</Typography>;
//     }
// }

export const HeaderTitle = (props) => {
    return <Typography fontSize={20}>{props.Title}</Typography>;
};
