import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomBtn = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: wp(90),
    height: 61,
    backgroundColor: 'rgba(163, 207, 255, 1)',
    borderRadius: 32,
    borderWidth: 1,
    borderColor: 'rgba(148, 199, 255, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(163, 207, 255, 0.4)',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 16,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Inter',
    color: 'rgba(9, 42, 77, 1)',
  },
});

export default CustomBtn;
