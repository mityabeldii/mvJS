import React from 'react'
import styled from "styled-components";

let RectangleBlockFirst = () => <RectangleBlock bgColorStyle={`purple`} />
let RectangleBlockSecond = () => <RectangleBlock bgColorStyle={`marine`} />
let RectangleBlockThird = () => <RectangleBlock bgColorStyle={`dark-blue`} />

const RectangleBlock = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.bgColorStyle}
`;

export default [RectangleBlockFirst, RectangleBlockSecond, RectangleBlockThird];