import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { GestureHandlerRootView, RectButton } from 'react-native-gesture-handler';
import Header from '../Header';

function Home() {
  const navigation = useNavigation();

  const handlerOnPress = () => {
    navigation.navigate('Orders' as never);
  }

  return (
    <>
    <Header/>
      <View style={styles.container}>
          <Image source={require('../assets/deliveryman.png')} />
          <Text style={styles.title}>Acompanhe os pedidos e {'\n'}
          entregue no prazo!</Text>
          <Text style={styles.subTitle}>Receba todos os pedidos do seu {'\n'}
          restaurante na palma da sua mão</Text>
      </View>
      <GestureHandlerRootView>
        <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handlerOnPress}>
            <Text style={styles.buttonText}> VER PEDIDOS</Text>
        </RectButton>
        </View>
      </GestureHandlerRootView>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      marginTop: '5%',
      alignItems: 'center'
    },
    title: {
      color: '#263238',
      fontSize: 26,
      lineHeight: 35,
      fontWeight: 'bold',
      marginTop: 31,
      textAlign: 'center'
    },
    subTitle: {
      color: '#9E9E9E',
      fontSize: 16,
      marginTop: 15,
      lineHeight: 22,
      textAlign: 'center'
    },
    footer: {
      marginTop: '5%',
      alignItems: 'center'
    },
    button: {
      backgroundColor: '#DA5C5C',
      flexDirection: 'row',
      borderRadius: 10
    },
    buttonText: {
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 50,
      paddingRight: 50,
      fontWeight: 'bold',
      fontSize: 18,
      color: '#FFF',
      letterSpacing: -0.24
    }
});

export default Home;