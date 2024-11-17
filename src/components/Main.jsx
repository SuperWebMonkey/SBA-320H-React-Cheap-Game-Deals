import React, { useState, useEffect } from "react";
import axios from "axios";

const api_url = "https://digimon-api.vercel.app/api/digimon";

function Main() {
  const [digimons, setDigimons] = useState([]);
  const [loadDigimons, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(api_url)
      .then((res) => {
        setDigimons(res.data);
        setLoading(false);
      })
      .catch((e) => {
        console.error("Error when fetching Digimon data:", e);
        setLoading(false);
      });
  }, []);

  return (
    <div id="main-section">
      <h1>Digimon World</h1>
      <p>
        Welcome to Digi World. A place where you can find and select your
        Digimon
      </p>

      {loadDigimons ? (
        <p>Loading all digimons...</p>
      ) : (
        <div className="digimons-list">
          {digimons.map((digimon, i) => (
            <div key={i} className="digimon-box">
              <img src={digimon.img} alt={digimon.name} />
              <h2>{digimon.name}</h2>
              <p>Level: {digimon.level}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Main;
