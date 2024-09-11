import {View, Text, StatusBar, Image, StyleSheet} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomBtn from '../components/CustomBtn';
import TextBtn from '../components/TextBtn';

const WelcomeScreen = ({navigation}) => {
  const handelStart = () => {
    navigation.navigate('SingUp');
  };

  const handelSignIn = () => {
    navigation.navigate('SingIn');
  };

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

      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      <Text style={styles.slogan}>
        {`Sparkle & Shine Transform\nYour Drive with Every Wash!`}
      </Text>

      <CustomBtn label={'Let’s Start'} onPress={handelStart} />
      <View style={{height: 16}} />
      <TextBtn
        startText={'Already have an account?'}
        endText={'Sign in'}
        onPress={handelSignIn}
      />

      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor="transparent"
      />
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
  logo: {
    marginTop: hp(20),
    width: wp(85),
    resizeMode: 'contain',
  },
  slogan: {
    fontSize: wp(5.8),
    fontFamily: 'Poppins-SemiBold',
    color: 'rgba(128, 128, 128, 1)',
    lineHeight: 36,
    textAlign: 'center',
    width: wp(85),
    marginBottom: hp(10),
  },
});

export default WelcomeScreen;
