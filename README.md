
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

## Backend Server (Express)

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
