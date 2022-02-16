import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, Image, ButtonContainer, StyleSheet, Text, View } from './styles';

import banner from '../../assets/img/banner.png'

export default function Home() {
    return (
        <>
            <StatusBar style="theme-dark" />
            <SafeAreaView>
                <ButtonContainer>
                    <Button text="PULAR" onPress={() => { }} />
                    <Button text="ENTRAR" theme="primary" />
                </ButtonContainer>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});