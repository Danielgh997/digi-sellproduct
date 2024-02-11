import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  pageContainerStyle: {
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: '5%',
  },
  headerContainerStyle: {
    flexDirection: 'row',
    marginTop: '10%',
    alignSelf: 'center'
  },
  searchTextInputStyle: {
    width: '85%',
    borderRadius: 10,
    padding: 10,
  },
  textInputContainerStyle: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#9c909080',
    borderRadius: 10,
  },
  searchCancelStyle: {
    justifyContent: 'center',
    marginLeft: '7%',
  },
});
