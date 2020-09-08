# Github Finder

Mobile application you can use to find Github users and get their infos.

I built this with Expo and React Native in managed workflow.

</br></br>



### Install the project 

Clone the repo and install all the dependencies (Expo must be installed globally).

```shell
git clone https://github.com/Mazelos/github-finder.git my-project
cd my-project
yarn install
```

</br>



### Start the project 

- Start the project with the Cli tool.

  ```shell
  yarn start
  ```

  in this case we can use a physical device connecting it via Expo app with the Qr code or you can run it on the Ios simulator and Android emulator typing `i` or `a` in the terminal (type `h` for more info).
</br>

- Start directly in the desidered emulator

  ```shell
  yarn run android
  yarn run ios
  ```

</br>



### Publish using Expo client

Publish the app to your [dashboard in expo](https://expo.io/).

```shell
expo publish
```

Expo-cli will ask for email and password.

</br>




### Build for Android

- Build an Apk file and upload it to Expo Dashboard
  
  ```shell
  expo build:android
  ```
  
  Choose `apk` as build type and `Generate new keystore` when asked. This will take a bit.</br>
  *if An error occurs at `Generate new keystore` step you need to download and install JDK from the [official site](https://www.oracle.com/java/technologies/javase-jdk14-downloads.html).

</br>

- Get keystore and save it to `.jks` file
  
  ```shell
  expo fetch:android:keystore
  ```

  This file is needed to re-build the application in the future.
