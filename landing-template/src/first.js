import React from 'react'
import styled from "styled-components";

const TryToday = () => <p>Попробуйте сегодня</p>;

const RectangleBlockFirst = () => <RectangleBlock bgColorStyle = {`purple`} />;
const RectangleBlockSecond = () => < RectangleBlock bgColorStyle = {`green`}>
    <WrapLevelOne heightStyle = {`70%`} borderColor = {`yellow`}/>
    <WrapLevelOne heightStyle = {`30%`} borderColor = {`red`}>
        <WrapLevelTwo widthStyle = {`50%`}>
        <TryToday/>
        </WrapLevelTwo>
        <WrapLevelTwo widthStyle = {`30%`}/>
        <WrapLevelTwo widthStyle = {`20%`}/>
    </WrapLevelOne>
</RectangleBlock>
const RectangleBlockThird = () => < RectangleBlock bgColorStyle = {`blue`}/>


const RectangleBlock = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.bgColorStyle}
`;

const WrapLevelOne = styled.section `
    display: flex;
    width: 95%;
    height: ${props => props.heightStyle};
    border: 1px solid ${props => props.borderColor};;
`;

const WrapLevelTwo = styled.div `
    display: flex;
    width: ${props => props.widthStyle};
    height: 100%;
    border: 1px solid blue;
`;

export default [RectangleBlockFirst, RectangleBlockSecond, RectangleBlockThird];