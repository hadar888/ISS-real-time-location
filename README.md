
# ISS Location Tracker

This project visualizes the current location of the International Space Station (ISS) on a map using React, Leaflet, and TypeScript, with a backend powered by Express. The server fetches ISS location data from a public API and serves it to the front-end.

## Features
- Displays the ISS's current location on a map.
- Updates the location every 15 seconds.
- Allows manual refreshing of the ISS location.
- Backend server to fetch data from the Open Notify API.

## Technologies Used
- **React**: Front-end framework for building the user interface.
- **Leaflet**: JavaScript library for embedding interactive maps.
- **Styled-components**: For styling the components.
- **TypeScript**: Adds static types to JavaScript.
- **Webpack**: Bundler used to compile the project.
- **Express**: Backend server to handle API requests.
- **Axios**: HTTP client used in the server to fetch data.

## Setup

### 1. Clone the repository
```bash
git clone https://github.com/hadar888/ISS-real-time-location.git
cd ISS-real-time-location
```

### 2. Set up the backend
```bash
cd server
npm i
npm start
```

### 3. Set up the frontend
```bash
cd client
npm i
npm start
```
Visit `http://localhost:3000` to view the application in action.

## Backend Server

The backend server is responsible for fetching the ISS location data from the **Open Notify API** and serving it to the front-end. It is configured as follows:

### 1. `Express Server`
- The server runs on port 4000.
- When the front-end requests the ISS location, the server fetches the data from the **Open Notify API** (`http://api.open-notify.org/iss-now.json`) and returns it as JSON.

### 2. **CORS Configuration**
The server is configured to allow cross-origin requests from `http://localhost:3000`.

### 3. **API Endpoint**
- **GET `/`**: Fetches the ISS's current location from the Open Notify API and returns it as JSON:
    ```json
    {
      "iss_position": {
        "latitude": "value",
        "longitude": "value"
      },
      "timestamp": "timestamp"
    }
    ```

## Frontend - Component Overview
### MapContainer
**Role:** The main container for the map and the information about the ISS location.

**Features:**
- Fetches the ISS location every 15 seconds via a GET request to the backend server.
- Displays the MapIssLocation component with the ISS location as a marker on the map.
- Passes location data to LocationInfo to show additional details (latitude, longitude, and last update time).
- Allows refreshing the ISS location by clicking the refresh button.

### MapIssLocation
**Role:** Displays the ISS's current location on a map using the react-leaflet library.

**Features:**
- Renders a map with a tile layer from OpenStreetMap.
- Displays a marker at the position of the ISS using the Marker component from Leaflet.
- Updates the map view when the ISS location changes using the MapUpdater component.

### MapUpdater
**Role:** Updates the map view to center on the new ISS location.

**Features:**
- Uses the useMap hook from react-leaflet to get access to the Leaflet map instance.
- When the ISS location changes, the map view is updated to center on the new coordinates.

### LocationInfo
**Role:** Displays the ISS location information (latitude, longitude, and last update time).

**Features:**
- Displays the current ISS location details.
- Allows manual refreshing of the location with a button (RefreshLocation).
- The refresh button is disabled during the data-fetching process.

### RefreshLocation
**Role:** A button that triggers the refresh of the ISS location when clicked.

**Features:**
- Displays "Loading..." when the data is being fetched and is disabled.
- Displays "Refresh Location" when the button is active.
