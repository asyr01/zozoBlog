import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Button from './Button';
import Navbar from './Navbar';
import { useNavigation } from '@react-navigation/native';

const BlogList = ({ blogs }) => {
  const navigation = useNavigation();

  const handleDelete = (id) => {
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE',
    }).then(navigation.push('Home'));
  };

  const truncate = (source, size = 200) => {
    if (source.length > size) {
      return source.slice(0, size - 1) + '\n...';
    } else {
      return source;
    }
  };

  return (
    <View style={styles.container}>
      <Navbar title={'ZoZo Blog Blogs'} />
      <ScrollView>
        {blogs.map((blog) => (
          <View style={styles.blog} key={blog.id}>
            <View style={styles.headerContainer}>
              <Text
                onPress={() =>
                  navigation.navigate('BlogDetails', {
                    title: blog.title,
                    id: blog.id,
                    handleDelete: handleDelete,
                  })
                }
                style={styles.blogHeader}
              >
                {blog.title}
              </Text>
              <Button
                title='X'
                onPress={() => handleDelete(blog.id)}
                style={styles.deleteButton}
                textStyle={styles.deleteButtonText}
              />
            </View>
            <Text style={styles.blogContent}>{truncate(blog.body)}</Text>
            <View style={styles.blogInfo}>
              <Text style={styles.info}>{blog.id}</Text>
              <Text style={styles.info}>{blog.author}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    maxWidth: 600,
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: 5,
  },
  blog: {
    backgroundColor: '#f0efea',
    marginRight: 'auto',
    marginLeft: 'auto',
    textAlign: 'center',
    margin: 10,
    padding: 5,
    borderWidth: 3,
    borderColor: '#c60000',
    shadowColor: '#c60000',
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
    paddingRight: 10,
    paddingLeft: 10,
  },
  blogInfo: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info: {
    alignSelf: 'flex-end',
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
});

export default BlogList;
