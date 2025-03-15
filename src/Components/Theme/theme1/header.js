import styled from "styled-components";

export const HeaderContainer = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    padding: 10px 2px;
    border-radius: 12px;
    width: 100%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    z-index: 3;
`;

export const ContentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-radius: 30px;
    height: 25px;
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
    color: ${(props) => props.color};
`;

export const MeuSide = styled.img`
    width: 15px;
`;

export const HeaderRight = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;
`;

export const Meja = styled.div`
    background-color: ${(props) => props.color};
    color: #ffffff;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 10px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: 0.3s;
`;

export const CartProfilContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const Icon = styled.svg`
  width: 30px;
  height: 30px;
  fill: ${(props) => props.color || "black"};
  cursor: pointer;
`;