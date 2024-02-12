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
    alignSelf: 'center',
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
  productItemContainerStyle: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    marginVertical: '5%',
  },
  imageStyle: {width: '80%', height: '100%'},
  productItemTextContainerStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    height: 100,
  },
  loadingContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  loadingTextStyle: {fontSize: 26, fontWeight: 'bold'},
});
