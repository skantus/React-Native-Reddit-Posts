import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageNavBar: {
    width: 120,
    height: 40
  },
  header: {
    marginTop: 10
  },
  thumbnail: {
    marginLeft: 5,
    height: 80,
    width: 80
  },
  itemBox: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10
  },
  createdBox: {
    alignItems: 'flex-end',
    marginBottom: 5
  },
  titleBox: {
    marginBottom: 5,
    marginLeft: -10
  },
  textBox: {
    fontSize: 14,
    color: 'steelblue',
    marginLeft: 10
  },
  headerBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  dateBox: {
    fontSize: 12,
    color: 'gray'
  },
  authorBox: {
    fontSize: 12,
    color: 'skyblue'
  },
  containerPost: {
    flex: 1,
    paddingTop: 5,
    marginLeft: -13,
    backgroundColor: '#ecf0f1',
  }
});
