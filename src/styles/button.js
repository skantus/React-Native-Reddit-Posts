import { StyleSheet } from 'react-native';

const buttonStyle = StyleSheet.create({
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10
  }
});
export default buttonStyle;
