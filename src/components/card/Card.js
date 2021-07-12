import React from "react";

// I did not use cardId here because I did not need it, but I kept it
// to show that it can be used here
export default function Card({ cardId, title, description }) {
  return (
    <div className="sidebar-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
