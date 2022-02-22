import React from 'react';
import { Dimensions } from 'react-native';
import { BannerView, BannerFoto } from './styles'

const BannerItem = ({ foto }) => {
    return (
        <BannerView>
            <BannerFoto source={{
                url: foto.trim(),
                width: (Dimensions.get('window').width) - 50,
                height: 100,
                resizeMode: 'contain'
            }} />
        </BannerView>
    )
}

export default BannerItem