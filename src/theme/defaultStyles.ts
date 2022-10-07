import { StyleSheet } from 'react-native';

export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  grey: '#D9D9D9',
  blue: '#27569C',
  orange: '#E4B062',
  red: '#FF0000',
};

export default (isTablet?: boolean) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.white,
      justifyContent: 'space-between',
    },

    header: {
      flexDirection: 'row',
      padding: 15,
      paddingTop: 30,
      backgroundColor: colors.orange,
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 118,
    },

    scrollViewStyle: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    mainContent: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
      backgroundColor: colors.white,
    },

    innerContainer: {
      alignSelf: isTablet ? 'center' : 'flex-start',
      flex: isTablet ? 0.65 : 1,
      borderColor: colors.blue,
      borderWidth: 5,
      borderRadius: 6,
    },

    defaultPadding: {
      padding: 30,
    },

    tabletLoginCell: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 25,
    },

    publicationsContent: {
      flex: 1,
      //justifyContent: isTablet ? 'center' : 'space-evenly',
      alignItems: 'stretch',
      paddingHorizontal: isTablet ? 37 : 15,
      backgroundColor: colors.white,
    },

    publication: isTablet
      ? {
          flex: 1,
          alignSelf: 'stretch',
          padding: 20,
          paddingBottom: 0,
          height: 500,
        }
      : {
          flex: 1,
          alignSelf: 'stretch',
          padding: 20,
          paddingBottom: 0,
          height: 200,
        },

    highlightedText: {
      fontSize: 24,
      fontFamily: 'Inter-ExtraBold',
      color: colors.blue,
      alignSelf: 'center',
      marginBottom: isTablet ? 25 : 10,
    },

    mainText: {
      fontSize: 24,
      fontFamily: 'Inter-ExtraBold',
      color: colors.black,
      alignSelf: 'center',
    },

    publicationText: {
      fontSize: 16,
      fontFamily: 'Inter-ExtraBold',
      marginBottom: 20,
    },

    redText: {
      alignSelf: 'center',
      fontSize: 24,
      fontFamily: 'Inter-ExtraBold',
      color: colors.red,
    },

    button: {
      alignItems: 'center',
      padding: 10,
      backgroundColor: colors.orange,
      borderRadius: 10,
    },

    inputLabel: {
      flex: 1,
      marginBottom: isTablet ? 0 : 10,
    },

    textInput: {
      flex: 2,
      fontFamily: 'Inter-Regular',
      flexDirection: 'row',
      padding: 5,
      paddingHorizontal: 10,
      backgroundColor: colors.grey,
      borderRadius: 10,
      borderWidth: 4,
      borderColor: colors.blue,
      color: colors.black,
      fontSize: 24,
      marginBottom: isTablet ? 0 : 10,
    },

    marginFirst: {
      marginVertical: isTablet ? 25 : 10,
    },

    marginBottom: {
      marginBottom: 10,
    },

    publicationMarginBottom: {
      marginBottom: isTablet ? 25 : 10,
    },

    marginRight: {
      marginRight: isTablet ? 20 : 10,
    },

    photo: {
      width: 150,
      height: 150,
      marginBottom: 20,
    },
  });
