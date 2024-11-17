import React, { useState } from "react";
import ProfilePage from "./components/ProfilePage";
import MapComponent from "./components/MapComponent";
import "./App.css";

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleShowMap = (profile) => {
    setSelectedProfile(profile);
  };

  const handleCloseMap = () => {
    setSelectedProfile(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Employee Directory</h1>
      </header>

      <div className="app-body">
        <ProfilePage onShowMap={handleShowMap} />

        {/* Map Component section */}
        {selectedProfile && (
          <div className="map-section">
            <button className="close-map-btn" onClick={handleCloseMap}>
              Close Map
            </button>
            <MapComponent address={selectedProfile.address} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;