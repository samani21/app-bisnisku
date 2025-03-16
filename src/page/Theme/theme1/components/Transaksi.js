import React, { useState } from 'react'
import { CardTransaksi, Details, Header, Icon, InputSearch, ListContent, LogoBisnis, Menu, MenuContainer, NameBisnis, Search, SearchContainer, Tanggal, Title, TitleTransaksi, Total, TransaksiContainer } from '../../../../Components/Theme/theme1/Transaksi'
import { IconSearch, Logo } from '../../../../assets'

const history = [
    {
        "kode_transaksi": "TRX-20250310-001",
        "nama_usaha": "Warung Sederhana",
        "tanggal": "2025-03-10",
        "total_pembayaran": 150000,
        "logo": Logo,
        "items": [
            { "nama": "Nasi Goreng Spesial", "kategori": "Makanan", "harga": 35000, "qty": 2, "ukuran": "Besar", "type": "Makanan Berat" },
            { "nama": "Es Teh Manis", "kategori": "Minuman", "harga": 5000, "qty": 1, "ukuran": "Sedang", "type": "Dingin" },
            { "nama": "Paket Hemat Ayam Geprek", "kategori": "Paket Hemat & Menu Spesial", "harga": 30000, "qty": 1, "ukuran": "Besar", "type": "Makanan Berat" }
        ]
    },
    {
        "kode_transaksi": "TRX-20250311-002",
        "nama_usaha": "Kedai Kopi Mantap",
        "tanggal": "2025-03-11",
        "total_pembayaran": 85000,
        "logo": Logo,
        "items": [
            { "nama": "Kopi Susu", "kategori": "Minuman", "harga": 25000, "qty": 1, "ukuran": "Sedang", "type": "Kopi" },
            { "nama": "Cheesecake", "kategori": "Dessert & Jajanan Manis", "harga": 30000, "qty": 1, "ukuran": "Kecil", "type": "Manis" },
            { "nama": "Granola Bowl", "kategori": "Makanan Sehat", "harga": 30000, "qty": 1, "ukuran": "Sedang", "type": "Sehat" }
        ]
    },
    {
        "kode_transaksi": "TRX-20250312-003",
        "nama_usaha": "Roti & Kue Enak",
        "tanggal": "2025-03-12",
        "total_pembayaran": 75000,
        "logo": Logo,
        "items": [
            { "nama": "Tiramisu Cake", "kategori": "Dessert & Jajanan Manis", "harga": 40000, "qty": 1, "ukuran": "Sedang", "type": "Manis" },
            { "nama": "Kopi Hitam", "kategori": "Minuman", "harga": 15000, "qty": 1, "ukuran": "Kecil", "type": "Kopi" },
            { "nama": "Donat Coklat", "kategori": "Dessert & Jajanan Manis", "harga": 20000, "qty": 1, "ukuran": "Kecil", "type": "Manis" }
        ]
    },
    {
        "kode_transaksi": "TRX-20250313-004",
        "nama_usaha": "Healthy Bites",
        "tanggal": "2025-03-13",
        "total_pembayaran": 120000,
        "logo": Logo,
        "items": [
            { "nama": "Quinoa Salad", "kategori": "Makanan Sehat", "harga": 50000, "qty": 1, "ukuran": "Sedang", "type": "Sehat" },
            { "nama": "Jus Detox Hijau", "kategori": "Minuman", "harga": 25000, "qty": 1, "ukuran": "Sedang", "type": "Dingin" },
            { "nama": "Oatmeal Bowl", "kategori": "Makanan Sehat", "harga": 45000, "qty": 1, "ukuran": "Sedang", "type": "Sehat" }
        ]
    }
];


const menus = [
    'Riwayat',
    'Tagihan'
]

const Transaksi = (props) => {
    const { dataThme, handelPayment } = props;
    const [menuActive, setMenuActive] = useState("Riwayat")
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

    return (
        <TransaksiContainer>
            <Header>
                <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m10 16l-4-4m0 0l4-4m-4 4h12" />
                </Icon>
                <Title>
                    Transaksi
                </Title>
            </Header>
            <SearchContainer>
                <Search src={IconSearch} />
                <InputSearch placeholder='Search by name, date' />
            </SearchContainer>
            <MenuContainer>
                {
                    menus?.map((m, i) => (
                        <Menu key={i} className={menuActive === m ? "active" : ""} onClick={() => setMenuActive(m)}>
                            {m}
                        </Menu>
                    ))
                }
            </MenuContainer>
            <ListContent>
                {
                    history?.map((h, i) => (
                        <CardTransaksi key={i} onClick={() => handelPayment(h)}>
                            <LogoBisnis src={h?.logo} />
                            <Details>
                                <Tanggal>
                                    <FormatTanggal date={h?.tanggal} />
                                </Tanggal>
                                <TitleTransaksi>Pembayaran</TitleTransaksi>
                                <NameBisnis>{h?.nama_usaha}</NameBisnis>
                                <Total>{formatRupiah(h?.total_pembayaran)}</Total>
                            </Details>
                        </CardTransaksi>
                    ))
                }
            </ListContent>
        </TransaksiContainer>
    )
}

export default Transaksi
