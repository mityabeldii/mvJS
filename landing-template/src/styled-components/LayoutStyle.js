import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100vw;
    height: 100vh;
        @media (min-width: 320px) and (max-width: 480px) {
            
        }`;

export const Header = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    width: 100vw;
    height: 8vh;
    position: fixed;
    top: 0;
    transition: 0.2s;
    visibility: ${props => props.visible ? `visible`: `hidden`};
        @media (min-width: 320px) and (max-width: 480px) {
            
        }`;

export const Block = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: 0.2s;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.color};
        @media (min-width: 320px) and (max-width: 480px) {
            
        }`;

export const RectangleBlock = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.bgColorStyle};
    @media (min-width: 320px) and (max-width: 768px) {
            
        }`;