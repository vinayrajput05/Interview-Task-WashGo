import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';
import CustomInput from '../components/CustomInput';
import CustomBtn from '../components/CustomBtn';
import {Eye, Lock, Mail} from 'lucide-react-native';
import TextBtn from '../components/TextBtn';
import SocialLogin from '../components/SocialLogin';

const SingInScreen = ({navigation}) => {
  const handelSignUp = () => {
    navigation.navigate('SingUp');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.bottomLeft}
        source={require('../../assets/logo-top-right.png')}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />

          <Text style={styles.title}>Sing In</Text>
          <Text style={styles.subtitle}>
            {`Hi ! Welcome back, you\nhave been missed `}
          </Text>

          <View style={{rowGap: 16, marginTop: 24}}>
            <CustomInput
              iconLeft={<Mail color={'#808080'} size={20} strokeWidth={1.5} />}
              label={'Email'}
              placeholder={'xyz@gmail.com'}
            />
            <CustomInput
              iconLeft={<Lock color={'#808080'} size={20} strokeWidth={1.5} />}
              iconRight={<Eye color={'#808080'} size={20} strokeWidth={1.5} />}
              label={'Password'}
              placeholder={'password'}
            />
            <Text style={styles.forgot}>Forgot password ?</Text>
            <CustomBtn label={'Sing In'} />
            <SocialLogin />
            <TextBtn
              startText={'Don’t have an account?'}
              endText={'Sign Up'}
              onPress={handelSignUp}
            />
          </View>
          <Text style={styles.termText}>
            By login or sign up, you agree to our terms of use and privacy
            policy
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    fontFamily: 'Poppins-SemiBold',
    marginTop: 10,
    color: '#000',
    lineHeight: 48,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.42)',
    lineHeight: 19,
  },
  forgot: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#000',
    lineHeight: 21,
    textDecorationLine: 'underline',
    alignSelf: 'flex-end',
  },
  termText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#808080',
    textAlign: 'center',
    lineHeight: 21,
    marginTop: 20,
  },
  bottomLeft: {
    width: 228,
    height: 271,
    position: 'absolute',
    bottom: 0,
    left: 0,
    resizeMode: 'cover',
    transform: [{rotate: '180deg'}],
  },
});

export default SingInScreen;
