import React from "react";

export default () => (
  <section id="settings">
    <div className="settings-container">
      <h1>Settings</h1>
      <div className="current-preferences">
        <h3>Current Preferences:</h3>
        <h4>Diet</h4>
        <h4>Intolerances</h4>
        <h4>Exclude</h4>
        <button>Update Preferences</button>
      </div>
      <button>Change Password</button>
    </div>
  </section>
);
