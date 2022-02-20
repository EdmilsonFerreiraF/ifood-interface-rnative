import { StatusBar } from 'expo-status-bar';
import { Text} from 'react-native'
import { SafeAreaView, StyleSheet } from './styles'

const Perfil = () => {
    return (
        <>
            <StatusBar style="theme-dark" />
            <SafeAreaView>
                <Text>Perfil</Text>
            </SafeAreaView>
        </>
    );
}

export default Perfil;