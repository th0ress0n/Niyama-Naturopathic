import React, { Component } from 'react';
import { StyleSheet, Dimensions, Text, View, Image } from 'react-native';

import { colors } from '../config/styles';
import Button from '../components/Button';
import Avatar from '../components/Avatar';
import { capitalize } from '../lib/string';
import headerImage from '../images/header-image.png';

const window = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    width: window.width,
    height: window.height * 0.4,
  },
  body: {
    marginTop: -50,
    alignItems: 'center',
  },
});

class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.header} source={headerImage} />
        <View style={styles.body}>
          <Avatar/>
        </View>
      </View>
    );
  }
}

export default Profile;