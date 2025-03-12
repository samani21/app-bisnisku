import React from 'react'
import { CartProfilContainer, ContentHeader, HeaderContainer, HeaderRight, Icon, ImageLogo, Meja, MenuContainer, MeuSide, TextMenu } from '../../../../Components/Theme/theme1/header'
import { IconCartGreen, IconMenu, IconuserGreen, Logo } from '../../../../assets'

const Header = (props) => {
    const { dataThme } = props
    return (
        <HeaderContainer>
            <ContentHeader color={dataThme?.color}>
                <MenuContainer color={dataThme?.color}>
                    <MeuSide src={IconMenu} />
                    <TextMenu>Menu</TextMenu>
                </MenuContainer>
                <div>
                    <ImageLogo src={Logo} width={"30px"} />
                </div>
                <HeaderRight>
                    <Meja color={dataThme?.color}>No Meja</Meja>
                    <CartProfilContainer>
                        <Icon src={IconCartGreen} />
                        <Icon src={IconuserGreen} />
                    </CartProfilContainer>
                </HeaderRight>
            </ContentHeader>
        </HeaderContainer>
    )
}

export default Header
