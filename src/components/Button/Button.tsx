import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './Button.styles';

type ButtonProps = {
  text: string;
} & TouchableOpacityProps;

export const Button = ({ text, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
