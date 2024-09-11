import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';

const CustomInput = ({label, iconLeft, iconRight, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.box}>
        {iconLeft}
        <TextInput style={styles.input} placeholder={placeholder} />
        {iconRight}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    lineHeight: 21,
    color: '#000',
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(128, 128, 128, 1)',
    borderRadius: 8,
    paddingHorizontal: 6,
    marginTop: 4,
    columnGap: 4,
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '400',
    lineHeight: 21,
    color: '#808080',
    fontStyle: 'italic',
  },
});

export default CustomInput;
