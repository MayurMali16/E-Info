import React, { useState } from "react";
import Modal from "./Modal";  
import "./ProfileCard.css";

const ProfileCard = ({ profile, onViewSummary, onShowMap }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editableProfile, setEditableProfile] = useState(profile);

 
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditableProfile({ ...editableProfile, [name]: value });
  };

  
  const handleSave = () => {
    setIsEditing(false);
   
  };

  
  const handleCloseModal = () => {
    setIsEditing(false);
  };

  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <div className="profile-card-image">
          <img src={editableProfile.photo} alt={editableProfile.name} />
        </div>
        <div className="profile-card-info">
          <h3>{editableProfile.name}</h3>
          <p>{editableProfile.description}</p>
          <div className="address-section">
            <h4>Address</h4>
            <p>{editableProfile.address.street}, {editableProfile.address.city}</p>
          </div>
        </div>
      </div>

      <div className="profile-card-buttons">
      
        <button onClick={() => onShowMap(editableProfile)}>Summary</button>

       
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>

    
      <Modal
        isOpen={isEditing}
        onClose={handleCloseModal}
        onSave={handleSave}
        editableProfile={editableProfile}
        handleEditChange={handleEditChange}
      />
    </div>
  );
};

export default ProfileCard;