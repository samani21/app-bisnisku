import React, { useState } from 'react'
import { AmountContainer, ButtonCLose, CodeTransaksi, Content, Copy, Detail, DetailContainr, IconCheck, IconCheckContainer, Item, ListItem, ListItemContainer, PayementContainer, Qty, Title, Total, TotalContainer, TotalPrice, TypographCenter, TypographLeft, TypographRight } from '../../../../Components/Theme/theme1/Payment'
import { IconCheckGreen, IconCopy } from '../../../../assets'

const Payment = (props) => {
    const { payment, setOpenPayment } = props;
    const [copy, setCopy] = useState()
    const formatRupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0, // Tanpa desimal
        }).format(number);
    };

    function FormatTanggal({ date }) {
        const dateString = '2025-03-12';
        const dateObj = new Date(date);

        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat('id-ID', options).format(dateObj);

        return (
            formattedDate
        );
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(payment?.kode_transaksi);
    };
    return (
        <PayementContainer>
            <Title>
                Detail Pembayaran
            </Title>
            <Content>
                <IconCheckContainer>
                    <IconCheck src={IconCheckGreen} />
                </IconCheckContainer>
                <AmountContainer>
                    Amount
                    <TotalPrice>
                        {formatRupiah(payment?.total_pembayaran)}
                    </TotalPrice>
                </AmountContainer>
                <DetailContainr>
                    <Detail>
                        <TypographLeft>Nama Tempat</TypographLeft>
                        <TypographRight>{payment?.nama_usaha}</TypographRight>
                    </Detail>
                    <Detail>
                        <TypographLeft>Jenis</TypographLeft>
                        <TypographRight>Pembayaran</TypographRight>
                    </Detail>
                    <Detail>
                        <TypographLeft>Tanggal</TypographLeft>
                        <TypographRight>
                            <FormatTanggal date={payment?.tanggal} />
                        </TypographRight>
                    </Detail>
                </DetailContainr>
                <ListItemContainer>
                    {
                        payment?.items?.map((item, i) => (
                            <ListItem key={i}>
                                <Item>
                                    {item?.nama}
                                    <TotalContainer>
                                        <Qty>{item?.qty}X  {item?.ukuran} ({item?.type})</Qty>
                                        <Total>{formatRupiah(item?.harga)}</Total>
                                    </TotalContainer>
                                </Item>
                            </ListItem>
                        ))
                    }
                </ListItemContainer>
                <CodeTransaksi>
                    <TypographCenter>
                        {payment?.kode_transaksi}
                    </TypographCenter>
                    <Copy src={IconCopy} onClick={handleCopy} />
                </CodeTransaksi>
            </Content>
            <ButtonCLose onClick={() => setOpenPayment(false)}>Close</ButtonCLose>
        </PayementContainer>
    )
}

export default Payment
