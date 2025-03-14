import { useEffect, useState } from "react";
import User from "./user";
import "./styles.css";

const GitProfileFinder = () => {
  const [userName, setUserName] = useState("haseeb318");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchGitProfileData = async () => {
    if (!userName.trim()) return;
    setLoading(true);
    setError("");
    
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();

      if (response.ok) {
        setUserData(data);
        setUserName("");
      } else {
        setError(data.message || "User not found");
        setUserData(null);
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitProfileData();
  }, []);

  return (
    <div className="mainGit-Container">
      
      <div className="git--input">
        <input
          type="text"
          placeholder="Enter GitHub Username"
          onChange={(event) => setUserName(event.target.value)}
          value={userName}
        />
        <button onClick={fetchGitProfileData} disabled={!userName.trim()}>
          Find
        </button>
      </div>

      {loading ? (
        <div className="loading">
          <span className="loader"></span>
        </div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        userData && <User user={userData} />
      )}
    </div>
  );
};

export default GitProfileFinder;
