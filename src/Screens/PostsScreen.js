import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Публікації</Text>
        <TouchableOpacity>
          <Icon name="log-out" size={24} style={styles.logoutIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.userContainer}>
        <Image
          source={require("../assets/images/userPhoto.jpg")}
          style={styles.userPhoto}
        />
        <View>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>

      <View style={styles.controlsContainer}>
        <TouchableOpacity>
          <Icon name="grid" size={24} color="#BDBDBD" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addBtn}>
          <Icon name="plus" size={24} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="user" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    marginTop: 44,
  },
  headerTitle: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    // fontWeight: 500,
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    paddingHorizontal: 48,
    paddingVertical: 11,
  },
  logoutIcon: {
    position: "absolute",
    top: -10,
    left: 60,
    color: "#BDBDBD",
  },

  userContainer: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 32,
  },
  userPhoto: {
    width: 60,
    height: 60,
    resizeMode: "cover",
    borderRadius: 16,
  },
  userName: {
    color: "#212121",
    fontFamily: "Roboto-Bold",
    // fontWeight: 700,
    fontSize: 13,
  },
  userEmail: {
    color: "#212121CC",
    fontFamily: "Roboto-Medium",
    // fontWeight: 400,
    fontSize: 11,
  },

  controlsContainer: {
    flexDirection: "row",
    gap: 39,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderTopWidth: 1,
    borderTopColor: "#E8E8E8",
  },
  addBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
  },
});

export default PostsScreen;
