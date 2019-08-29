import React from "react";

export default function TipCard({ tip, name }) {
  

  return (
    <div className="tip-card">
      <div className="tip-card-amount">
        <p>{`Tip Amount: $${tip.tipAmount}`}</p>
      </div>

      <div className="tip-card-title">
        <p>{`Comment: ${tip.comment}`}</p>
      </div>
    </div>
  );
}