import { ScrollView, StyleSheet, TextInput, Picker } from 'react-native';
import { useState } from 'react';
import Button from './Button';
import Navbar from './Navbar';

const Create = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('ali');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    if (blog.title && blog.body) {
      setIsPending(true);

      fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(blog),
      }).then(() => {
        setIsPending(false);
        navigation.push('Home');
      });
    }
  };

  return (
    <ScrollView style={styles.create}>
      <Navbar title={'ZoZo Blog Create'} />
      <TextInput
        style={styles.inputBoxes}
        placeholder='Please enter a title'
        value={title}
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <TextInput
        style={styles.inputBoxes}
        placeholder='Blog Text'
        multiline={true}
        numberOfLines={20}
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />

      <Picker
        value={author}
        style={styles.inputBoxes}
        onChange={(e) => setAuthor(e.target.value)}
      >
        <Picker.Item label='ali' value='ali' />
        <Picker.Item label='anonymous' value='anonymous' />
      </Picker>

      {isPending ? (
        <Button
          disabled
          title='Adding Blog'
          onPress={() => navigation.navigate('Blogs')}
        />
      ) : (
        <Button
          style={styles.button}
          textStyle={styles.linkText}
          title='Add Blog'
          onPress={handleSubmit}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  create: {
    maxWidth: 400,
    marginRight: 'auto',
    marginLeft: 'auto',
    textAlign: 'center',
  },
  inputBoxes: {
    borderColor: '#d72c16',
    borderWidth: 2,
    margin: 5,
    borderRadius: 5,
    padding: 10,
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

export default Create;
