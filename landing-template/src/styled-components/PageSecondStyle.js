import styled from "styled-components";
// import * as Variables from "./styled-components/VariableStyle";

export const WrapLevelOne = styled.section `
    display: flex;
    width: 95%;
    height: ${props => props.heightStyle};
    border: 1px solid ${props => props.borderColor};
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;

export const WrapLevelTwo = styled.div `
    display: flex;
    width: ${props => props.widthStyle};
    height: 100%;
    border: 1px solid blue;
    p {
        font-size: 3rem;
        text-align: center;
        color: blue;
    }
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;