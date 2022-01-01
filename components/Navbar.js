import { StyleSheet, View, Text } from 'react-native';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';

const Navbar = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <Text style={styles.h1}>{title}</Text>
      <View style={styles.links}>
        <Button
          style={styles.link}
          textStyle={styles.linkText}
          title='Home Page'
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          style={styles.link}
          textStyle={styles.linkText}
          title='Add a Blog'
          onPress={() => navigation.navigate('Create')}
        />
        <Button
          style={styles.link}
          textStyle={styles.linkText}
          title='About Us'
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    maxWidth: 300,
    borderWidth: 3,
    borderColor: '#c60000',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 10,
    marginTop: 10,
  },
  links: {
    flexDirection: 'row',
    alignContent: 'space-between',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  link: {
    marginRight: 10,
    borderBottomColor: '#c60000',
    borderBottomWidth: 2,
    paddingBottom: 2,
  },
  linkText: {
    color: '#a10115',
    fontFamily: 'monospace',
    fontWeight: '700',
  },
  h1: {
    fontFamily: 'monospace',
    color: '#d72c16',
    fontWeight: '600',
    fontSize: 24,
    justifyContent: 'flex-start',
  },
});

export default Navbar;
