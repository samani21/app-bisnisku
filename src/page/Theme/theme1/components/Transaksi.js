import React, { useState } from 'react'
import { CardTransaksi, Details, Header, Icon, InputSearch, ListContent, LogoBisnis, Menu, MenuContainer, NameBisnis, Search, SearchContainer, Tanggal, Title, TitleTransaksi, Total, TransaksiContainer } from '../../../../Components/Theme/theme1/Transaksi'
import { IconSearch, Logo } from '../../../../assets'

const history = [
    {
        "nama_usaha": "Warung Sederhana",
        "tanggal": "2025-03-10",
        "total_pembayaran": 150000,
        "logo": Logo,
        "items": [
            { "nama": "Nasi Goreng Spesial", "kategori": "Makanan", "harga": 35000, "qty": 2 },
            { "nama": "Es Teh Manis", "kategori": "Minuman", "harga": 5000, "qty": 1 },
            { "nama": "Paket Hemat Ayam Geprek", "kategori": "Paket Hemat & Menu Spesial", "harga": 30000, "qty": 1 }
        ]
    },
    {
        "nama_usaha": "Kedai Kopi Mantap",
        "tanggal": "2025-03-11",
        "total_pembayaran": 85000,
        "logo": Logo,
        "items": [
            { "nama": "Kopi Susu", "kategori": "Minuman", "harga": 25000, "qty": 1 },
            { "nama": "Cheesecake", "kategori": "Dessert & Jajanan Manis", "harga": 30000, "qty": 1 },
            { "nama": "Granola Bowl", "kategori": "Makanan Sehat", "harga": 30000, "qty": 1 }
        ]
    },
    {
        "nama_usaha": "Ayam Bakar Pak Slamet",
        "tanggal": "2025-03-12",
        "total_pembayaran": 120000,
        "logo": Logo,
        "items": [
            { "nama": "Ayam Bakar Komplit", "kategori": "Makanan", "harga": 50000, "qty": 1 },
            { "nama": "Jus Alpukat", "kategori": "Minuman", "harga": 20000, "qty": 2 },
            { "nama": "Paket Hemat Ayam Penyet", "kategori": "Paket Hemat & Menu Spesial", "harga": 50000, "qty": 1 }
        ]
    },
    {
        "nama_usaha": "Resto Vegan Happy",
        "tanggal": "2025-03-13",
        "total_pembayaran": 95000,
        "logo": Logo,
        "items": [
            { "nama": "Salad Buah Segar", "kategori": "Makanan Sehat", "harga": 40000, "qty": 1 },
            { "nama": "Smoothie Bowl", "kategori": "Makanan Sehat", "harga": 35000, "qty": 1 },
            { "nama": "Green Juice", "kategori": "Minuman", "harga": 20000, "qty": 1 }
        ]
    },
    {
        "nama_usaha": "Bakso Malang Pak Joko",
        "tanggal": "2025-03-14",
        "total_pembayaran": 110000,
        "logo": Logo,
        "items": [
            { "nama": "Bakso Campur", "kategori": "Makanan", "harga": 40000, "qty": 2 },
            { "nama": "Es Jeruk", "kategori": "Minuman", "harga": 10000, "qty": 1 },
            { "nama": "Paket Hemat Bakso Urat", "kategori": "Paket Hemat & Menu Spesial", "harga": 60000, "qty": 1 }
        ]
    },
    {
        "nama_usaha": "Roti & Kue Enak",
        "tanggal": "2025-03-15",
        "total_pembayaran": 75000,
        "logo": Logo,
        "items": [
            { "nama": "Tiramisu Cake", "kategori": "Dessert & Jajanan Manis", "harga": 40000, "qty": 1 },
            { "nama": "Kopi Hitam", "kategori": "Minuman", "harga": 15000, "qty": 1 },
            { "nama": "Donat Coklat", "kategori": "Dessert & Jajanan Manis", "harga": 20000, "qty": 1 }
        ]
    },
    {
        "nama_usaha": "Soto Ayam Cak Man",
        "tanggal": "2025-03-16",
        "total_pembayaran": 130000,
        "logo": Logo,
        "items": [
            { "nama": "Soto Ayam", "kategori": "Makanan", "harga": 40000, "qty": 2 },
            { "nama": "Es Kelapa", "kategori": "Minuman", "harga": 20000, "qty": 1 },
            { "nama": "Paket Hemat Soto & Tempe Goreng", "kategori": "Paket Hemat & Menu Spesial", "harga": 70000, "qty": 1 }
        ]
    },
    {
        "nama_usaha": "Kopi Senja",
        "tanggal": "2025-03-17",
        "total_pembayaran": 95000,
        "logo": Logo,
        "items": [
            { "nama": "Cappuccino", "kategori": "Minuman", "harga": 35000, "qty": 1 },
            { "nama": "Brownies Coklat", "kategori": "Dessert & Jajanan Manis", "harga": 30000, "qty": 2 },
            { "nama": "Smoothie Mangga", "kategori": "Minuman", "harga": 30000, "qty": 1 }
        ]
    },
    {
        "nama_usaha": "Bubur Ayam Mang Ujang",
        "tanggal": "2025-03-18",
        "total_pembayaran": 65000,
        "logo": Logo,
        "items": [
            { "nama": "Bubur Ayam Komplit", "kategori": "Makanan", "harga": 35000, "qty": 1 },
            { "nama": "Teh Tarik", "kategori": "Minuman", "harga": 15000, "qty": 2 },
            { "nama": "Pisang Goreng Madu", "kategori": "Dessert & Jajanan Manis", "harga": 15000, "qty": 1 }
        ]
    },
    {
        "nama_usaha": "Healthy Bites",
        "tanggal": "2025-03-19",
        "total_pembayaran": 120000,
        "logo": Logo,
        "items": [
            { "nama": "Quinoa Salad", "kategori": "Makanan Sehat", "harga": 50000, "qty": 1 },
            { "nama": "Jus Detox Hijau", "kategori": "Minuman", "harga": 25000, "qty": 1 },
            { "nama": "Oatmeal Bowl", "kategori": "Makanan Sehat", "harga": 45000, "qty": 1 }
        ]
    }
]

const menus = [
    'Riwayat',
    'Tagihan'
]

const Transaksi = (props) => {
    const { dataThme } = props;
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
                        <CardTransaksi>
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
