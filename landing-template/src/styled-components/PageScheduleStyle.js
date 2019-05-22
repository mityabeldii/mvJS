/*eslint-disable no-unused-vars*/
import styled from "styled-components";
// import * as Variables from "./styled-components/VariableStyle";

export const WrapScheduleTable = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 90%;
    height: 90%;
    border: 1px solid red;
    p {
        width: 100%;
        font-size: 2rem;
        height: auto;
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
        
    }
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;

export const ScheduleTable = styled.div `
    display: flex;
    width: 100%;
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;
/*eslint-enable no-unused-vars*/