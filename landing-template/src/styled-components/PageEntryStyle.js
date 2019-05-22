/*eslint-disable no-unused-vars*/
import styled from "styled-components";
// import * as Variables from "./styled-components/VariableStyle";

export const EntryWrap = styled.div`
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
    border: 1px solid rgba(255,255,255,0.5);
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;

export const EntryLogo = styled.div`
    display: flex;
    justify-content: center;
    align-self: flex-start;
    width: 30%;
    height: 100px;
    background-color: rgba(255,255,255,0.5);
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;

export const EntryCall = styled.div`
    display: flex;
    align-self: flex-start;
    margin-right: 0;
    margin-left: auto;
    width: 30%;
    height: 100px;
    background-color: rgba(255,255,255,0.5);
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
    background-color: rgba(255,255,255,0.35);
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;

export const EntryKnowMore = styled.div`
    display: flex;
    align-self: center;
    width: 100%;
    height: 30%;
    background-color: rgba(255,255,255,0.5);
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;
/*eslint-enable no-unused-vars*/