import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export const RegistrationScreen = () => {
  const [isFocusedLogin, setIsFocusedLogin] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [showPass, setShowPass] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/images/photo-bg.jpg")}
        resizeMode="cover"
      >
        <View style={styles.form}>
          <View style={styles.avatarContainer}>
            {/* <View style={styles.avatar}>
              <Image
                style={{ width: 120, height: 120, borderRadius: 16 }}
                // source={require("../assets/images/add.svg")}
              />
            </View> */}

            <View style={styles.avatarBtn}>
              <Image source={require("../assets/images/add.png")} />
            </View>
          </View>

          <Text style={styles.title}>Реєстрація</Text>

          <TextInput
            style={[styles.input, isFocusedLogin && styles.inputFocused]}
            placeholder="Логін"
            placeholderTextColor="#bdbdbd"
            autoCompleteType="off"
            onFocus={() => setIsFocusedLogin(true)}
            onBlur={() => setIsFocusedLogin(false)}
          />

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
              onPressIn={() => setShowPass(true)}
              onPressOut={() => setShowPass(false)}
            >
              <Text style={styles.passwordBtnTitle}>Показати</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Text style={styles.formSubmitBtn}>Зареєстуватися</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.formSubmitBtnSubtext}>
              Вже є акаунт? Увійти
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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

  avatarContainer: {
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "relative",
    top: -60,
  },

  // avatar: {
  //   width: 120,
  //   height: 120,
  //   backgroundColor: "#F6F6F6",
  //   borderRadius: 16,

  //   position: "relative",
  //   top: -60,
  //   left: 12.5,
  // },

  avatarBtn: {
    position: "relative",
    left: 60,
    top: 30,
  },

  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    // fontWeight: 500,
    letterSpacing: 0.3,

    marginTop: -28,
    marginBottom: 32,
  },

  input: {
    width: "100%",
    height: 50,
    marginBottom: 16,

    fontFamily: "Roboto-Regular",
    fontSize: 16,
    // fontWeight: 400,
    color: "#212121",

    backgroundColor: "#F6F6F6",
    paddingHorizontal: 16,
    paddingVertical: 16,

    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },

  inputFocused: {
    borderColor: "#FF6C00",
  },

  passwordContainer: {
    width: "100%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  passwordInput: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    // fontWeight: 400,
    color: "#212121",
    width: "70%",
  },

  passwordBtn: {
    position: "absolute",
    top: 12,
    right: 32,
  },

  passwordBtnTitle: {
    color: "#1B4371",
  },

  formSubmitBtn: {
    width: "100%",
    backgroundColor: "#FF6C00",
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: "center",
    borderRadius: 100,
    marginTop: 43,
  },

  formSubmitBtnSubtext: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    paddingHorizontal: 32,
    paddingVertical: 16,
    // marginTop: 16,
    marginBottom: 45,
  },
});
