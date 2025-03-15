import React from 'react'
import { ImgPromo, PromoContainer } from '../../../../Components/Theme/theme1/Promo'
import { PromoMakanan } from '../../../../assets'

const Promo = () => {
    return (
        <PromoContainer>
            <ImgPromo src={PromoMakanan} />
        </PromoContainer>
    )
}

export default Promo
