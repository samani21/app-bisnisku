import styled from "styled-components";

export const NavbarContainer = styled.div`
    position: fixed;
    height: 40px;
    bottom: 0px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: ${(props) => props.color || "black"};
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    z-index: 10;
`;

export const IconNavbar = styled.svg`
    width: 30px;
    height: 30px;
    fill: ${(props) => props.color || "black"};
    cursor: pointer;
    &.active{
        background: ${(props) => props.colorActive || "black"};
        position: relative;
        top: -10px;
        padding: 5px;
        border-radius: 100px;
        color: ${(props) => props.iconActive || "black"};
    }
`