import React from 'react';
import defaultStyles from '../theme/defaultStyles';
import { View, TouchableOpacity, Image } from 'react-native';
import { RootState, useAppDispatch } from '../utility/store';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { logOut } from '../features/auth/redux/thunks';
import { useSelector } from 'react-redux';

const Header = ({ logoutButtonVisible = false }: { logoutButtonVisible?: boolean }) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation() as NavigationProp<ParamListBase>;
  const onLogout = () => {
    dispatch(logOut({ navigation }));
  };

  const isTablet = useSelector((state: RootState) => state.deviceInfo.isTablet);
  const styles = defaultStyles(isTablet);

  return (
    <View style={styles.header}>
      <View>
        <Image source={isTablet ? require('../../assets/logoFull.png') : require('../../assets/logo.png')} />
      </View>
      {logoutButtonVisible ? (
        <TouchableOpacity onPress={onLogout}>
          <Image source={require('../../assets/logoutHighlighted.png')} />
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  );
};

export default Header;
