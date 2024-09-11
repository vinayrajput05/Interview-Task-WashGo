import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import CustomBtn from '../components/CustomBtn';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      <Text style={styles.title}>Welcome Ramesh</Text>
      <CustomBtn label={'Logout'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 30,
    width: 233,
    height: 170,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Inter',
    fontWeight: '700',
    marginTop: 50,
    marginBottom: 100,
    color: '#000',
  },
});

export default HomeScreen;
