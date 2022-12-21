import React from "react";
import { render } from "react-dom";
import { UserData } from '../../Types';


type SettingsProps = {
  setUserData: (data: UserData) => void;
};

//TODO: update with info from user data object under diet and preferences
export default ({setUserData }: SettingsProps) => (
  <section id="settings">
    <div className="settings-container">
      <h1>Settings</h1>
      <div className="current-preferences">
        <h3>Current Preferences:</h3>
        <h4>Diet</h4>
        {}
        <h4>Intolerances</h4>
        <button>Update Preferences</button>
      </div>
      <button>Change Password</button>
    </div>
  </section>
);
