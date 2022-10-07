import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { DeviceType, getDeviceTypeAsync } from 'expo-device';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import defaultStyles from '../../../theme/defaultStyles';
import Header from '../../../components/Header';
import { RootState, useAppDispatch } from '../../../utility/store';
import { authentication } from '../redux/thunks';
import { setIsTablet } from '../../deviceInfo/redux/reducer';
import { setWrongCredentials } from '../redux/reducer';

const LoginScreen = ({ navigation }: { navigation: NavigationProp<ParamListBase> }) => {
  const dispatch = useAppDispatch();
  const authenticated = useSelector((state: RootState) => state.auth.authenticated);
  const wrongCredentials = useSelector((state: RootState) => state.auth.wrongCredentials);
  const isTablet = useSelector((state: RootState) => state.deviceInfo.isTablet);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setLogin('');
    setPassword('');
  }, [authenticated]);

  useEffect(() => {
    getIsTablet();
  }, []);

  useEffect(() => {
    if (wrongCredentials) {
      dispatch(setWrongCredentials(false));
    }
  }, [login, password]);

  const getIsTablet = async () => {
    const deviceTypeId = await getDeviceTypeAsync();
    dispatch(setIsTablet(deviceTypeId === DeviceType.TABLET));
  };

  const onButtonClick = () => {
    dispatch(authentication({ login, password, navigation }));
  };

  const passwordInputRef = useRef<TextInput>(null);
  const styles = defaultStyles(isTablet);

  return (
    <View style={styles.mainContainer}>
      <Header logoutButtonVisible={false} />
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <View style={styles.mainContent}>
          <View style={[styles.innerContainer, styles.defaultPadding]}>
            <Text style={[styles.highlightedText]}>Authorization</Text>
            <View style={isTablet ? styles.tabletLoginCell : []}>
              <Text style={[styles.mainText, styles.inputLabel]}>login</Text>
              <TextInput
                value={login}
                onChangeText={setLogin}
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
                style={[styles.textInput, styles.marginBottom]}
              />
            </View>
            <View style={isTablet ? styles.tabletLoginCell : []}>
              <Text style={[styles.mainText, styles.inputLabel]}>password</Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                style={[styles.textInput, styles.marginBottom]}
                secureTextEntry={true}
                ref={passwordInputRef}
              />
            </View>
            <TouchableOpacity onPress={onButtonClick} style={styles.button}>
              <Text style={styles.mainText}>Submit</Text>
            </TouchableOpacity>
            {wrongCredentials ? <Text style={styles.redText}>Incorrect login or password.</Text> : <></>}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
