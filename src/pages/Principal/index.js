import { StatusBar } from 'expo-status-bar';
import { useState, useContext, useEffect } from 'react'
import { Text, View, Alert, ActivityIndicator } from 'react-native'
import RestauranteItem from '../../components/RestauranteItem';
import CategoriaItem from '../../components/CategoriaItem';
import {
    SafeAreaView,
    ViewActivity,
    CategoriaView,
    BannerView,
    ViewPrincipal,
    ViewRestaurantes,
    ButtonTipoSelect,
    TextTipoSelect,
    SelectTipo
} from './styles'

export default function Principal() {
    const [banner, setBanner] = useState([])
    const [categorias, setCategorias] = useState([])
    const [restaurantes, setRestaurantes] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        async function buscaDados() {
            try {
                const response = await fetch('http://my-json-server.typicode.com/pablodev/app-ifood-clone/db')

                const data = await response.json()

                setLoaded(true)

                setBanner(data.banner_principal)
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
                <CategoriaView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {categorias.map(categoria => (
                        <CategoriaItem key={categoria.id} foto={categoria.img_url} texto={categoria.nome} />
                    ))}
                </CategoriaView>
                <BannerView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {categorias.map(categoria => (
                        <CategoriaItem key={banner.id} foto={banner.img_url} texto={banner.nome} />
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
                    <ViewHome></ViewHome>
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