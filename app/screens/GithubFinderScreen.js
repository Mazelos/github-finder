import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from '../components/tools/AppText';
import UserForm from '../components/UserForm';
import CardList from '../components/CardList';

class GithubUsers extends React.Component {
  // store all the profiles got from gitHub here
  state = {
    profiles: [],
    idStore: [],
  };
  

  // append the new profiles
  addNewProfile = (profileData) => {
    if (profileData.error) {
      console.log(profileData.error);
      return;
    }
    if (this.state.idStore.includes(profileData.id)) {
      return;
    }

    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
      idStore: [...prevState.idStore, profileData.id],
    }));
  };

  // delete an item from the list 
  deleteProfile = (profileId) => {
    if (!this.state.idStore.includes(profileId)) {
      return;
    }
    this.setState((prevState) => ({
      profiles: prevState.profiles.filter(
        (profile) => profile.id !== profileId
      ),
      idStore: prevState.idStore.filter(
        (id) => id !== profileId
      )
    }));
  }

  // handling refresh action - reset the list 
  refreshProfiles = () => {
    this.setState({
      profiles: [],
      idStore:[],
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <AppText fontSize={40} style={styles.title}>Github Finder</AppText>
          <UserForm onSubmit={this.addNewProfile} />
        </View>
        <CardList profiles={this.state.profiles} onItemDelete={this.deleteProfile} onRefresh={this.refreshProfiles}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
  },
  title: {
    paddingVertical: 30,
  },
})

export default GithubUsers;