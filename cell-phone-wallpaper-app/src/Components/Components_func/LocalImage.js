import React from 'react';
import { Image as RNImage } from 'react-native';
import PropTypes from 'prop-types';

// export class LocalImage extends React.Component {
//     render() {
//         const { localAsset, style, width, height } = this.props;
//         return <RNImage source={localAsset} style={[style, { width, height }]} />;
//     }
// }

export const LocalImage = (props) => {
    return <RNImage source={props.LocalAsset} style={[props.style, { width: props.width, height: props.height }]} />;
};

// // 프로퍼티 타입 검사 추가 (예시)
// LocalImage.propTypes = {
//     localAsset: PropTypes.oneOfType([PropTypes.object, PropTypes.number]).isRequired, // 이미지 소스는 객체 혹은 리콰이어된 숫자(로컬 이미지)일 수 있습니다.
//     style: PropTypes.object, // 스타일은 객체입니다.
//     width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // 너비와 높이는 숫자 혹은 문자열(예: '%' 단위)이 될 수 있습니다.
//     height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// };

// // defaultProps를 설정할 수도 있습니다. (옵션)
// LocalImage.defaultProps = {
//     style: {},
//     width: '100%', // 기본 너비 값을 설정
//     height: '100%', // 기본 높이 값을 설정
// };
