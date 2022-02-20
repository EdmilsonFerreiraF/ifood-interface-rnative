import React from 'react';
import { Dimensions } from 'react-native';
import { BannerView, BannerFoto } from './styles'

const BannerItem = ({foto, key}) => {
    return (
        <BannerItem key={key}>
            <BannerFoto source={{
                url: foto.trim(),
                width: (Dimensions.get('window').width) - 50,
                height: 100,
                resizeMode: 'contain'
            }} />
        </BannerItem>
    )
}

export default BannerItem