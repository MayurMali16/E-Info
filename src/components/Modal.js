import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, onSave, editableProfile, handleEditChange }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Edit Profile</h3>
        <div className="modal-body">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={editableProfile.name}
            onChange={handleEditChange}
          />
          
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={editableProfile.description}
            onChange={handleEditChange}
          />
          
          <label>Street:</label>
          <input
            type="text"
            name="street"
            value={editableProfile.address.street}
            onChange={handleEditChange}
          />
          
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={editableProfile.address.city}
            onChange={handleEditChange}
          />
        </div>

        <div className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          <button onClick={onSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;