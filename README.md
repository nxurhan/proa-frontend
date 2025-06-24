# Proa Weather Map Frontend

This is the frontend application for the Proa coding challenge. It displays weather stations on an interactive map of Australia using **React**, **Next.js**, and **Leaflet**.

## Features

- Display weather stations as map markers
- View station details including:
  - Name, site, and portfolio
  - Latest measurement values with units and timestamps
- Filter stations by Australian state
- Dynamically updates visible markers based on map viewport

## Tech Stack

- [Next.js 14](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [React Leaflet](https://react-leaflet.js.org/)
- [Leaflet](https://leafletjs.com/)
- CSS modules

## Getting Started

### 1. Clone the repository
```
git clone https://github.com/nxurhan/proa-frontend.git
cd proa-frontend
```

###2. Install dependencies
```
npm install
```
### 3. Run the development server
```
npm run dev
```

Open your browser at http://localhost:3001
Make sure the NestJS backend is running on http://localhost:3000.

## API Dependency
This app relies on the backend API from the proa-api repo. It must be running and seeded with weather station and measurement data.

## Project Structure
~~~
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── LeafletMap.tsx
│   │   │   └── MapClient.tsx
│   │   └── page.tsx
├── public/
├── styles/
├── README.md
~~~
