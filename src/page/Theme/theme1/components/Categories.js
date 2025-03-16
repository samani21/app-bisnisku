import React from 'react'
import { CategorieContainer, Category, Content, Header, Icon, ListCategorie, SubTitle, Title } from '../../../../Components/Theme/theme1/Categories'


const categories = [
    {
        name: "Makanan"
    },
    {
        name: "Minuman"
    },
    {
        name: "Paket Hemat & Menu Spesial"
    },
    {
        name: "Dessert & Jajanan Manis"
    },
    {
        name: "Makanan Sehat"
    },
]

const Categories = (props) => {
    const { dataThme } = props
    return (
        <CategorieContainer >
            <Header>
                <Title color={dataThme?.color_text}>
                    CATEGORIES
                </Title>
                <SubTitle color={dataThme?.color_text}>
                    Temukan makanan lezat, minuman segar, dan paket hemat spesial untuk menemani harimu!
                </SubTitle>
            </Header>
            <Content>
                <ListCategorie>
                    {
                        categories?.map((c, i) => (
                            <Category key={i} color={dataThme?.color_text}>
                                {c?.name}
                                <Icon color={dataThme?.color} className='icon-right'>
                                    ➡
                                </Icon>
                            </Category>
                        ))
                    }
                </ListCategorie>
            </Content>
        </CategorieContainer>
    )
}

export default Categories
