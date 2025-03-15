import styled from "styled-components";

export const ProductContainer = styled.div`
    display: grid;
    padding: 10px;
`;

export const ListProduct = styled.div`
    display: grid;
    gap: 10px;
`;

export const Item = styled.div`
    background-image: url(${(props) => props?.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100px;
    border-radius: 25px;
    cursor: pointer;
    &:hover{
        background-size: 120%;
    }
`;

export const Ovelay = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
    position: relative;
    height: 100px;
    width: 100%;
    border-radius: 25px;
    z-index: 1;
    transform: scale(-1);
`;

export const InfoItem = styled.div`
    position: relative;
    z-index: 2;
    height: 100px;
    top: -107px;
    border-radius: 30px;
    padding-right: 10px;
`;

export const NameItem = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: white;
    text-align: right;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    position: relative;
`;


export const HargaContainer = styled.div`
    background: #e74d3c8a;
    position: relative;
    top: 16px;
    border-bottom-left-radius: 25px;
    width: 150px;
    padding-left: 15px;
    left: 2px;
    font-size: 14px;
    font-weight: 600;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;