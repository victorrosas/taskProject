import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Platform } from 'react-native';

export default function Login() {
  const [type, setType] = useState('login');

  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  

  function handleLogin() {
    alert('TESTE')
  }

  return (
    <View style={styles.container}>
      
    <TextInput 
      placeholder='Seu email'
      style={styles.input}
      value={email}
      onChangeText={ (text) => setEmail(text)}
    />

    <TextInput 
      placeholder='*********'
      style={styles.input}
      value={password}
      onChangeText={ (text) => setPassword(text)}
    />

    <TouchableOpacity 
      style={[styles.handleLogin, {backgroundColor: type === 'login' ? '#3ea6f2' : '#141414'}]}
      onPress={handleLogin}
    >
      <Text style={styles.loginText}>
        { type === 'login' ? 'Acessar' : 'Cadastrar'}
      </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={ () => setType(type => type === 'login' ? 'cadastrar' : 'login')}>
      <Text style={{ textAlign: 'center'}}>
        {type === 'login' ? 'Criar uma conta' : 'Já possuo uma conta'}
      </Text>
    </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    backgroundColor: '#000',
    paddingHorizontal: 10
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 4,
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: '#141414'
  },
  handleLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    marginBottom: 10
  },
  loginText: {
    color: '#FFF',
    fontSize: 17
  }
});