import styled from "styled-components";

export const PayementContainer = styled.div`
    height: 95vh;
    font-family: "Inter", sans-serif;
    padding: 20px;
    background: #f9f9f9;
`;

export const Title = styled.p`
    font-size: 16px;
    font-weight: 600;
    text-align: center;
`;

export const Content = styled.div`
    background: #f2f2f7;
    margin-top: 60px;
    border-radius: 30px;
`;

export const IconCheckContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -50px;

`;

export const IconCheck = styled.img`
    width: 80px;
    background: #f9f9f9;
    padding: 10px;
    border-radius: 60px;
`;

export const AmountContainer = styled.div`
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    margin-top: -20px;
`;

export const TotalPrice = styled.p`
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    margin-top: 10px;
`;

export const DetailContainr = styled.div`
    border-top: 2px dashed #000000;
    padding: 10px 10px 30px 10px;
`;

export const Detail = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;

export const TypographLeft = styled.p`
    font-size: 16px;
    font-size: 400;
    text-align: left;
`;
export const TypographRight = styled.p`
    font-size: 16px;
    font-weight: 600;
    text-align: right;
`;
export const TypographCenter = styled.p`
    font-size: 16px;
    font-weight: 600;
    text-align: center;
`;

export const ListItemContainer = styled.div`
    border-top: 1px dashed #000000;
    padding: 10px;
`;

export const ListItem = styled.div`
    display: grid;
    gap: 10px;
`;

export const Item = styled.div`
    font-size: 14px;
    font-weight: 400;
    text-align: left;
`;

export const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;

export const Qty = styled.p`
    font-size: 12px;
    font-weight: 400;
    text-align: left;
`;

export const Total = styled.p`
    font-size: 14px;
    font-weight: 600;
`;

export const CodeTransaksi = styled.div`
    border-top: 2px dashed #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 10px 30px 10px;
    gap: 10px;
`;
export const Copy = styled.img`
    cursor: pointer;
`;

export const ButtonCLose = styled.button`
    width: 100%;
    border-radius: 10px;
    margin-top: 20px;
    height: 40px;
    border: none;
    background: #2563EB;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;