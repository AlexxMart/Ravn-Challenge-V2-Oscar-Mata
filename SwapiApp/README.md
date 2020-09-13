# The App

- I have included an unsingned .apk file in this directory so you can just install the app and test it right away.

## Setup and Run Locally

- Clone this repo in your marchine
- `cd` into this directory
- run `yarn && yarn run android`. This will start the server and open an emulator instance if no device is connected and found by the ADV list in your machine

## Assumptions

- I assumed the user would have a low end device with constraints in their data plan so I build the .apk with the Hermes engine, that's the reason why the .apk has a weight of 16.6 MB instead of the usual 42+ MB on a regular build, I also used included FlatList instead of a regular map of Views to show the list of characters to make sure we improve performance for such long list.
- Also included a rounded AppIcon for devices that use that type of assets. Didn't find the same asset for both square and circled AppIcons

## Technologies Used

- React Native
- React Navigation
- Fontawesome
- Apollo Client
- GraphQL
- TypeScript