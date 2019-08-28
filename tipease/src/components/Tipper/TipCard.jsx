import React from "react";

export default function TipCard({ tip, name }) {
  // TODO: replace defaults with data from the server
  name = name ||  {first: "Jerry", last: "Coldwell"}
  tip = tip || {
    amount: 25,
    comment: 'Really great server.'
  }

  return (
    <div className="tip-card">
      <div className="tip-card-amount">
        <p>{`$${tip.amount}`}</p>
      </div>

      <div className="tip-card-title">
        <p>{`${name.first} ${name.last}`}</p>
      </div>
    </div>
  );
}
