import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const Inicio = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bienvenid@s a su Pizzería</Text>
      <Image source={require('./assets/Titulo.png')} style={[styles.image, {width: 150, height: 150}]}/>
      <View style={styles.centerContainer}>
        <TouchableOpacity style={styles.imageContainer}>
          <Text style={styles.subtitle}>Inicio</Text>
          <Image source={require('./assets/inicio.png')} style={[styles.image, {width: 300, height: 650}]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <Text style={styles.subtitle}>Detalles</Text>
          <Image source={require('./assets/detalle.png')} style={[styles.image, {width: 300, height: 650}]} />
        </TouchableOpacity>
        <View style={styles.row}>
          <TouchableOpacity style={styles.imageContainer}>
            <Text style={styles.subtitle}>Acompaña tu pizza con: </Text>
            <Image source={require('./assets/Coca.png')} style={[styles.image, {width: 110, height: 270}]} />
            <Image source={require('./assets/jamon.png')} style={[styles.image, {width: 170, height: 210}]} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={require('./assets/queso.png')} style={[styles.image, {width: 220, height: 420}]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={require('./assets/10.png')} style={[styles.image, {width: 450, height: 650}]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={require('./assets/Pizza1.png')} style={[styles.image, {width: 175, height: 275}]} />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={require('./assets/tomate.png')} style={[styles.image, {width: 260, height: 360}]} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#F5F5F5', 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 70,
  },
  centerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginRight: 5,
  },
  image: {
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color:'blue'
  },
  subtitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Inicio;
