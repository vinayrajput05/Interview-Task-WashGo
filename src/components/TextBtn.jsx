import {Text, StyleSheet} from 'react-native';
import React from 'react';

export default function TextBtn({onPress, startText, endText}) {
  return (
    <Text style={styles.text}>
      {`${startText} `}
      <Text onPress={onPress} style={styles.text2}>
        {endText}
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'rgba(128, 128, 128, 1)',
    textAlign: 'center',
  },
  text2: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontFamily: 'Poppins-SemiBold',
    textDecorationLine: 'underline',
  },
});
