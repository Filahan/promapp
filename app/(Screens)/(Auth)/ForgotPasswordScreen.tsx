// ForgotPassword.js
import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { auth } from '../../config/Firebase'; // Assurez-vous que l'exportation est correcte dans Firebase.js
import { sendPasswordResetEmail } from 'firebase/auth';
import { router } from 'expo-router';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Un e-mail de réinitialisation a été envoyé à votre adresse.');
      setError('');
    } catch (err) {
      setError(err.message);
      setMessage('');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}>
          <Text style={styles.return}>
            <FeatherIcon
              color="#000"
              name="arrow-left"
              size={24} />
          </Text>
        </TouchableOpacity>
        <KeyboardAwareScrollView>
          <View style={styles.header}>
            <Text style={styles.title}>
              Réinitialiser le mot de passe
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Adresse e-mail</Text>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                placeholder="john@example.com"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
              />
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={handlePasswordReset}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Envoyer l'e-mail</Text>
                </View>
              </TouchableOpacity>
            </View>

            {message ? <Text style={styles.message}>{message}</Text> : null}
            {error ? <Text style={styles.error}>{error}</Text> : null}
          </View>
        </KeyboardAwareScrollView>

        <TouchableOpacity
          style={{ marginTop: 'auto' }}>
          <Text style={styles.formFooter}>
            Vous avez déjà un compte ?{' '}
            <Text style={{ textDecorationLine: 'underline' }} onPress={() => router.push('/login')}>Se connecter</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 6,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
  },
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  return: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'left',
    marginLeft: 15,
    letterSpacing: 0.15,
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#ffff',
    borderStyle: 'solid',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#002D62',
    borderColor: '#002D62',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  message: {
    color: 'green',
    textAlign: 'center',
    marginTop: 10,
  },
});
