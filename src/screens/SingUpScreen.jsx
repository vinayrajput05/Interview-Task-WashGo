import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../components/CustomInput';
import CustomBtn from '../components/CustomBtn';
import {Eye, Lock, Mail, User} from 'lucide-react-native';
import CheckBox from '@react-native-community/checkbox';
import TextBtn from '../components/TextBtn';

const SingUpScreen = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const handelSignIn = () => {
    navigation.navigate('SingIn');
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.bottomRight}
        source={require('../../assets/logo-top-right.png')}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />

          <Text style={styles.title}>Sing Up</Text>
          <Text style={styles.subtitle}>
            {`Fill in the below form and add life to\nyour car!`}
          </Text>

          <View style={{rowGap: 16, marginTop: 24}}>
            <CustomInput
              iconLeft={<User color={'#808080'} size={20} strokeWidth={1.5} />}
              label={'Name'}
              placeholder={'Enter your name'}
            />
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
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                lineWidth={1.5}
                tintColors={{true: '#A3CFFF', false: '#797979'}}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <Text style={styles.terms}>
                Agree with{' '}
                <Text style={styles.termsLink}>Terms & Conditions</Text>{' '}
              </Text>
            </View>
            <CustomBtn label={'Sing Up'} />
            <TextBtn
              startText={'Already have an account?'}
              endText={'Sign in'}
              onPress={handelSignIn}
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
  terms: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },
  termsLink: {
    textDecorationLine: 'underline',
    color: '#808080',
  },
  termText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#808080',
    textAlign: 'center',
    lineHeight: 21,
    marginTop: 20,
  },
  bottomRight: {
    width: 228,
    height: 271,
    position: 'absolute',
    bottom: 0,
    right: 0,
    resizeMode: 'cover',
    transform: [{rotate: '90deg'}],
  },
});

export default SingUpScreen;
