# ColumbusUnderground Feed Reader

## Stack
- Spring Boot
- Groovy
- JPA
- H2
- ROME

- Create React App
- Material-UI

## Running
### Prereqs
Java 11

### Starting the app
```
cd columbus-underground-feed
./gradlew bootRun
```
The app will now be running at http://localhost:8080

This will use the production build of the frontend.

### Running the frontend dev server and watchers
NPM is needed to run the frontend scripts directly
```
cd frontend
npm run start
```

### API
#### Routes
- /api/feed: Returns a list of all articles in the feed in JSON

## Building
```
./gradlew build
```

## Executing the built application
The built app lives in `build/libs/[VERSION]-demo.jar`
It is not setup to be published anywhere.

## Running the build application
```
java -jar 0.0.1-demo.jar
```

