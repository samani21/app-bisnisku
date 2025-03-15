import styled from "styled-components";

export const CategorieContainer = styled.div`
    color: ${(props) => props?.color};
`;

export const Title = styled.h2`
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
    color: ${(props) => props.color};
    text-align: center;
`;

export const SubTitle = styled.p`
    font-size: 14px;
    color: #6c757d;
    max-width: 300px;
    margin: 0 auto 20px;
    text-align: center;
`;

export const Header = styled.div`
    padding: 10px;
`;

export const Content = styled.div`

    padding: 10px;
    gap: 10px;
`;

export const ListCategorie = styled.div`
    /* width: 100%;
    display: grid;
    gap: 10px; */
    list-style: none;
    padding: 0;
`;

export const Category = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 15px;
    background: #fff;
    margin-bottom: 10px;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    transition: 0.3s;
    height: 24px;
    cursor: pointer;
    &:hover{
        background-color: #f4f4f4;
        border-color: #2C3E50;
        .icon-right{
            color: #1F2937;
            transform: translateX(5px);
        }
    }
`;


export const Icon = styled.p`
    color: ${(props) => props?.color_text};
    font-size: 18px;
    transition: 0.3s;
`;