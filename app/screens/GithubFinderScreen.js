import React, {useState} from 'react';
import { View, StyleSheet, Modal } from 'react-native';

import AppText from '../components/tools/AppText';
import UserForm from '../components/UserForm';
import CardList from '../components/CardList';
import UserInfo from './UserInfo';
const GithubUsers = () => {
  // states 
  const [profiles, setProfiles] = useState([]);
  const [profilesId, setProfilesId] = useState([]);
  const [showUserInfo, setShowUserInfo] = useState(false); 
  const [userInfoToShow, setUserInfoToShow] = useState({});

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

  // open modal to show user info...
  const handleOnShowUserInfo = profileId => {
    if (!profilesId.includes(profileId)) {
      return;
    }
    setUserInfoToShow(profiles.find( profile => profile.id === profileId));
    setShowUserInfo(true);
  }

  const handleOnCloseUserInfo = () => {
    setShowUserInfo(false);
    setUserInfoToShow({});
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <AppText fontSize={40} style={styles.title}>Github Finder</AppText>
          <UserForm onSubmit={addNewProfile} />
        </View>
        <CardList profiles={profiles} onItemDelete={deleteProfile} onRefresh={refreshProfiles} onShowUserInfo={handleOnShowUserInfo}/>
      </View>
      <Modal
        visible={showUserInfo}
        onRequestClose={handleOnCloseUserInfo}
        statusBarTranslucent
        animationType="slide"
        hardwareAccelerated
      >
        <UserInfo 
          mainInfo={{
            imageSource: userInfoToShow.avatar_url,
            loginName: userInfoToShow.login,
            githubLink: userInfoToShow.html_url,
            bio: userInfoToShow.bio,
            followers: userInfoToShow.followers,
            following: userInfoToShow.following
          }}
          otherInfo={[
            userInfoToShow.name,
            userInfoToShow.location,
            userInfoToShow.company,
            userInfoToShow.email,
          ]}
          links={[userInfoToShow.blog, userInfoToShow.organizations_url]}
          onPressCloseButton={handleOnCloseUserInfo}
        />
      </Modal>
    </>
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