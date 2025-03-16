import React from 'react'
import { HargaContainer, InfoItem, Item, ListProduct, NameItem, Ovelay, ProductContainer } from '../../../../Components/Theme/theme1/Product';
const menuItems = [
    // Makanan
    { id: 1, name: "Nasi Goreng Spesial", price: 25000, category: "Makanan", image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" },
    // { id: 2, name: "Ayam Geprek Sambal Matah", price: 22000, category: "Makanan", image: "https://images.pexels.com/photos/15659832/pexels-photo-15659832.jpeg" },
    // { id: 3, name: "Mie Ayam Bakso", price: 20000, category: "Makanan", image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg" },
    // { id: 4, name: "Ikan Bakar Rica-Rica", price: 30000, category: "Makanan", image: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg" },
    // { id: 5, name: "Soto Ayam Lamongan", price: 18000, category: "Makanan", image: "https://images.pexels.com/photos/4669267/pexels-photo-4669267.jpeg" },

    // // Minuman
    // { id: 6, name: "Es Teh Manis", price: 5000, category: "Minuman", image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg" },
    // { id: 7, name: "Es Jeruk Segar", price: 8000, category: "Minuman", image: "https://images.pexels.com/photos/15509934/pexels-photo-15509934.jpeg" },
    // { id: 8, name: "Kopi Tubruk", price: 10000, category: "Minuman", image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg" },
    // { id: 9, name: "Thai Tea Boba", price: 15000, category: "Minuman", image: "https://images.pexels.com/photos/12079183/pexels-photo-12079183.jpeg" },
    // { id: 10, name: "Jus Alpukat", price: 12000, category: "Minuman", image: "https://images.pexels.com/photos/3779756/pexels-photo-3779756.jpeg" },

    // // Paket Hemat
    // { id: 11, name: "Paket Nasi + Ayam", price: 25000, category: "Paket Hemat", image: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg" },
    // { id: 12, name: "Paket Nasi + Ikan", price: 28000, category: "Paket Hemat", image: "https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg" },
    // { id: 13, name: "Paket Berdua", price: 50000, category: "Paket Hemat", image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg" },
    // { id: 14, name: "Paket Keluarga", price: 120000, category: "Paket Hemat", image: "https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg" },
    // { id: 15, name: "Paket Hemat Ayam Geprek", price: 20000, category: "Paket Hemat", image: "https://images.pexels.com/photos/3219487/pexels-photo-3219487.jpeg" },

    // // Dessert
    // { id: 16, name: "Martabak Manis Coklat Keju", price: 25000, category: "Dessert", image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg" },
    // { id: 17, name: "Pisang Coklat Keju", price: 15000, category: "Dessert", image: "https://images.pexels.com/photos/4110001/pexels-photo-4110001.jpeg" },
    // { id: 18, name: "Pudding Coklat", price: 12000, category: "Dessert", image: "https://images.pexels.com/photos/3991877/pexels-photo-3991877.jpeg" },
    // { id: 19, name: "Es Krim Vanilla", price: 10000, category: "Dessert", image: "https://images.pexels.com/photos/1650627/pexels-photo-1650627.jpeg" },
    // { id: 20, name: "Brownies Lumer", price: 18000, category: "Dessert", image: "https://images.pexels.com/photos/3026805/pexels-photo-3026805.jpeg" },

    // // Makanan Sehat
    // { id: 21, name: "Salad Buah", price: 25000, category: "Makanan Sehat", image: "https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg" },
    // { id: 22, name: "Salad Sayur", price: 22000, category: "Makanan Sehat", image: "https://images.pexels.com/photos/4398180/pexels-photo-4398180.jpeg" },
    // { id: 23, name: "Smoothie Bowl", price: 30000, category: "Makanan Sehat", image: "https://images.pexels.com/photos/1893563/pexels-photo-1893563.jpeg" },
    // { id: 24, name: "Granola & Yogurt", price: 28000, category: "Makanan Sehat", image: "https://images.pexels.com/photos/3872370/pexels-photo-3872370.jpeg" },
    // { id: 25, name: "Jus Detox Hijau", price: 15000, category: "Makanan Sehat", image: "https://images.pexels.com/photos/5908082/pexels-photo-5908082.jpeg" }
];

const Product = () => {
    const formatRupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0, // Tanpa desimal
        }).format(number);
    };
    return (
        <ProductContainer>
            <ListProduct>
                {
                    menuItems?.map((m, i) => (
                        <Item key={i} image={m?.image}>
                            <Ovelay />
                            <InfoItem>
                                <NameItem>
                                    {m?.name}
                                </NameItem>
                                <HargaContainer>
                                    {formatRupiah(m?.price)}
                                </HargaContainer>
                            </InfoItem>
                        </Item>
                    ))
                }
            </ListProduct>
        </ProductContainer>
    )
}

export default Product
