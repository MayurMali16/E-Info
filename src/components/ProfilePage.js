import React, { useState, useRef } from "react";
import ProfileCard from "./ProfileCard";
import profiles from "../data/Profiles";
import MapComponent from "./MapComponent";
import "./Profilepage.css"

const ProfilePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProfile, setSelectedProfile] = useState(null);


  const mapSectionRef = useRef(null);

  const handleViewSummary = (profile) => {
    setSelectedProfile(profile);
  };

  const handleShowMap = (profile) => {
    setSelectedProfile(profile);
    
    if (mapSectionRef.current) {
      mapSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="profile-page">
      <h1>Employee Directory</h1>
      <input
        type="text"
        placeholder="Search by name..."
        className="search-bar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="profile-list">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              onViewSummary={handleViewSummary}
              onShowMap={handleShowMap} // Pass the map trigger handler
            />
          ))
        ) : (
          <p>No profiles found.</p>
        )}
      </div>

     
      {selectedProfile && (
        <div ref={mapSectionRef} style={{ marginTop: "40px" }}>
          <MapComponent address={selectedProfile.address} />
        </div>
      )}
    </div>
  );
};

export default ProfilePage;