/*eslint-disable no-unused-vars*/
import styled from "styled-components";
import * as Variables from "./VariableStyle";

export const EntryWrap = styled.div`
    /* ${Variables.$flex_center}; */
    display: flex;
    width: 95%;
    height: 100%;
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;

export const EntryBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    height: 100%;
    border: 1px solid ${Variables.$white50};
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;

export const EntryLogo = styled.div`
    display: flex;
    justify-content: center;
    align-self: flex-start;
    width: 30%;
    height: 100px;
    background-color: ${Variables.$white50};
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;

export const EntryCall = styled.div`
    display: flex;
    align-self: flex-start;
    margin-right: 0;
    margin-left: auto;
    width: 30%;
    height: 100px;
    background-color: ${Variables.$white50};
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;

export const EntryExerciseWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 80%;
    height: 300px;
    border: 1px solid yellow;
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;

export const EntryExercise = styled.div`
    display: flex;
    align-self: center;
    width: 100%;
    height: 70%;
    background-color: ${Variables.$white25};
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;

export const EntryKnowMore = styled.div`
    display: flex;
    align-self: center;
    width: 100%;
    height: 30%;
    background-color: ${Variables.$white50};
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;
/*eslint-enable no-unused-vars*/