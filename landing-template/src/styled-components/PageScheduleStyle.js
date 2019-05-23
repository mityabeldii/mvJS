/*eslint-disable no-unused-vars*/
import styled from "styled-components";
import * as Variables from "./VariableStyle";
console.log(Variables)

export const WrapScheduleTable = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 90%;
    height: 90%;
    border: 1px solid ${Variables._$white};
    p {
        width: 100%;
        font-size: 2rem;
        height: auto;
        margin: 0.5rem;
        text-transform: uppercase;
        text-align: center;
    }
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;

export const ScheduleTableHead = styled.div `
    display: flex;
    width: 100%;
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;

export const ScheduleTableHeadItem = styled.div `
    display: flex;
    width: calc( 100% / 7 );
    border: 1px solid yellow;
    p {
        margin: 0.5rem;
    }
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;

export const ScheduleTable = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;

export const ScheduleTableRow = styled.div `
    display: flex;
    height: 50px;
    width: 100%;
    border: 1px solid red;
    p {
        
    }
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;

export const ScheduleTableItem = styled.div `
    display: flex;
    width: calc( 100% / 8 );
    border: 1px solid blue;
    p {
        margin: 0.5rem;
        font-size: 1rem;
        text-transform: lowercase;
    }
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;
/*eslint-enable no-unused-vars*/