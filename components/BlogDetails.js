import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Button from './Button';
import useFetch from './useFetch';
import Navbar from './Navbar';

const BlogDetails = (props) => {
  // Destructured variables taken from params, sent from BlogList.
  const { id, handleDelete } = props.route.params;
  const {
    data: blog,
    isPending,
    error,
  } = useFetch('http://localhost:8000/blogs/' + id);

  return (
    <View style={styles.blogDetails}>
      {isPending && (
        <View style={styles.loadingContainer}>
          <Text>Loading...</Text>
        </View>
      )}
      {error && <View>{error}</View>}
      {blog && (
        <View style={styles.container}>
          <Navbar title={'ZoZo Blog Details'} />
          <ScrollView>
            <View style={styles.blog}>
              <View style={styles.headerContainer}>
                <Text style={styles.blogHeader}>{blog.title}</Text>
                <Button
                  title='X'
                  onPress={() => handleDelete(blog.id)}
                  style={styles.deleteButton}
                  textStyle={styles.deleteButtonText}
                />
              </View>
              <Text style={styles.blogContent}>{blog.body}</Text>
              <View style={styles.blogInfo}>
                <Text>
                  written by <Text style={styles.info}>{blog.author}</Text>
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  blogDetails: {
    backgroundColor: '#fef2f0',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    maxWidth: 600,
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: 5,
  },
  blog: {
    marginRight: 'auto',
    marginLeft: 'auto',
    textAlign: 'center',
    padding: 15,
    borderWidth: 4,
    borderColor: '#a10115',
    shadowColor: '#fff',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  blogHeader: {
    fontFamily: 'monospace',
    color: '#a10115',
    fontWeight: '600',
    fontSize: 24,
    justifyContent: 'flex-start',
    margin: 10,
  },
  blogContent: {
    textAlign: 'justify',
    lineHeight: 21,
  },
  blogInfo: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  info: {
    alignSelf: 'center',
    color: '#d72c16',
    fontWeight: 'bold',
  },
  deleteButton: {
    justifyContent: 'center',
  },
  deleteButtonText: {
    fontWeight: 'bold',
    color: '#a10115',
    borderWidth: 2,
    borderColor: '#d72c16',
    paddingRight: 10,
    paddingLeft: 10,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BlogDetails;
