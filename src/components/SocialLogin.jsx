import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const SocialLogin = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.line} />
        <Text style={styles.or}>or</Text>
      </View>
      <View style={styles.socialContainer}>
        <View style={styles.icon}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={17}
            height={17}
            fill="none">
            <Path
              fill="#000"
              d="M16.726 8.109a7.778 7.778 0 0 1-1.048 3.965 7.757 7.757 0 0 1-2.92 2.876 7.904 7.904 0 0 1-3.924 1.069 7.93 7.93 0 0 1-3.941-1.078 7.953 7.953 0 0 1-2.886-2.899A7.924 7.924 0 0 1 .873 8.11c0-1.394.368-2.763 1.066-3.968a7.953 7.953 0 0 1 2.885-2.899A7.93 7.93 0 0 1 8.765.164a7.94 7.94 0 0 1 5.188 1.958.521.521 0 0 1 0 .761l-1.468 1.472a.52.52 0 0 1-.69 0 4.789 4.789 0 0 0-2.961-1.12 4.787 4.787 0 0 0-4.173 2.42 4.865 4.865 0 0 0-.691 2.454 4.84 4.84 0 0 0 2.437 4.175c.739.42 1.576.634 2.426.622a4.804 4.804 0 0 0 2.407-.65 4.956 4.956 0 0 0 2.065-2.437H9.687a.511.511 0 0 1-.512-.522V7.254a.504.504 0 0 1 .512-.513h6.46a.512.512 0 0 1 .511.427c.051.31.074.626.068.941Z"
            />
          </Svg>
        </View>

        <View style={styles.icon}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={14}
            height={17}
            fill="none">
            <Path
              fill="#000"
              d="M7.332 3.269a.392.392 0 0 1-.396-.388C6.936 1.38 8.179.164 9.709.164a.391.391 0 0 1 .396.388c0 1.501-1.241 2.717-2.773 2.717Zm5.787 8.171a.382.382 0 0 1 .116.484c-1.395 2.733-2.508 4.095-3.525 4.095-.473 0-.938-.15-1.392-.442a2.098 2.098 0 0 0-2.19-.046c-.55.322-1.074.488-1.57.488-1.496 0-3.964-4.51-3.964-6.985 0-2.642 1.415-4.657 3.567-4.657 1.013 0 1.887.146 2.621.443.311.125.663.116.967-.026.596-.281 1.382-.417 2.356-.417 1.192 0 2.23.582 3.093 1.707a.384.384 0 0 1-.08.544c-.962.708-1.426 1.502-1.426 2.406 0 .904.464 1.699 1.427 2.406Z"
            />
          </Svg>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  line: {
    height: 1,
    width: '70%',
    backgroundColor: '#A3CFFF',
    marginTop: 16,
    marginBottom: 16,
    position: 'absolute',
    left: '15%',
    right: 0,
    top: -4,
  },
  or: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#666161',
    lineHeight: 21,
    textAlign: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 8,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 16,
    marginTop: 16,
  },
  icon: {
    width: 42,
    height: 42,
    borderRadius: 22,
    borderColor: '#A3CFFF',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SocialLogin;
