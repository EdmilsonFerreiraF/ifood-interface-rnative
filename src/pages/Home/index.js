import React from 'react'

import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, Image, ButtonContainer, StyleSheet, Text, View } from './styles';

import banner from '../../assets/img/banner.png'

export default function Home() {
    return (
        <>
            <StatusBar style="theme-dark" />
            <SafeAreaView>
                <View>
                    <Text>Pedir comida não foi tão fácil</Text>
                    <Image source={banner} />
                    <Text>Permitir localização</Text>
                    <Text>Para descobrir restaurantes que entregam em sua região</Text>
                </View>
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