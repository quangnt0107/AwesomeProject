import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Image, Pressable, ScrollView, TextInput } from 'react-native-web';

export default function App() {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  const onPress = () => {};

  return (
    <View style={styles.wrapper}>
      <View style={styles.info}>
        <Text style={styles.hello}>Xin chào!</Text>
        <Text style={styles.name}>Nguyen Thien Quang</Text>
        <Text style={styles.phone}>0368332218</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.passwordSection}>
          {/* <Image source={require('./assets/lock.png')} /> */}
          <TextInput
            style={styles.textInput} 
            placeholder='*******'
            secureTextEntry={true}

          />
        </View>
          <Pressable style={styles.buttonLogin} onPress={onPress}>
            <Text style={styles.textLogin}>Đăng nhập</Text>
          </Pressable>
      </View>
      <View style={styles.actions}>
        <Pressable style={styles.buttonAction} onPress={onPress}>
          <Text style={styles.textForgotPassword}>Quên mật khẩu</Text>
        </Pressable>
        <Pressable style={styles.buttonAction} onPress={onPress}>
          <Text style={styles.textExist}>Thoát tài khoản</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ba016a',
    paddingHorizontal: 30,  
    flexGrow: 1,
    maxWidth: 360,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 120,
  },
  info: {
    textAlign: 'center',
    marginBottom: 38,
  },
  hello: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 26,
  },
  name: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 16,
    textTransform: 'uppercase',
  },
  phone: {
    color: '#fff',
    fontSize: 14,
  },
  form: {
    marginBottom: 32,
  },
  passwordSection: {
    marginBottom: 16,
  },
  textInput: {
    borderRadius: 50,
    backgroundColor: 'white',
    height: 60,
    color: 'B5B5B5',
  },
  buttonLogin: {
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: '#960058',
  },
  textLogin: {
    color: '#fff',
    textTransform: 'uppercase',
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonForgotPassword: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: '#fff',
  },
  buttonAction: {
    fontSize: 12,
    textTransform: 'uppercase',
  },
  textForgotPassword: {
    color: '#fff',
  },
  textExist: {
    color: '#fff',
  }
});
