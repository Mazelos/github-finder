import React, {useState} from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import AppText from '../components/tools/AppText';
import colors from '../config/colors';
import getUsers from '../utils/getUsers';

// render the form to input the github username
const UserForm = (props) => {
  const [userName, setUserName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userInfo = await getUsers(userName);
    props.onSubmit(userInfo);
    setUserName("");
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        type="text"
        value={userName}
        onChangeText={(text) => setUserName(text)}
        placeholder="Search by Github username"
        required
        style={styles.formInput}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <AppText fontSize={22} color={colors.whiteDefault} >Add Card</AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: "95%",
    backgroundColor: colors.cardBackground,
    borderRadius: 15,
    overflow: "hidden",
  },
  formInput: {
    fontSize: 22,
    marginBottom: 30,
    marginTop: 10,
    paddingHorizontal: 10
  },
  submitButton: {
    backgroundColor: colors.buttonColor,
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
  },
})

export default UserForm;