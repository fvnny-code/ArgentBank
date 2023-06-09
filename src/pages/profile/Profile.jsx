import "./Profile.css";

import Account from "../../components/account/Account";

export default function Profile() {
  return (
    <main className="bg-dark">
      <div className="header">
        <h1 id="welcome-name">
          Welcome back <br />
          <span id="fullName">Jean-Michel Pouetpouet</span>
        </h1>
        <button id="edit-button" type="button">
          Edit Name
        </button>
        <div id="edit-section">
          <form name="edit">
            <div className="profile-input-wrapper">
              <input type="text" placeholder="firstname" required />
            </div>
            <div className="profile-input-wrapper">
              <input type="text" placeholder="lastname" required />
            </div>
          </form>
          <div>
            <button type="submit" className="save-button">
              Save
            </button>
            <button type="submit" className="cancel-button">
              Cancel
            </button>
          </div>
        </div>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
      <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
      <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
    </main>
  );
}