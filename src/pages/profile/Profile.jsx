import "./Profile.css";
import { useDispatch, useSelector } from "react-redux";

import Account from "../../components/account/Account";
import { useEffect, useState } from "react";
import { setUserInfos } from "../../store/User/user";

import { getUserInfos, saveEditUserProfile } from "../../api/api";

export default function Profile() {
  // use State
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const [newFirstName, setNewFirstName] = useState();
  const [newLastName, setNewLastName] = useState();

  // Use Disptach Use Selector / Use Effect

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const loadUserInfo = async () => {
    try {
      const response = await getUserInfos();
      dispatch(setUserInfos(response));
      console.log(response);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    loadUserInfo();
  }, []);

  // Edit Name
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Save Edit
  const handleSaveEdit = async (event) => {
    event.preventDefault();
   
    try {
      const response = await saveEditUserProfile(newFirstName, newLastName);      
      dispatch(setUserInfos(response));
      setIsEditing(false);
      if (newFirstName.trim() || newLastName.trim() === "") {
        alert("please complete all the inputs");
        return;
      }
    } catch (error) {}
   
  };
  // Cancel Edit
  const handleCancelEdit = () => {
    setIsEditing(false);
  };


  return (
    <>
      {!isLoading && (
        <main className="bg-dark">
          <div className="header">
            <h1 id="welcome-name">
              Welcome back <br />
              {!isEditing && <span id="fullName">{user.firstName}</span>}
            </h1>
            {!isEditing && (
              <button id="edit-button" type="button" onClick={handleEdit}>
                Edit Name
              </button>
            )}
            {isEditing && (
              <div id="edit-section">
                <form name="edit">
                  <div className="profile-input-wrapper">
                    <input
                      type="text"
                      placeholder="firstname"
                      required
                      onChange={(e) => setNewFirstName(e.currentTarget.value)}
                    />
                  </div>
                  <div className="profile-input-wrapper">
                    <input
                      type="text"
                      placeholder="lastname"
                      required
                      onChange={(e) => setNewLastName(e.currentTarget.value)}
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="save-button"
                      onClick={handleSaveEdit}
                    >
                      Save
                    </button>
                    <button
                      type="submit"
                      className="cancel-button"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
          <h2 className="sr-only">Accounts</h2>
          <Account
            title="Argent Bank Checking (x8349)"
            amount="$2,082.79"
            description="Available Balance"
            linkPath="/transactions"
            button="View transactions"

          />
          <Account
            title="Argent Bank Savings (x6712)"
            amount="$10,928.42"
            description="Available Balance"
            linkPath="/transactions"
            button="View transactions"
          />
          <Account
            title="Argent Bank Credit Card (x8349)"
            amount="$184.30"
            description="Current Balance"
            linkPath="/transactions"
            button="View transactions"
          />
        </main>
      )}
    </>
  );
}
