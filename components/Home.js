import useFetch from './useFetch';
import BlogList from './BlogList';
import { StyleSheet, View, Text } from 'react-native';

const Home = () => {
  //state 2
  // setBlogs and setNames update the values. When state changes page re-renders.
  const { data, isPending, error } = useFetch('http://localhost:8000/blogs');

  return (
    <View style={styles.home}>
      {error && <Text>{error}</Text>}
      {isPending && (
        <View style={styles.loadingContainer}>
          <Text>Loading...</Text>
        </View>
      )}
      {data && <BlogList blogs={data} />}
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#fef2f0',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
