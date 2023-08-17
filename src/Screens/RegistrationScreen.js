import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const RegistrationScreen = () => {
  const [isFocusedLogin, setIsFocusedLogin] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  // const [showPass, setShowPass] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/images/photoBg.jpg")}
        resizeMode="cover"
      >
        <View style={styles.form}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Image
                style={{ width: 120, height: 120, borderRadius: 16 }}
                source={require("../assets/images/userPhoto.jpg")}
                resizeMode="cover"
              />
            </View>

            <TouchableOpacity style={styles.avatarBtn}>
              <Icon name="x" size={24} color="#BDBDBD" />
              {/* <Icon name="plus" size={24} color="#FF6C00" /> */}
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Реєстрація</Text>

          <TextInput
            style={[styles.input, isFocusedLogin && styles.inputFocused]}
            placeholder="Логін"
            placeholderTextColor="#BDBDBD"
            autoCompleteType="off"
            onFocus={() => setIsFocusedLogin(true)}
            onBlur={() => setIsFocusedLogin(false)}
          />

          <TextInput
            style={[styles.input, isFocusedEmail && styles.inputFocused]}
            placeholder="Адреса електронної пошти"
            placeholderTextColor="#BDBDBD"
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
              placeholderTextColor="#BDBDBD"
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

          <TouchableOpacity style={styles.formSubmitBtn}>
            <Text style={styles.formSubmitBtnText}>Зареєстуватися</Text>
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
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "relative",
    top: -60,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  avatarBtn: {
    position: "absolute",
    left: 107,
    top: 80,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 12,
  },
  // avatarBtnAdd: {
  //   position: "absolute",
  //   left: 107,
  //   top: 80,

  //   borderWidth: 1,
  //   borderColor: "#FF6C00",
  //   borderRadius: 12,
  // },

  title: {
    fontFamily: "Roboto-Medium",
    // fontWeight: 500,
    fontSize: 30,
    color: "#212121",
    letterSpacing: 0.3,
    marginTop: -28,
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
    backgroundColor: "#FF6C00",
    paddingVertical: 16,
    paddingHorizontal: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 43,
  },
  formSubmitBtnText: {
    fontFamily: "Roboto-Regular",
    // fontWeight: 400,
    fontSize: 16,
    color: "#FFFFFF",
  },

  formSubmitBtnSubtext: {
    fontFamily: "Roboto-Regular",
    // fontWeight: 400,
    fontSize: 16,
    color: "#1B4371",
    marginTop: 16,
    marginBottom: 45,
  },
});

export default RegistrationScreen;
