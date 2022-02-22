import { StatusBar } from 'expo-status-bar';
import { useState, useContext, useEffect } from 'react'
import { Text, View, Alert, ActivityIndicator } from 'react-native'
import RestauranteItem from '../../components/RestauranteItem';
import CategoriaItem from '../../components/CategoriaItem';
import BannerItem from '../../components/BannerItem';
import axios from 'axios'
import {
    SafeAreaView,
    ViewActivity,
    CategoriaView,
    BannerView,
    ViewPrincipal,
    ViewRestaurantes,
    ButtonTipoSelect,
    TextTipoSelect,
    TituloRestaurantes,
    SelectTipo
} from './styles'
import db from '../../../db/db.json'

export default function Principal() {
    const [banners, setBanners] = useState([])
    const [categorias, setCategorias] = useState([])
    const [restaurantes, setRestaurantes] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [tipo, setTipo] = useState('Entrega')

    useEffect(() => {
        async function buscaDados() {
            try {
                setLoaded(true)

                const { data } = db;
                setBanners(data.banners)
                setCategorias(data.categorias)
                setRestaurantes(data.restaurantes)
            } catch (e) {
                Alert.alert('Erro ao consultar' + e)
            }
        }

        buscaDados()
    }, [])

    const ViewHome = (props) => {
        return (
            <ViewPrincipal>
                <SelectTipo>
                    <ButtonTipoSelect onPress={() => setTipo('Entrega')}>
                        <TextTipoSelect selected={tipo === 'Entrega'}>
                            Entrega
                        </TextTipoSelect>
                    </ButtonTipoSelect>
                </SelectTipo>
                <SelectTipo>
                    <ButtonTipoSelect onPress={() => setTipo('Retirada')}>
                        <TextTipoSelect selected={tipo === 'Retirada'}>
                            Retirada
                        </TextTipoSelect>
                    </ButtonTipoSelect>
                </SelectTipo>
                <CategoriaView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {categorias.map(categoria => (
                        <CategoriaItem key={categoria.id} foto={categoria.img_url} texto={categoria.nome} />
                    ))}
                </CategoriaView>
                <BannerView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {banners.map(banner => (
                        <BannerItem key={banner.id} foto={banner.img_url} />
                    ))}
                </BannerView>
                <TituloRestaurantes>Restaurantes</TituloRestaurantes>
                <ViewRestaurantes>
                    {restaurantes.map(restaurante => (
                        <RestauranteItem
                            key={restaurante.id}
                            foto={restaurante.url_img}
                            nota={restaurante.nota}
                            nome={restaurante.nome}
                            categoria={restaurante.categoria}
                            distancia={restaurante.distancia}
                            valorFrete={restaurante.valor_frete}
                            tempoEntrega={restaurante.tempo_entrega}
                        />
                    ))}
                </ViewRestaurantes>
            </ViewPrincipal>
        )
    }

    return (
        <>
            <StatusBar style="theme-dark" />
            <SafeAreaView>
                {loaded ? (
                    <ViewHome />
                ) :
                    (
                        <ViewActivity>
                            <ActivityIndicator color="#F0001A" size="large" />
                        </ViewActivity>
                    )
                }
                <Text>Perfil</Text>
            </SafeAreaView>
        </>
    );
}