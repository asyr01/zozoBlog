import { Text, View, StyleSheet, Image } from 'react-native';
import Button from './Button';
import Navbar from './Navbar';

const About = ({ navigation }) => {
  return (
    <View>
      <Navbar title={'ZoZo Blog About'} />
      <View style={styles.aboutContainer}>
        <Text style={styles.info}>This app was developed by Ali Sayar.</Text>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            textStyle={styles.linkText}
            title='Go to Home'
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    borderWidth: 3,
    borderColor: '#d72c16',
    maxWidth: 600,
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: 15,
  },
  info: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 16,
    fontWeight: 'bold',
    maxWidth: 250,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 4,
    borderBottomColor: '#a10115',
    borderBottomWidth: 2,
    paddingBottom: 2,
  },
  linkText: {
    color: '#a10115',
    fontFamily: 'monospace',
    fontWeight: '700',
  },
});

export default About;
