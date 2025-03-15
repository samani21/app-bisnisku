import React from 'react'
import { ContentHeader, HeaderContainer, HeaderRight, ImageLogo, Meja } from '../../../../Components/Theme/theme1/header'
import { Logo } from '../../../../assets'

const Header = (props) => {
    const { dataThme } = props
    return (
        <HeaderContainer>
            <ContentHeader color={dataThme?.color}>
                <div style={{ marginLeft: "10px" }}>
                    <ImageLogo src={Logo} />
                </div>
                <HeaderRight>
                    <Meja color={dataThme?.color} color_text={dataThme?.color_text}>No Meja</Meja>

                </HeaderRight>
            </ContentHeader>
        </HeaderContainer>
    )
}

export default Header
