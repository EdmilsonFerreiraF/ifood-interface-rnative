import { StatusBar } from 'expo-status-bar';
import { useState, useContext, useEffect } from 'react'
import { SafeAreaView, Image, View, ButtonContainer} from './styles'
import { Test, Alert, ActivityIndicator } from 'react-native'

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
                Alert.alert('Erro ao consultar')
            }
        }

        buscaDados()
    }, [])
    
    return (
        <>
            <StatusBar style="theme-dark" />
            <SafeAreaView>
                <Text>Perfil</Text>
            </SafeAreaView>
        </>
    );
}