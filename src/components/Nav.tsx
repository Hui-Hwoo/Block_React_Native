import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const Nav = () => {
  return (
    <View style={styles.nav}>
      <Image source={require('../image/lumi.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#fecb3b',
    paddingTop: 24,
    paddingBottom: 8,
    paddingHorizontal: 12,
  },
  logo: {
    height: 32,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default Nav;
