import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'Welcome'}],
      });
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.topLeft}
        source={require('../../assets/logo-top-left.png')}
      />

      <Image
        style={styles.topRight}
        source={require('../../assets/logo-top-right.png')}
      />

      <Image
        style={styles.bottomRight}
        source={require('../../assets/logo-bottom-right.png')}
      />

      <Image source={require('../../assets/logo.png')} />
      <StatusBar hidden />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'contain',
  },
  topRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    resizeMode: 'contain',
  },
  bottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
