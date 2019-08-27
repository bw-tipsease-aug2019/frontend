import React from "react";

export default function TipCard({ tips }) {
  return (
    <div className="tip-card">
      <div className="tip-card-title">
        <p>Tipper Name</p>
      </div>
      <div className="tip-card-amount">
        <p>$5</p>
      </div>
    </div>
  );
}
