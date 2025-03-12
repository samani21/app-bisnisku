import styled from "styled-components";

export const HeaderContainer = styled.div`
    position: relative;
    height: 30px;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-top: 10px;
`;

export const ContentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: 2px solid ${(props) => props.color};
    border-radius: 30px;
    padding: 10px 20px 10px 20px;
`;

export const MenuContainer = styled.div`
    background: white;
    border-radius: 10px;
    border: 1px solid ${(props) => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 0px 20px 0px 20px;
    height: 30px;
    cursor: pointer;
    @media (max-width: 500px) {
        display: none;
    }
`;

export const ImageLogo = styled.img`
    width: 30px;
`;

export const TextMenu = styled.p`
    font-family: "Roboto", sans-serif;
    font-size: 13px;
    font-weight: 600;
`;

export const MeuSide = styled.img`
    width: 15px;
`;

export const HeaderRight = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;

export const Meja = styled.div`
    font-family: "Roboto", sans-serif;
    font-size: 13px;
    font-weight: 600;
    background: ${(props) => props.color};
    color: white;
    border-radius: 20px;
    padding: 10px;
`;

export const CartProfilContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const Icon = styled.img`
    width: 25px;
    cursor: pointer;
    &.active{
        background: ${(props) => props.color};
        border-radius: 20px;
    }
`;