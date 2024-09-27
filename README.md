Medicine Adherence Application 
===

We would like to create an APP for users which will serve as a medicine adherence module.
Many of the diseases require the patient to take medicines at a regular interval. Some of the diseases like BP, Diabetes, Tuberculosis have really strict norms about taking medicines. In case the medicine is not taken in time then the patient’s health is impacted negatively. 

# Features

* App can be used as a guest mode or logged in mode.
* User can add medicines and reminders.
* User can view and download medicine adherence report.
* User can edit and save their profile.
* User can search and add caretaker.
* Caretaker can view user profile, medicines, reminders and also can view and download adherence report.
* Caretaker can notify their patient to take medicine via push notifications.
* User can send a snap to caretaker as a proof of medicine intake.

# Getting Started

## Prerequisites

* Visual Studio Code
* Node
* JDK
* Android development environment
* React Native CLI
    <br>You can refer this also for setting up environment : https://reactnative.dev/docs/environment-setup

## Installing app
Clone the repository and install dependencies on project folder using below commands:
```  
git clone https://github.com/nineleaps-training/medicine_adherence_frontend.git   

cd medicine_adherence_frontend

npm install  
```  
## `npm start`

Runs your app in development mode.
Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:
```
npm start -- --reset-cache
# or
yarn start -- --reset-cache
```

## `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). 
If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

# Technologies Used

* React Native
* Android Studio
* Firebase
* Sonarqube

# Packages Used
- [React Navigation](https://reactnavigation.org/)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [React Native Reanimated Bottom Sheet](https://github.com/osdnk/react-native-reanimated-bottom-sheet)
- [React Native Snap Caraousel](https://www.npmjs.com/package/react-native-snap-carousel)
- [React Native Push Notifications](https://www.npmjs.com/package/react-native-push-notification)
- [React Native Google Signin](https://www.npmjs.com/package/@react-native-google-signin/google-signin)
- [React Native Modal Datetime Picker](https://www.npmjs.com/package/react-native-modal-datetime-picker)
- [React Native Sqlite Storage](https://www.npmjs.com/package/react-native-sqlite-storage)
