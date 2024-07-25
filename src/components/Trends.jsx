import React from "react";
import "./Trends.css";

const Trends = () => {
  const trends = [
    { title: "Geceliği 100", tweets: "13.8K" },
    { title: "Imran Khan", tweets: "32.5K" },
    { title: "#PakvsAus", tweets: "45.2K" },
    { title: "Monsoon rains", tweets: "19.7K" },
    { title: "#EidMubarak", tweets: "102.3K" },
    { title: "PTI Government", tweets: "28.6K" },
    // Add more trends here
  ];

  return (
    <div className="trends">
      <h3>Trends for you</h3>
      {trends.map((trend, index) => (
        <div key={index} className="trend">
          <p>{trend.title}</p>
          <p>{trend.tweets} Tweets</p>
        </div>
      ))}
    </div>
  );
};

export default Trends;
