import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../config/styles';
import Button from '../components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  main: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.headerText,
    fontWeight: '400',
    fontStyle: 'italic',
  },
});



const Home = (props) => {
  return (
    // const { navigate } = this.props.navigation;
    <View style={styles.container}>
      <Text style={styles.main}>
        Home
      </Text>
      {/* <Button onPress={() => goBack()} title="Go back from this HomeScreen" /> */}
      {/* <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Profile')}
        /> */}
    </View>
  );
};

Home.propTypes = {
    // navigation: React.PropTypes.object,
};

export default Home;
