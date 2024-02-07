import { StyleSheet } from 'react-native';
import { palette } from '@theme/palette';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  card: {
    height: 180,
    backgroundColor: palette.ligthGrey,
    marginVertical: 5,
    marginHorizontal: 15,
    borderRadius: 20,
  },
  content: {
    height: 130,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: palette.bgGreen,
    padding: 10,
    borderRadius: 20,
  },
  textName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: palette.primary,
  },
  textId: {
    fontSize: 10,
  },
  imageUser: {
    top: 22,
    borderRadius: 8,
  },
  contentFooter: {
    width: '60%',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  textFooter: {
    marginHorizontal: 10,
    color: palette.primary,
  },
});
