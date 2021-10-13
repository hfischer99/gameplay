import React from 'react';
import { Text, View, TextInput, Image, StatusBar } from 'react-native';
import { styles } from './styles';
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';

export function SignIn() {

 

  return (
    <View style={styles.container}>
      <StatusBar 
      barStyle="light-content" // icones de notifição branca
      backgroundColor="transparent" //transparencia na barra
      translucent // faz juntar o conteudo na barra
      
      />
      <Image source={IllustrationImg} style={styles.image} resizeMode='stretch' />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}
          e organize suas {'\n'}
          jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favorito com seus amigos
        </Text>

        <ButtonIcon title="Entrar com Discord" activeOpacity={0.5} />
      </View>

     
    </View>
  );
}

