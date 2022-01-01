import { Text, Pressable } from 'react-native';

// This function allows us to style buttons because we can't style buttons directly.
const Button = (props) => {
  const { onPress, title, style, textStyle } = props;
  return (
    <Pressable style={style} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
};

export default Button;
