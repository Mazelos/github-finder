import React, {useState} from 'react';
import { View, StyleSheet, Modal } from 'react-native';

import AppText from '../components/tools/AppText';
import UserForm from '../components/UserForm';
import CardList from '../components/CardList';
import UserInfo from './UserInfo';

const GithubUsers = ({navigation}) => {
  // states 
  const [profiles, setProfiles] = useState([]);
  const [profilesId, setProfilesId] = useState([]);

  // append the new profiles
  const addNewProfile = (profileData) => {
    if (profileData.error) {
      console.log(profileData.error);
      return;
    }
    if (profilesId.includes(profileData.id)) {
      return;
    }
    // add the new profile
    setProfiles(currentProfiles => [...currentProfiles, profileData]);
    // update the profilesId 
    setProfilesId(currentProfilesId => [...currentProfilesId, profileData.id])
  };

  // delete an item from the list 
  const deleteProfile = (profileId) => {
    if (!profilesId.includes(profileId)) {
      return;
    }
    setProfiles(currentProfiles => currentProfiles.filter(profile => profile.id !== profileId));
    setProfiles(currentProfilesId => currentProfilesId.filter(id => id !== profileId));
  }

  // handling refresh action - reset the list 
  const refreshProfiles = () => {
    setProfiles([]);
    setProfilesId([]);
  }

  // navigate to userInfoScreen and pass some info
  const handleOnShowUserInfo = profileId => {
    if (!profilesId.includes(profileId)) {
      return;
    }
    const userToShow = profiles.find( profile => profile.id === profileId);
    navigation.navigate('user-info', {
      mainInfo : {
        imageSource: userToShow.avatar_url,
        loginName: userToShow.login,
        githubLink: userToShow.html_url,
        bio: userToShow.bio,
        followers: userToShow.followers,
        following: userToShow.following
      },
      otherInfo : [
        userToShow.name,
        userToShow.location,
        userToShow.company,
        userToShow.email,
      ],
      links : [userToShow.blog, userToShow.organizations_url]
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText fontSize={40} style={styles.title}>Github Finder</AppText>
        <UserForm onSubmit={addNewProfile} />
      </View>
      <CardList 
        profiles={profiles} 
        onItemDelete={deleteProfile} 
        onRefresh={refreshProfiles} 
        onShowUserInfo={handleOnShowUserInfo}
      />
    </View>
  );
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