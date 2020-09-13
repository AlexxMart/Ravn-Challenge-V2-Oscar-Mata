# The App

- I have included an unsingned .apk file in this directory so you can just install the app and test it right away.

## Setup and Run Locally

- Clone this repo in your marchine
- `cd` into this directory
- run `yarn && yarn run android`. This will start the server and open an emulator instance if no device is connected and found by the ADV list in your machine

## Screenshots

Loading screen with `<ActivityIndicator />`
![alt text](https://res.cloudinary.com/dqjmv8wtt/image/upload/v1600015229/Screen_Shot_2020-09-13_at_10.39.28_AM_mhh9th.png "Loading Screen")

Characters List
![alt text](https://res.cloudinary.com/dqjmv8wtt/image/upload/v1600015233/Screen_Shot_2020-09-13_at_10.39.45_AM_u7puit.png "Characters List")

Details Page
![alt text](https://res.cloudinary.com/dqjmv8wtt/image/upload/v1600015233/Screen_Shot_2020-09-13_at_10.39.45_AM_u7puit.png "Details Page")

## Assumptions

- I assumed the user would have a low end device with constraints in their data plan so I built the .apk with the Hermes engine, that's the reason why the .apk has a weight of 17.5 MB instead of the usual 42+ MB on a regular build.
- Hermes also helps reduce the "Time To Interaction" (TTI) by cutting the duration of the splash screen by around 40%.
- Used FlatList for the character list instead of a regular map of Views to improve the performance for such large list.
- Also included a custom AppIcon

## Technologies Used

- [Hermes Engine](https://reactnative.dev/docs/hermes)
- React Native
- React Navigation
- Fontawesome
- Apollo Client
- GraphQL
- TypeScript