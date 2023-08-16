import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const LoginScreen = () => {
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  // const [showPass, setShowPass] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Увійти</Text>

        <TextInput
          style={[styles.input, isFocusedEmail && styles.inputFocused]}
          placeholder="Адреса електронної пошти"
          placeholderTextColor="#bdbdbd"
          autoCompleteType="off"
          onFocus={() => setIsFocusedEmail(true)}
          onBlur={() => setIsFocusedEmail(false)}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={[
              styles.passwordInput,
              isFocusedPassword && styles.inputFocused,
            ]}
            placeholder="Пароль"
            placeholderTextColor="#bdbdbd"
            autoCompleteType="off"
            onFocus={() => setIsFocusedPassword(true)}
            onBlur={() => setIsFocusedPassword(false)}
          />

          <TouchableOpacity
            style={styles.passwordBtn}
            // onPressIn={() => setShowPass(true)}
            // onPressOut={() => setShowPass(false)}
          >
            <Text style={styles.passwordBtnTitle}>Показати</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.formSubmitBtn}>Увійти</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.formSubmitBtnSubtext}>
            Немає акаунту? Зареєструватися
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  form: {
    width: "100%",
    marginTop: "auto",

    justifyContent: "flex-end",
    alignItems: "center",

    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    position: "relative",
  },

  title: {
    fontFamily: "Roboto-Medium",
    // fontWeight: 500,
    fontSize: 30,
    color: "#212121",
    letterSpacing: 0.3,

    marginTop: 32,
    marginBottom: 33,
  },

  input: {
    width: "100%",
    height: 50,
    marginBottom: 16,

    fontFamily: "Roboto-Regular",
    // fontWeight: 400,
    fontSize: 16,
    color: "#212121",

    backgroundColor: "#F6F6F6",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 15,

    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },

  inputFocused: {
    borderColor: "#FF6C00",
  },

  passwordContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  passwordInput: {
    width: "100%",
    height: 50,

    fontFamily: "Roboto-Regular",
    // fontWeight: 400,
    fontSize: 16,
    color: "#212121",

    backgroundColor: "#F6F6F6",
    paddingLeft: 16,
    paddingRight: 100,
    paddingTop: 16,
    paddingBottom: 15,

    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },

  passwordBtn: {
    position: "absolute",
    top: 15,
    right: 20,
  },

  passwordBtnTitle: {
    color: "#1B4371",
  },

  formSubmitBtn: {
    width: "100%",

    fontFamily: "Roboto-Regular",
    // fontWeight: 400,
    fontSize: 16,
    color: "#FFFFFF",

    backgroundColor: "#FF6C00",
    paddingVertical: 16,
    paddingHorizontal: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,

    marginTop: 43,
  },

  formSubmitBtnSubtext: {
    fontFamily: "Roboto-Regular",
    // fontWeight: 400,
    fontSize: 16,
    color: "#1B4371",

    marginTop: 16,
    marginBottom: 111,
  },
});

export default LoginScreen;
